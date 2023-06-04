import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Game from "./pages/Game";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;