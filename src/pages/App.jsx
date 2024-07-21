import Header from "../components/header";
import World from "../components/world";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "../pages/stats";
import "../css/App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <World />
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
