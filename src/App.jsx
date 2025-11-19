import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import "./reset.css";
import "./App.css";
import { useState } from "react"; 

function App() {
  const [orderResult, setOrderResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={<Order setOrderResult={setOrderResult} />}
        />
        <Route
          path="/success"
          element={<Success orderResult={orderResult} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
