import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Settings from "./pages/Settings";
import { Home, Profile, ChangePassword, Billing } from "./pages/OtherPages";

function App() {
  return (
    <BrowserRouter basename="/Lecture13-JS-React">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />}>
            <Route path="password" element={<ChangePassword />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
