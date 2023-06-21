import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import Blank from "./pages/Blank";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import DataCreation from "./pages/DataCreation";

function App() {
  return (
    <Routes>
      {/* AuthLayout responsible for responsive sidebar display, all of its children include the sidebar */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/profile" element={<Blank />}></Route>
        <Route path="/datacreation" element={<DataCreation />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
