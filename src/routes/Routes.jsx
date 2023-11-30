import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import Counter from "../components/Counter/Counter";
import BgChanger from "../components/bgChanger/BgChanger";
import ErrorPage from "../components/common/errorPage/Error-page";
import PasswordGenerator from "../components/passwordGenerator/passwordGenerator";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Counter />} />
      <Route path="/backGround" element={<BgChanger />} />
      <Route path="/generatePassword" element={<PasswordGenerator />} />
    </Route>
  )
);
export default Router;
