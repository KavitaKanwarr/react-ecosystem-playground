import { useMutation, useQuery } from "@tanstack/react-query";

const fetchTanstackData = async () => {
  try {
    const response = await fetch("https://api.github.com/events");
    const jsonData = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("🚀 ~ fetchTanstackData ~ jsonData:", jsonData);

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const createUser = () => {
  // perform operations
};

const DataTanstack = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"], // chache ID, every query needs a unique key, for dynamic query key we can use ["user", 3] -> user-3
    queryFn: fetchTanstackData,
  });
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data"],
      });
    },
    onSettled: () => {
      // success or failure
      console.log("done");
    },
  });

  if (isLoading) return <p>Loading data for tanstack...</p>;
  if (isError) return <p>{error?.message}</p>;

  const handleCreateUser = () => {
    mutation.mutate({
      name: "John",
    });
    // or
    // await mutation.mutateAsync(data);
  };

  return (
    <div>
      {data?.map((d) => (
        <div key={d?.actor?.id}>{d?.actor?.login}</div>
      ))}
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default DataTanstack;
