import Home from "./pages/Home.page";
import Projects from "./pages/Projects.page";
import Error from "./pages/Error.page";

export const home = { path: "/", Element: Home };
export const projects = { path: "/projects/:id", Element: Projects };
export const error = { path: "*", Element: Error };
