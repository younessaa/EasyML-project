import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { useDispatch , useSelector} from 'react-redux';
import { Grid, CircularProgress, Paper } from '@material-ui/core';

import Model from './ExpertModel/ExpertModel';
import ModelInStudy from './ExpertModelInStudy/ExpertModelInStudy';
import ModelForm from '../ModelForm/ModelForm';
import useStyles from './styles';
import HeaderLite from '../HeaderLite/HeaderLite';
import Footer from "../Footer/Footer";
import styles from './ExpertDetails.module.css';
import FormAddBlog from '../FormAddBlog/FormAddBlog';

const ExpertDetails = ({currentId,setCurrentId}) => {
  const { id } = useParams();
  const [expertData, setExpertData] = useState({ name: '', description: '',selectedFile: '' });
  const expert = useSelector((state) => (id ? state.Experts.find((message) => message._id === id) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (expert) setExpertData(expert);
  }, [expert]);

  const modeles= useSelector((state) => state.Models);

  const classes = useStyles();



  return (
    <>
      <>
        <HeaderLite />
      </>
      <div className='container'>
        <Paper className={classes.paper}>
          <div className='row text-center mb-2'>
            <div className='col-6'>
              <img className={styles.imgExpert} src={expertData.selectedFile} alt='expert photo'/>
            </div>
            <div className='col-4 mt-2'>
              <h1>{expertData.name}</h1>
            </div>
            
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <p className={styles.discExpert}>{expertData.description}</p>
            </div>
          </div>
        </Paper>
      </div>
      <div className='container p-5'>

        <div>
          {modeles.filter(model => model.permission ==='confirmed' && model.owner === id).map((model) => (
            <Grid key={model._id} item xs={12} sm={6} md={6}>
              <Model model={model} />
            </Grid>
          ))}
        
          <ModelForm currentId={currentId} setCurrentId={setCurrentId} expertId={id}/>
          <table>
                <tr>
                      <td>className</td>
                      <td>Type</td>
                      <td>File</td>
                      <td>State</td>
                </tr>
          {modeles.filter(model => model.permission ==='not confirmed' && model.owner === id).map((model) => (
              <Grid key={model._id} item xs={12} sm={6} md={6}>
                
                <ModelInStudy modelInStudy={model}/>
                
              </Grid>
            ))}
          </table>
        </div>
      </div>
      <>
      <FormAddBlog id={id} />
        <Footer />
      </>
    </>
    
  );
};

export default ExpertDetails;
