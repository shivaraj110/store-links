import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PersonalLinks from "./pages/PersonalLinks";
import Profile from "./pages/Profile";
import AuthForm from "./components/ui/AuthComponent";
import ProtectRoutes from "./utils/ProtectRoutes";
import AddLinkForm from "./pages/addPersonalLink";
import EditLinkForm from "./pages/EditPersonalLink";
import ResetPass from "./components/ui/ResetPass";
import Scholarships from "./pages/Scholarships";
import Dashboard from "./pages/dashboard";
import Layout from "./components/Layout";
import Studymaterials from "./pages/studymaterials";

export default function App() {
  return (
    <Router>
      <main className="w-[700px] flex items-center justify-center ">
        <div className="w-[700px] h-[800px] border backdrop-blur-sm rounded-xl p-4">
          <Routes>
            <Route path={"/login"} element={<AuthForm />} />
            <Route path={"/resetpaasword"} element={<ResetPass />} />
            <Route element={<ProtectRoutes />}>
              <Route
                path={"/"}
                element={
                  <Layout>
                    <PersonalLinks />
                  </Layout>
                }
              />
              <Route
                path={"/"}
                element={
                  <Layout>
                    <Dashboard />
                  </Layout>
                }
              />
              <Route path={"/edit-personal"} element={<EditLinkForm />} />
              <Route path={"/addPersonalLink"} element={<AddLinkForm />} />
              <Route
                path={"/public/scholarships"}
                element={
                  <Layout>
                    <Scholarships />
                  </Layout>
                }
              />
              <Route
                path={"/public/studymaterials"}
                element={
                  <Layout>
                    <Studymaterials />
                  </Layout>
                }
              />
              <Route
                path="/profile"
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
            </Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}
