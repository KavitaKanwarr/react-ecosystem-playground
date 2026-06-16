import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { useState } from "react";

type typeTodo = { id: number; text: string; completed: boolean };
type typeTodos = typeTodo[] | [];

const getTodos = (): typeTodos => {
  return queryClient.getQueryData(["todos"]) ?? [];
};

const setTodo = async (data: typeTodo) => {
  queryClient.setQueryData(["todos"], (oldData: typeTodos = []) => [
    ...oldData,
    data,
  ]);
};

const removeTodo = async (id: number) => {
  // get stored todos?
  const todos = queryClient.getQueryData<typeTodos>(["todos"]) ?? [];
  const filteredTodos = todos.filter((d) => d.id !== id) ?? [];
  queryClient.setQueryData(["todos"], () => filteredTodos);
};

const TanstackTodo = () => {
  const [text, setText] = useState("");
  const { isLoading, data } = useQuery<typeTodos>({
    queryKey: ["todos"],
    initialData: [],
    queryFn: getTodos,
  });
  const mutation = useMutation({
    mutationFn: setTodo,
    onSuccess: () => {
      console.log("Todo added");
    },
    onError: () => {
      console.log("Failed to add todo");
    },
    onSettled: () => {
      console.log("Todo in finally");
    },
  });
  const mutation2 = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      console.log("Todo removed");
    //   queryClient.invalidateQueries({
    //     queryKey: ["todos"],
    //   });
    },
    onError: () => {
      console.log("Failed to removed todo");
    },
    // Runs whether success or failure
    onSettled: () => {
      console.log("Remove Todo in finally");
    },
  });

  if (isLoading) return <p>Loading...</p>;

  const strikeThrough = {
    textDecoration: "line-through",
  };

  const handleSetTodo = () => {
    if (text) {
      const todoData: typeTodo = {
        id: Math.max(0, ...data.map((d) => d.id)) + 1,
        text: text,
        completed: false,
      };
      mutation.mutate(todoData);
      // Note: use mutateAsync when we have a dependency on the transaction
    }
  };

  const handleRemoveTodo = (id: number) => {
    mutation2.mutate(id);
  };

  return (
    <>
      <h1>TODO List</h1>
      {data?.map((todo: typeTodo) => (
        <div key={todo.id} style={strikeThrough}>
          <h6>{todo.text}</h6>
          <button onClick={() => handleRemoveTodo(todo.id)}>🗑️</button>
        </div>
      ))}
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSetTodo}>Set Todo</button>
      </div>
    </>
  );
};

export default TanstackTodo;
