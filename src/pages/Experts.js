import React , {useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Expertss from "../components/Experts/Experts";
import Page from "../components/Experts/Page"
import AppNavBar from "../components/AppNavBar/AppNavBar"
import Footer from "../components/Footer/Footer";
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import bgExperts from '../assets/images/bg-blogs.svg';


const Experts = ({ setCurrentId,currentId }) => {

  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user)
  return (
    <>
      <HeaderLite />
      <ImageHeaderLite image={bgExperts} title="Experts"/>
      <>
        <Expertss user={user} setCurrentId={setCurrentId} />
      </>
      <>
        <Footer />
      </>
    </>
  );
};

export default Experts;
