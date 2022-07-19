import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "../components/Sidebar"
import Home from "../pages/Home";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Calender from "../pages/Calender";
import Documents from "../pages/Documents";


const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="calendar" element={<Calender />} />
        <Route path="documents" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
