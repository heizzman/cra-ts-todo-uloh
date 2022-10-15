import React from "react";
import { Route, Routes } from "react-router-dom"
import { ABOUT_ROUTE, TODO_ROUTE } from "../utils/consts";
import About from "../pages/AboutPage";
import Todo from "../pages/TodoPage";

const AppRouter: React.FC = () => {

  return (
    <Routes>
      <Route path={TODO_ROUTE} element={<Todo />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
    </Routes>

  )
}

export default AppRouter;

