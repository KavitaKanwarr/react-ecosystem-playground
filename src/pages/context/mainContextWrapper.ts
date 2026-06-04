import { createContext } from "react";

// Context is React's built-in mechanism for sharing data across a component tree
// Context only shares values. It doesn't manage state
// Is Context a state management library? - Not really - it's a state sharing mechanism to avoid props drilling
export const MainContext = createContext({
  theme: "light",
  language: "English",
});
