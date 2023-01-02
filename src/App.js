import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import Signup from "./Pages/Login/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/appointment"
          element={
            <RequiredAuth>
              <Appointment />
            </RequiredAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
