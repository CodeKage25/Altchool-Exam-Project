import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Repositories from "../pages/Repositories";
import NotFound from "../pages/NotFound";
import ReposPage from "../pages/Repos";
import SingleRepos from "../pages/SingleRepos";
import { ErrorBoundary } from "react-error-boundary";

function NavPage() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Repositories" element={<Repositories />} />
        <Route path="*" element={<NotFound />} />
        <Route path="repositories" component={<ReposPage />}>
          <Route path="singlerepo" element={<SingleRepos />} />
        </Route>
        <Route path="/error-test" element={<ErrorBoundary />} />
      </Routes>
    </section>
  );
}

export default NavPage;
