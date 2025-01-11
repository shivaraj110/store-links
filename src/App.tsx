import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PersonalLinks from "./pages/PersonalLinks";
import PublicLinks from "./pages/PublicLinks";
import Profile from "./pages/Profile";
import AuthForm from "./components/ui/AuthComponent";
import ProtectRoutes from "./utils/ProtectRoutes";
import AddLinkForm from "./pages/addPersonalLink";
import EditLinkForm from "./pages/EditPersonalLink";
import ResetPass from "./components/ui/ResetPass";

export default function App() {
  return (
    <Router>
      <main className="w-[700px] flex items-center justify-center ">
        <div className="w-[700px] h-[800px] bg-gray-700/40 backdrop-blur-sm rounded-xl p-4">
          <Routes>
            <Route path={"/login"} element={<AuthForm />} />
            <Route path={"/resetpaasword"} element={<ResetPass />} />
            <Route element={<ProtectRoutes />}>
              <Route path={"/personal"} element={<PersonalLinks />} />
              <Route path={"/edit-personal"} element={<EditLinkForm />} />
              <Route path={"/addPersonalLink"} element={<AddLinkForm />} />
              <Route path={"/"} element={<PublicLinks />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}
