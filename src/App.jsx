import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Root from "./pages/Root.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <PlaceOrder /> },
    ],
  },
]);

function App() {
  const { login } = useContext(StoreContext);

  return (
    <>
      {login && <LoginPopup />}
      <div className="app">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
