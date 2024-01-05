// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Route, Routes } from "react-router-loading";
import Area5 from "./components/area/Area5.jsx";

const Blogs = lazy(() => import("./components/Blogs/Blogs.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const AreaPage = lazy(() => import("./pages/AreaPage.jsx"));
const Area1 = lazy(() => import("./components/area/Area1.jsx"));
const EventPage = lazy(() => import("./pages/EventPage.jsx"));
const ManureFactory = lazy(() => import("./pages/ManureFactory.jsx"));
const Loader = lazy(() => import("./components/Loader/Loader.jsx"));
const Area2 = lazy(() => import("./components/area/Area2.jsx"));
const Area3 = lazy(() => import("./components/area/Area3.jsx"));
const Area4 = lazy(() => import("./components/area/Area4.jsx"));

export {
  Blogs,
  ErrorPage,
  HomePage,
  About,
  Contact,
  AreaPage,
  Area1,
  EventPage,
  ManureFactory,
  Loader,
  Area2,
  Area3,
  Area4,
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     loader: redirectIfUser,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/events",
//         element: <EventPage />,
//       },
//       {
//         path: "/blogs",
//         element: <Blogs />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/manure-factory",
//         element: <ManureFactory />,
//       },
//       {
//         path: "/area",
//         element: <AreaPage />,
//         children: [
//           {
//             path: "area1",
//             element: <Area1 />,
//           },
//           {
//             path: "area2",
//             element: <Area1 />,
//           },
//           {
//             path: "area3",
//             element: <Area1 />,
//           },
//           {
//             path: "area4",
//             element: <Area1 />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {/* <RouterProvider router={router} /> */}
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage loading />} />
            <Route path="/about" element={<About />} loading />
            <Route path="/events" element={<EventPage />} />
            <Route path="/blogs" element={<Blogs />} loading />
            <Route path="/contact" element={<Contact />} loading />
            <Route path="/manure-factory" element={<ManureFactory />} loading />
            <Route path="/area" element={<AreaPage />} loading>
              <Route path="area1" element={<Area1 />} loading />
              <Route path="area2" element={<Area2 />} loading />
              <Route path="area3" element={<Area3 />} loading />
              <Route path="area4" element={<Area4 />} loading />
              <Route path="area5" element={<Area5 />} loading />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Suspense>
  </ThemeProvider>
);
