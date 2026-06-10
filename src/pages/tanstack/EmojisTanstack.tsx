import { useQuery } from "@tanstack/react-query";

const fetchEmojisDataForTanstack = async (): Promise<
  Record<string, string>
> => {
  const data = await fetch("https://api.github.com/emojis");
  const parsedData: Record<string, string> = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("🚀 ~ fetchTanstackData ~ jsonData:", parsedData);

  return Object.fromEntries(Object.entries(parsedData).slice(0, 40));
};

const EmojisTanstack = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["emojis"],
    queryFn: fetchEmojisDataForTanstack,
    staleTime: 4000, // 4 seconds
  });
  console.log("🚀 ~ EmojisTanstack ~ data:", data);

  if (isLoading) return <p>Loading data for tanstack...</p>;
  if (error) return <p>{error?.message}</p>;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(10px, 1fr))",
          gap: "16px",
        }}
      >
        {Object.entries(data ?? {}).map(([name, url]) => (
          <div key={name}>
            <img src={url} alt={name} width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojisTanstack;
