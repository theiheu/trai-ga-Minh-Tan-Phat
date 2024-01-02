import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { SpeedDialWithTextOutside as SpeedDial } from "./components/SpeedDial/SpeedDial";
import { Outlet } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import loadData from "./pages/fetches";

function Layout() {
  const [state, setState] = useState();
  const loadingContext = useLoadingContext();

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
    console.log("Line: 25 - Here", state);

    return state;
  }, []);

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
