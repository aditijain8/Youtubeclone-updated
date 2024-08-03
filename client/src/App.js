import './App.css';
import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from '../src/components/LeftSidebar/DrawerSidebar';

import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { fetchAllChanel } from "./actions/chanelUser";
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import {getAllComment} from './actions/comments'
import { getAllHistory } from "./actions/History";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAllComment());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);


  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  return (
    <Router>
      {vidUploadPage && <VideoUpload  setVidUploadPage={setVidUploadPage}/>}
      {EditCreateChanelBtn && (
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
      )}
      <Navbar
        setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />

      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />

      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />
    </Router>
  );
}

export default App;
