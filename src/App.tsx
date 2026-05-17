import { Routes, Route } from "react-router-dom";
import MainPage from "./Main_Page/MainPage.tsx";
import About from "./Contact_Us_Page/AboutPage.tsx";
import Shop from "./Shop_Page/ShopPage.tsx";
import Enterprise from "./Enterprise_Page/EnterprisePage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/enterprise" element={<Enterprise />} />
    </Routes>
  );
}
