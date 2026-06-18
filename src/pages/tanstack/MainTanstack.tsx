// install via - npm i @tanstack/react-query

import DataTanstack from "./DataTanstack";

// Tanstack/React Query -> is a server-state management library

// Problem - for managinging server side data, devs mostly used to write repeititve code and complex loogics for: loading, error, retry failed req, re-fetch, cache, background updates, pagination, infinite scrolling, optimistic updates

// Cache - the data is not stored in browser cache (the HTTP cache in devtools) , it's stored in-memory JavaScript cache managed by React Query.
//       if want to access and see this achce install @tanstack/react-query-devtools or logs can help
//       HTTP cache - it is managed by browser while react query cache managed by Tanstack Query
//       HTTP cache - visible in network/application tabs while react query cache visible in react query devtools
//       HTTP cache - can survive page loads while react query cache usually cleared on page loads if not persisted
//       HTTP cache  - Stores HTTP responses while React Query cahce Stores JavaScript data objects

// Without tanstack -
// Component A -> API Call
// Component B -> API Call
// Component C -> API Call
// Component D -> API Call
// Component E -> API Call

// With tanstack - no more storage of data in states just cache it
// Component A -> API Call
// Cache stores result
// B -> Cache
// C -> Cache
// D -> Cache
// E -> Cache

// Core Acrchitecture
// Backend API
//     ↓
// Query Function
//     ↓
// Query Cache
//     ↓
// useQuery
//     ↓
// Component

// useQuery → reads data (GET)

// useMutation → changes data (e.g. - POST, PUT, PATCH, DELTE)

// invalidateQueries() - This cached data might no longer be correct. Mark it stale and fetch fresh data. most commonly used method because after creating, updating, or deleting data

// --------------------------------------------------------------

// useQuery returns data,  isLoading (on first fetch only),  isError,  error,  isFetching (on every refetch)

const MainTanstack = () => {
  // see main.tsx to peek at the provider and setup
  return (
    <div className="m-auto">
      <DataTanstack />
    </div>
  );
};

export default MainTanstack;

// ------------The devtool--------------

// React Query keeps inactive queries for 5 minutes (cacheTime) by default then it gets garbage collected
// States:
// 1. Fresh - when in Fresh mode it doesn't refetch
// 2. Fetching
// 3. Paused - when no network, refetch cannot happen
// 4. Stale - (staleTime) default: 0 , the moment data arrives it's stale. staleTime: Infinity, to prevent refetch
// 5. Inactive - (cacheTime) default: 5 min, when component unmounts

// There is gcTime param which we can set to garbage collect data early or late
// When refetching happens? - when in stale, then on unmount and switching tabs or manually using refetch() or invalidateQueries() for same component

// There are more properties like:
// refetchOnMount: true
// refetchOnWindowFocus: true
// gcTime (default 5 min) - How long inactive queries stay in cache
// staleTime

// Mount
// ↓
// Fetching
// ↓
// Success
// ↓
// Fresh only when we increase staleTime then it will be in "Fresh" state until that period and then become stale
// ↓
// Stale (immediately because staleTime=0)
// ↓
// Component unmounts
// ↓
// Inactive
// ↓
// 5 minutes pass
// ↓
// Garbage collected
