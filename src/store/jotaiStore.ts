import { atom } from "jotai";

// Jotai -> Atomic state management for React.
// Jotai intentionally makes global state feel like useState but globally accessible

// The atom (smallest unit of state) itself is not the value. It is a state definition/configuration object managed by Jotai's store
export const countAtom = atom<number>(0); // it's not the value it's an object pointing to the data and value exists in jotai store

export const userAtom = atom({ name: "" });

// derived value from countAtom, we won't directly set it and it is using get only so no setter needed use useAtomValue instead of useAtom
// derived state is not stored rather re-computed
// atom(readFn) - can only read, cannot write
export const doubleAtom = atom((get) => {
  return get(countAtom) * 2;
});

// Write only atom
// atom(readValue,  writeFn)
// const incrementAtom = atom(
//     null,
//     (get, set) => {
//       set(countAtom, get(countAtom) + 1);
//     }
//   );

// A set-only (write-only) atom in Jotai is created by passing two arguments to atom():
// - 1st arg = the read value → null for write-only
// - 2nd arg = the write function (get, set, ...args) => {...}
export const tripleAtom = atom(null, (get, set) => {
  set(countAtom, get(countAtom) * 3);
});

type EmojisResponse = Record<string, string>;
export const emojisDataAtom = atom<EmojisResponse | null>(null);

export const fetchEmojis = atom(null, async (_get, set) => {
  const res = await fetch("https://api.github.com/emojis");
  const data: EmojisResponse = await res.json();
  set(emojisDataAtom, Object.fromEntries(Object.entries(data).slice(0, 40)));
});

// we could make above as read function itself and handle pending via suspense if we didn't want it to trigger manually
// export const emojisDataAtom = atom(async () => {
//     const res = await fetch("https://api.github.com/emojis");
//     const data = await res.json();
//     return Object.fromEntries(Object.entries(data).slice(0, 40));
//   });

// Jotai have centralised store -> Internally yes, conceptually no.
// useAtom -> Read + Write
// useAtomValue -> Read only
// useSetAtom -> Write only
// get() reads another atom's value.
