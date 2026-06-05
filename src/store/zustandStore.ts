import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type zustandStore = {
  count: number;
  user: {
    name: string;
    age: number;
  };
  loading: boolean;
  error: string | null;
  data: unknown;
  incrementCounter: () => void;
  decrementCounter: () => void;
  updateName: () => void;
  fetchGithubData: () => void;
};

// create returns a hook
// create() returns a hook that allows components to subscribe to and update store state.
export const useZustandStore = create<zustandStore>()(
  // devtools, immer and persist are middleware. It is a wrapper that adds extra functionality to a store.
  devtools(
    // integrates Zustand with Redux DevTools for debugging
    immer(
      // easy update for nested data , preserve immutability
      // persist(
      // automatically saves Zustand state and restores it after page refresh
      (set, get) => {
        return {
          count: 0,
          user: {
            name: "",
            age: 20,
          },
          loading: false,
          error: null,
          data: null,

          // Action - An action is a function stored inside the Zustand store that updates or interacts with state
          incrementCounter: () =>
            // functional update - Use when new value depends on old value
            set(
              (state) => ({
                count: state.count + 1,
              }),
              false, // replace the entire store state? would erase other states
              "increment counter" //name of action
            ),
          decrementCounter: () => {
            const currentCount = get().count;
            if (currentCount > 0) {
              // direct update - Use when you already know the value
              set({
                count: currentCount - 1,
              });
            }
          },
          resetCounter: () =>
            set(() => ({
              count: 0,
            })),
          updateName: () =>
            set((state) => {
              state.user.name = "Kelly"; // this syntax doesn't need spread because of immer
            }),
          fetchGithubData: async () => {
            set({ loading: true, error: null });

            try {
              const response = await fetch("https://api.github.com/emojis");

              const jsonData = await response.json();
              const limitedObject = Object.fromEntries(
                Object.entries(jsonData).slice(0, 40)
              );

              set({
                data: limitedObject,
                loading: false,
              });
            } catch (error) {
              set({
                error: error,
                loading: false,
              });
            }
          },
        };
      }
      // { name: "testing zustand store" }
    )
    // )
  )
);
