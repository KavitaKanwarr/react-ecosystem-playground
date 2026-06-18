import { useContext } from "react";
import { MainContext } from "./mainContextWrapper";

const ThemeExample = () => {
  const { theme } = useContext(MainContext);
  console.log("🚀 ~ ThemeExample ~ theme:", theme);
  return <div className="m-auto">{theme}</div>;
};

export default ThemeExample;
