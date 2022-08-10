import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./context/dataContext";

import Maincontainer from "./components/Maincontainer";
import VideoFrame from "./components/VideoFrame";
import EditCard from "./components/EditCard";
import History from "./components/History";
import AddCard from "./components/AddCard";
import NavBar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter >
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Maincontainer />} />
            <Route path="/add" element={<AddCard />} />
            <Route path="/view/:id" element={<VideoFrame />} />
            <Route path="/edit" element={<EditCard />} />
            <Route path="/history" element={<History/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
