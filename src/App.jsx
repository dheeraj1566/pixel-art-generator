import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import GridSetup from "./components/GridSetup";
import GridWrapper from "./components/GridWrapper";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/create-grid", element: <GridSetup /> },
  { path: "/grid/:size", element: <GridWrapper /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;