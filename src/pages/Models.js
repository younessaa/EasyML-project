import React from 'react';
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import bgModels from '../assets/images/bg-models.svg';
import styles from '../assets/styles/Models.module.css';
import Footer from '../components/Footer/Footer';
import DivHeightAnimation from '../components/DivHeightAnimation/DivHeightAnimation';

function Models() {
  
    return (
        <>
            <HeaderLite />
            <ImageHeaderLite image={bgModels} title="Models"/>
            <div className='container-md p-2'> 
                <DivHeightAnimation />
            </div>
            <div className={styles.ourModels}>

            </div>
            <Footer />
        </>
    )
}

export default Models