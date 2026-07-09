import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard.jsx";
import withAuth from "./components/hoc-examples/withAuth";

const SecureDashboard = withAuth(Dashboard);
function App() {
  return (
    <>
      <SecureDashboard name="hi"></SecureDashboard>
    </>
  );
}

export default App;
