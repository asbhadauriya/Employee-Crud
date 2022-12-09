import { Login } from "./Pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import  Employee  from "./Pages/Employee";
export default function AppRoutes() {
  const IsLogin = localStorage.getItem('token')? true : false;
  

  const PublicRoutes = [
    {
      name: "Login",
      path: "/signin",
      Component: Login,
    },
  ];
  const ProtectedRoutes = [
    {
      name: "Employee",
      path: "/",
      Component: Employee,
    },
  ];

  const PublicRouting = PublicRoutes.map(({ name, path, Component }) => (
    <>
    <Route
        key={name}
        path={path}
      element={
          !IsLogin ? <Component /> : <Navigate to="/" replace={true} />
        }
        />
    </>
  ));

  const PrivateRouting = ProtectedRoutes.map(({ name, path, Component}) => (
    <>
      <Route
        key={name}
        path={path}
        element={
          IsLogin ? <Component /> : <Navigate to="/signin" replace={true} />
        }
      />
    </>
  ));

  return (
    <div className="">
      <Router>
        <Routes>
          {PublicRouting}
          {PrivateRouting}
        </Routes>
      </Router>
    </div>
  );
}
