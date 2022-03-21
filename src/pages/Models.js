import React from 'react';
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import bgModels from '../assets/images/bg-models.svg';
import styles from '../assets/styles/Models.module.css';
import Footer from '../components/Footer/Footer';
import DivHeightAnimation from '../components/DivHeightAnimation/DivHeightAnimation';
import ModelExpertCard from '../components/ModelExpertCard/ModelExpertCard';

function Models() {
  
    const ourModels = [
        {id: "afg14567ggs", name: "Linear Regression",},
        {id: "bfg14567ggs", name: "Random Forest Regression",},
        {id: "csfg14567ggs", name: "Support Vector Regression",},
    ];
    const expertsModels = [
        {id: "asfg14567ggs", name: "Linear Regression",},
        {id: "atfg14567ggs", name: "Linear Support Vector Machine",},
        {id: "aufg14567ggs", name: "Random Forest Classifier",},
        {id: "avfg14567ggs", name: "Gradient Boosting Tree Class",},
    ]

    return (
        <>
            <HeaderLite />
            <ImageHeaderLite image={bgModels} title="Models"/>
            <div className='container-md p-2'> 
                <DivHeightAnimation />
            </div>
            <div className='container-md p-2'>
                <div className={styles.ourModels}>
                    <h2 className='mb-5'>Our Models</h2>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        {
                            ourModels.map(
                                (model) => (
                                    <div className='col-sm'>
                                        <ModelExpertCard link={model.id} name={model.name}/>
                                    </div>
                                )
                                )
                            }
                        <div className='col-sm-1'></div>
                    </div>
                </div>
            </div>
            <div className='container-md p-2'>
                <div className={styles.expertsModels}>
                    <h3 className='mb-5'>Experts Models</h3>
                    <div className='row'>
                        {
                            expertsModels.map(
                                (model) => (
                                    <div className='col-sm'>
                                        <ModelExpertCard link={model.id} name={model.name}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Models