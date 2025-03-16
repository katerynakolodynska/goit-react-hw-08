// import { useEffect, lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";
// import Layout from "./components/Layout/Layout";
// import PrivateRoute from "./routes/PrivateRoute";
// import RestrictedRoute from "./routes/RestrictedRoute";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const RegisterPage = lazy(() =>
//   import("./pages/RegistrationPage/RegistrationPage")
// );
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

// const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);
//   if (isRefreshing) {
//     return <p>Loading...</p>;
//   }

//   return isRefreshing ? (
//     <p>Refreshing user...</p>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               component={<RegisterPage />}
//               redirectTo="/contacts"
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={RegistrationPage} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
