import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalLinks from "./pages/PersonalLinks";
import PublicLinks from "./pages/PublicLinks";
import Profile from "./pages/Profile";
import AuthForm from "./components/ui/AuthComponent";
import ProtectRoutes from "./utils/ProtectRoutes";
import AddLinkForm from "./pages/addPersonalLink";
import EditLinkForm from "./pages/EditPersonalLink";

export default function App() {
  return (
    <Router>
      <main className="flex-1 m-5 w-[800px] h-[1000px] overflow-y-auto px-8 py-6 bg-gray-700/40 backdrop-blur-sm rounded-xl">
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/personal" element={<PersonalLinks />} />
            <Route path="/edit-personal" element={<EditLinkForm />} />
            <Route path="/addPersonalLink" element={<AddLinkForm />} />
            <Route path="/" element={<PublicLinks />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
