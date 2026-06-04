import { useZustandStore } from "../../store/zustandStore";

const ApiCall = () => {
  const data = useZustandStore((state) => state.data);
  const loading = useZustandStore((state) => state.loading);
  console.log("🚀 ~ ApiCall ~ data:", data);
  const fetchData = useZustandStore((state) => state.fetchGithubData);

  return (
    <div className="container mt-20">
      {loading ? (
        "loading..."
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10px, 1fr))",
            gap: "16px",
          }}
        >
          {Object.entries(data).map(([name, url]) => (
            <div key={name}>
              <img src={url} alt={name} width={20} height={20} />
            </div>
          ))}
        </div>
      ) : null}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default ApiCall;
