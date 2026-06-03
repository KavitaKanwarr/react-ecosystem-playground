import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Count from "./pages/zustand/Count";
import User from "./pages/zustand/User";
import ApiCall from "./pages/zustand/ApiCall";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/zustand">Zustand Count</Link>
          <Link to="/zustand/user">Zustand User</Link>
          <Link to="/zustand/api">Zustand Api Calls</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zustand">
          <Route index element={<Count />} />
          <Route path="user" element={<User />} />
          <Route path="api" element={<ApiCall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
