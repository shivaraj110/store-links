import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import PersonalLinks from "./pages/PersonalLinks";
import PublicLinks from "./pages/PublicLinks";
import Profile from "./pages/Profile";
import { useState } from "react";
import AuthForm from "./components/ui/AuthComponent";

export default function App() {
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <Router>
      <div className="w-[800px] h-[900px] rounded-lg bg-gray-300 overflow-hidden flex flex-col">
        {loggedUser ? <Navigation /> : null}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <Routes>
            <Route path="/personal" element={<PersonalLinks />} />
            <Route
              path="/"
              element={loggedUser ? <PublicLinks /> : <AuthForm />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
