// INSTALL
// 1. RHF - npm i react-hook-form
// 2. ZOD - npm i zod @hookform/resolvers

// React hook form solves this problem where in forms we needed to have state for each input and their handlers which were causing lots or state, lots of re-renders and bolierplate. React hook form uses uncontrolled components and refs internally to solve them which also makes it faster bcz no re-rendering on every key stroke.
// Advantages:
// 1. Better performance
// 2. Less re-rendering
// 3. Less code

// Why use Zod?
// - Centralized validation
// - Better TypeScript support
// - Reusable schemas

// register and controller -> Use register for native inputs while controller for third party element like MUI select

// watch() vs getValues() - watch is reactive and update on typing while getvalues() takes snapshot it shows current values only

import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, "Too small Name"),
  email: z.email("Provide a valid Email address"),
  password: z.string().min(6),
  skills: z.array(
    z.object({
      value: z.string().min(1, "Skill is required"),
    }),
  ),
});

type FormData = z.infer<typeof formSchema>;

const MainReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    watch,
    reset,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // if not added then errors will trigger on submit by default
    defaultValues: {
      name: "Meera",
      email: "meera@abc.com",
      password: "abv",
      skills: [{ value: "" }],
    },
  });
  console.log("🚀 ~ MainReactHookForm ~ values:", getValues());
  const name = watch("name");
  console.log("🚀 ~ MainReactHookForm ~ name:", name);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(() => resolve("done"), 2000));
    console.log(data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* without zod, errors are messy objects */}
        {/* <input {...register("name", {
        required: "Name is required",
        minLength: {
          value: 3,
          message: "should contain atleast three characters"
        }
      })} /> */}
        <div>
          <input {...register("name")} />
          {formState?.errors?.name?.message}
        </div>
        <div>
          <input {...register("email")} />
          {formState?.errors?.email?.message}
        </div>
        <div>
          <input {...register("password")} />
          {formState?.errors?.password?.message}
        </div>
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input {...register(`skills.${index}.value`)} />
              {formState?.errors?.skills?.[index]?.value?.message}
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => append({ value: "" })}>
            Add skill
          </button>
        </div>
        <button type="submit" disabled={formState.isSubmitting}>
          Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default MainReactHookForm;
