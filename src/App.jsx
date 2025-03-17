import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";

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
    return <b>Refreshing user...</b>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
