import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
