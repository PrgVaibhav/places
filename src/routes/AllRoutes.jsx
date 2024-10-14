import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Places, Users } from "../pages";
import { LeftSidebar, RightSidebar } from "../components";
import { generateRandomId } from "../utils/idGenerator";
// Separate layout for authenticated pages
const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

// Main layout with sidebars
const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen backdrop-blur-md">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <main className="w-4/5 h-full p-6 bg-[#1a1a1a] text-[#ddd]">
        {children}
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

// Define all the routes
const ROUTES = [
  {
    id: generateRandomId(),
    path: "/",
    element: <Places />,
    layout: MainLayout,
  },
  {
    id: generateRandomId(),
    path: "/users",
    element: <Users />,
    layout: MainLayout,
  },
  {
    id: generateRandomId(),
    path: "/places/new",
    element: <h1>Create new Place</h1>,
    layout: MainLayout,
  },
  {
    id: generateRandomId(),
    path: "/auth",
    element: <h1>Hello World From Auth</h1>,
    layout: AuthLayout,
  },
  {
    id: generateRandomId(),
    path: "/search",
    element: <h1>Hello World From Search</h1>,
    layout: MainLayout,
  },
];

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route) => {
          const Layout = route.layout || MainLayout; // Default to MainLayout if none specified
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          );
        })}
        {/* Redirect to home if route not found */}
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Router>
  );
};
