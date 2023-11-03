import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Indexelement from "./components/Indexelement";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,

        element: <Indexelement />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
