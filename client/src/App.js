import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/ErrorPages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Workspace />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
