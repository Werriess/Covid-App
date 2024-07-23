import Header from "../components/header";
import World from "../components/world";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "../pages/stats";
import Home from "../components/homepageBlock";
import HCards from "../components/homeCards"
import "../css/App.css";

function App() {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <div id="content">
                  <World/>
                  <section>
                    <Home/>
                  </section>
                </div>
                <div className="photos">
                  <HCards src="../src/assets/CoronaBackground.jpg" alt="Iets" name={"Facts:"} />
                  <HCards src="../src/assets/CoronaBackground.jpg" alt="Iets" name={"Symptoms:"} />
                  <HCards src="../src/assets/CoronaBackground.jpg" alt="Iets" name={"Contact:"} />
                </div>
                <div className="name">
                  <p className="toets">Copyright Werner Janse van Rensburg</p>
                </div>
              </div>
            }
          />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
