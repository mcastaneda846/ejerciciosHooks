import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import SmartCounter from "./exercises/SmartCounter";
import RegisterForm from "./exercises/RegisterForm";
import UserSearch from "./exercises/UserSearch";
import TodoApp from "./exercises/TodoApp";
import UserList from "./exercises/UserList";
import Timer from "./exercises/Timer"
import ShoppingCart from "./exercises/ShoppingCart"
import ProductFilter from "./exercises/ProductFilter"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/smart-counter" element={<SmartCounter />} />
        <Route path="/register-form" element={<RegisterForm />} />
        <Route path="/user-search" element={<UserSearch />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="shopping-cart" element={<ShoppingCart/>}/>
        <Route path="/product-filter" element={<ProductFilter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
