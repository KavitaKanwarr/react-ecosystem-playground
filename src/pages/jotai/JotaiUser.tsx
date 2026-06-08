import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { emojisDataAtom, fetchEmojis, userAtom } from "../../store/jotaiStore";

const JotaiUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const data = useAtomValue(emojisDataAtom);
  const handleFetchEmojis = useSetAtom(fetchEmojis);
  console.log("🚀 ~ JotaiUser ~ user:", user);

  const handleUserName = (e) => {
    setUser({ name: e.target.value });
  };

  const handleApiCall = () => {
    handleFetchEmojis();
  };

  return (
    <div className="my-20">
      <input type="text" value={user?.name} onChange={handleUserName} />

      {data ? (
        "loading..."
      ) : (
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
      )}
      <button onClick={handleApiCall}>Fetch Data</button>
    </div>
  );
};

export default JotaiUser;
