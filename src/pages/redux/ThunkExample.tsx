import { useDispatch, useSelector } from "react-redux";
import { fetchEmojis } from "../../store/redux/reduxActions";
import type {
  AppDispatch,
  RootInitialState,
} from "../../store/redux/reduxStore";

const ThunkExample = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, fetchedData } = useSelector(
    (state: RootInitialState) => state.data
  );

  const getData = () => {
    dispatch(fetchEmojis());
  };

  return (
    <div className="container mt-20">
      {loading ? (
        "loading..."
      ) : fetchedData ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10px, 1fr))",
            gap: "16px",
          }}
        >
          {Object.entries(fetchedData).map(([name, url]) => (
            <div key={name}>
              <img src={url} alt={name} width={20} height={20} />
            </div>
          ))}
        </div>
      ) : null}
      <button onClick={getData}>Fetch Data</button>
    </div>
  );
};

export default ThunkExample;
