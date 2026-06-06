import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Count from "./pages/zustand/Count";
import User from "./pages/zustand/User";
import ApiCall from "./pages/zustand/ApiCall";
import Parent from "./pages/context/Parent";
import ThemeExample from "./pages/context/ThemeExample";
import LanguageExample from "./pages/context/LanguageExample";
import MainRedux from "./pages/redux/MainRedux";
import MainRTK from "./pages/reduxToolkit/MainRTK";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/zustand">Zustand Count</Link>
          <Link to="/zustand/user">Zustand User</Link>
          <Link to="/zustand/api">Zustand Api Calls</Link>
          <Link to="/context">Context</Link>
          <Link to="/context/theme">Context Theme</Link>
          <Link to="/context/language">Context Language</Link>
          <Link to="/redux">Redux User</Link>
          <Link to="/rtk">RTK</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zustand">
          <Route index element={<Count />} />
          <Route path="user" element={<User />} />
          <Route path="api" element={<ApiCall />} />
        </Route>
        <Route path="/context">
          <Route index element={<Parent />} />
          <Route path="theme" element={<ThemeExample />} />
          <Route path="language" element={<LanguageExample />} />
        </Route>
        <Route path="/redux" element={<MainRedux />} />
        <Route path="/rtk" element={<MainRTK />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
