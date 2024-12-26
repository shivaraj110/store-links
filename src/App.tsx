import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalLinks from "./pages/PersonalLinks";
import PublicLinks from "./pages/PublicLinks";
import Profile from "./pages/Profile";
import AuthForm from "./components/ui/AuthComponent";
import ProtectRoutes from "./utils/ProtectRoutes";
import AddLinkForm from "./pages/addPersonalLink";

export default function App() {
  return (
    <Router>
      <div className="w-[800px] h-[900px] rounded-lg bg-gray-300 overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route element={<ProtectRoutes />}>
              <Route path="/personal" element={<PersonalLinks />} />
              <Route path="addPersonalLink" element={<AddLinkForm />} />
              <Route path="/" element={<PublicLinks />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
