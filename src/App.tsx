import { Routes, Route } from "react-router-dom";
import Main from "./Main_Page/MainPage.tsx";
import Login from "./Login_Page/LoginPage.tsx";
import Shop from "./Shop_Page/ShopPage.tsx";
import Enterprise from "./Enterprise_Page/EnterprisePage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
