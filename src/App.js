import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.page";
import Registration from "./pages/registration/Registration.page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {["/home", "/"].map((path) => (
            <Route path={path} element={<Home />} />
          ))}

          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
