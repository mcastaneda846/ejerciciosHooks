import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/NavBar";

import SmartCounter from "./exercises/SmartCounter";
//import RegisterForm from "./exercises/RegisterForm";
//import UserSearch from "./exercises/UserSearch";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/smart-counter" element={<SmartCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
