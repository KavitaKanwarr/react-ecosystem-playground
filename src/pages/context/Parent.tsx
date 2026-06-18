import { useState } from "react";
import { MainContext } from "./mainContextWrapper";
import ThemeExample from "./ThemeExample";
import LanguageExample from "./LanguageExample";

const Parent = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <MainContext.Provider value={{ theme, language }}>
      <div className="m-auto">
        <div>
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            Theme Toggle
          </button>
          <button
            onClick={() =>
              setLanguage((prev) => (prev === "English" ? "French" : "English"))
            }
          >
            Language Toggle
          </button>
        </div>
        <div>
          {/* ThemeExample will re-render when language changes because it's a consumer of value from provider and when language or theme changes the object reference of value changes which causes re-render of all consumers. Same is applicable for LanguageExample */}
          <ThemeExample />
          <LanguageExample />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Parent;
