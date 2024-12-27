import "./index.css";
import App from "./App.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import { createRoot } from "react-dom/client";
import LandingPage from "./Pages/LandingPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermAndCondition from "./Pages/TermAndCondition.tsx";
import RefundPolicy from "./Pages/RefundPolicy.tsx";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/term-and-condition",
        element: <TermAndCondition />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
