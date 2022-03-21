import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs'
import Models from './pages/Models'
import AppNavBar from './components/AppNavBar/AppNavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Experts from './pages/Experts';
import SingIn from './pages/SingIn';
import ShowBlog from './pages/showBlog';
import ExpertDetails from './components/ExpertDetails/ExpertDetails';
import { getExperts } from './actions/Experts';
import { getModels } from './actions/Models';
import useStyles from './styles';
import Exploite from "./pages/Exploite/Exploite";
import ChoseModel from "./pages/ChoseModel";
import Build from "./pages/Build/Build"
import ShowModel from './pages/ShowModel';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getExperts());
    dispatch(getModels());
  }, [currentId, dispatch]);
  const [blogs, setBlogs] = useState([
    {
      id:1,
      title:"Common Challenges in Machine Learning and How to Tackle Them",
      text:"Continue reading on Towards AI » Published via Towards AI LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Ozone Free, Remove 99.97% Dust Smoke …",
      day:"May 31, 2021",
      image : '/images/blogImage.png'
    },
    {
      id:2,
      title:"Common Challenges in Machine Learning and How to Tackle Them",
      text:"Continue reading on Towards AI » Published via Towards AI LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Ozone Free, Remove 99.97% Dust Smoke …",
      day:"May 03, 2021",
      image : '/images/blogImage.png'
    },
    {
      id:3,
      title:"Common Challenges in Machine Learning and How to Tackle Them",
      text:"Continue reading on Towards AI » Published via Towards AI LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Ozone Free, Remove 99.97% Dust Smoke …",
      day:"May 30, 2021",
      image : '/images/blogImage.png'
    }
  ]);
  return (
    <Router>
      <Routes>
        <Route exact path="/experts" element={<Experts currentId={currentId} setCurrentId={setCurrentId} />}>  </Route>
        <Route exact path="/ExpertDetails/:id" element={<ExpertDetails currentId={currentId} setCurrentId={setCurrentId}/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/models" element={<Models />}></Route>
        <Route exact path="/models/:id" element={<ShowModel/>}></Route>
        <Route exact path="/signin" element={<SingIn/>}></Route>
        <Route exact path="/showBlog/:id" element={<ShowBlog/>}></Route>
        <Route exact path="/ChoseModel" element={<ChoseModel/>}  />
        <Route path="/Build/:model_name" element={<Build/>}  />
        <Route path="/Exploite/:tocken" element={<Exploite/>}  />


      </Routes>
    </Router>
    
    
  );
};

export default App;
