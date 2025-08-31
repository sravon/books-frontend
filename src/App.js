import Home from "./Home/Home";
import View from "./view/view";
import { Route, Routes } from "react-router-dom";
import AddBook from "./addBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<View />} />
      <Route path="/books/addbook" element={<AddBook />} />
    </Routes>
  );
}

export default App;
