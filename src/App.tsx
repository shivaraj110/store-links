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
import Softwares from "./pages/softwares";
import Jobs from "./pages/jobs";
import Hackathons from "./pages/hackathons";
import AddScholarShip from "./pages/addScholarship";
import AddStudyMaterial from "./pages/addStudymaterials";
import AddSoftware from "./pages/addSoftware";
import AddJob from "./pages/addJob";
import AddHackathon from "./pages/addHackathon";

export default function App() {
  return (
    <Router>
      <main className="w-[700px] flex items-center  justify-center ">
        <div className="w-[700px] h-[800px] border overflow-y-scroll mb-2 backdrop-blur-sm rounded-xl p-4">
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
                path={"/addSoftware"}
                element={
                  <Layout>
                    <AddSoftware />
                  </Layout>
                }
              />{" "}
              <Route
                path={"/addHackathon"}
                element={
                  <Layout>
                    <AddHackathon />
                  </Layout>
                }
              />{" "}
              <Route
                path={"/addJob"}
                element={
                  <Layout>
                    <AddJob />
                  </Layout>
                }
              />
              <Route
                path={"/addScholarship"}
                element={
                  <Layout>
                    <AddScholarShip />
                  </Layout>
                }
              />{" "}
              <Route
                path={"/addStudyMaterial"}
                element={
                  <Layout>
                    <AddStudyMaterial />
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
              <Route
                path={"/edit-personal"}
                element={
                  <Layout>
                    {" "}
                    <EditLinkForm />{" "}
                  </Layout>
                }
              />
              <Route
                path={"/addPersonalLink"}
                element={
                  <Layout>
                    <AddLinkForm />
                  </Layout>
                }
              />
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
              />{" "}
              <Route
                path={"/public/softwares"}
                element={
                  <Layout>
                    <Softwares />
                  </Layout>
                }
              />{" "}
              <Route
                path={"/public/jobs"}
                element={
                  <Layout>
                    <Jobs />
                  </Layout>
                }
              />
              <Route
                path={"/public/hackathons"}
                element={
                  <Layout>
                    <Hackathons />
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
