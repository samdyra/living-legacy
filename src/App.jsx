import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
