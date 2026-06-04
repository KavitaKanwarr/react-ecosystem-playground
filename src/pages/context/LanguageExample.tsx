import { useContext } from "react";
import { MainContext } from "./mainContextWrapper";

const LanguageExample = () => {
  const { language } = useContext(MainContext);
  console.log("🚀 ~ LanguageExample ~ language:", language);
  return <div className="container">{language}</div>;
};

export default LanguageExample;
