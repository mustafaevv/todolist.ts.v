import { Routes, Route } from "react-router-dom";

import Container from "../layout/Container";
import About from "../pages/About";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

const AllRouters = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
};

export default AllRouters;
