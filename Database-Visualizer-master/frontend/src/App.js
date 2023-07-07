import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Loginin from "./components/Loginin";
import Dashboard from "./components/Dashboard";

import Home from "./components/Home";
import Manageshow from "./components/manageShow";
import AddShow from "./components/AddShow";
import { AppProvider } from "./AppContext";
import { useState } from "react";
import Authorisor from "./components/Auth";

// import Dashboard2 from "./components/Dashboard2";
// import Dashboard from "./components/Dashboard2";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <AppProvider currentUser={currentUser}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Loginin></Loginin>} path="loginin" />
          <Route element={<Signup></Signup>} path="signup" />
          {/* <Route element={<Dashboard></Dashboard>} path="dashboard" /> */}
          <Route element={<AddShow />} path="addshow" />
          <Route
            element={
              <Authorisor>
                <Dashboard></Dashboard>{" "}
              </Authorisor>
            }
            path="dashboard"
          />
          <Route element={<Manageshow />} path="manageshow" />
          {/* <Route element={<Home></Home>} path="home"/> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
