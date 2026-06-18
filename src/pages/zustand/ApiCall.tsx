import { useZustandStore } from "../../store/zustandStore";

const ApiCall = () => {
  const data = useZustandStore((state) => state.data);
  const loading = useZustandStore((state) => state.loading);
  console.log("🚀 ~ ApiCall ~ data:", data);
  const fetchData = useZustandStore((state) => state.fetchGithubData);

  return (
    <div className="m-auto">
      {loading ? (
        "loading..."
      ) : data ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] gap-2  mb-3 [&>div]:border-1 [&>div]:border-gray-500 [&>div]:p-1">
          {Object.entries(data).map(([name, url]) => (
            <div key={name}>
              <img src={url} alt={name} />
            </div>
          ))}
        </div>
      ) : null}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default ApiCall;
