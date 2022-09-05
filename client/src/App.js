import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddTask />} />
      </Routes>
    </>
  );
}

export default App;
