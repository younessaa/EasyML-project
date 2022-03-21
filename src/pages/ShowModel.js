import React from 'react'
import Footer from "../components/Footer/Footer";
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import { useParams } from "react-router-dom";
import bgModels from '../assets/images/bg-models.svg';
import ShowModelCard from '../components/ShowModelCard/ShowModelCard';



function ShowModel () {

    const { id } = useParams();

    return (
        <>
            <HeaderLite />
            <ImageHeaderLite image={bgModels} title={`Model : ${id}`}/>
            <ShowModelCard />
            <Footer />
        </>
    )
  

};
export default ShowModel;