import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.page";
import Registration from "./pages/registration/Registration.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </div>
  );
};

export default App;
