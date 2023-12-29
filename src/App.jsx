import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { SpeedDialWithTextOutside as SpeedDial } from "./components/SpeedDial/SpeedDial";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SpeedDial />
    </>
  );
}

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
