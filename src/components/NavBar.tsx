import { Link } from "react-router-dom";

export function Navbar() {
  const routes = [
    { path: "/smart-counter", name: "SmartCounter" },
    { path: "/register-form", name: "RegisterForm" },
    { path: "/user-search", name: "UserSearch" },
    { path: "/todo-app", name: "TodoApp" },
    { path: "/user-list", name: "UserList" },
    { path: "/timer", name: "Timer" },
    { path: "/shopping-cart", name: "ShoppingCart" },
    { path: "/product-filter", name: "ProductFilter" },
    { path: "/focus-input", name: "FocusInput" },
    { path: "/task-reducer", name: "TaskReducer" },
    { path: "/theme-context", name: "ThemeContextApp" },
    { path: "/auth-context", name: "AuthContextApp" },
    { path: "/contact-form", name: "ContactForm" },
    { path: "/post-list", name: "PostList" },
    { path: "/user-dashboard", name: "UserDashboard" },
  ];

  return (
    <nav className="navbar">
      {routes.map((route) => (
        <Link key={route.path} to={route.path} className="navbar-link">
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
