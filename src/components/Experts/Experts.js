import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Expert from './Expert/Expert';
import useStyles from './styles';

const Experts = ({ user,setCurrentId }) => {
  const expertis = useSelector((state) => state.Experts);
  const classes = useStyles();

  return (
    <div className='container mb-3'>
      {
        !expertis.length ? <CircularProgress /> : (
          <div className='row'>
            {expertis.map((expert) => (
              <div className='col-4 mt-2'>
                <Expert user={user} expert={expert} setCurrentId={setCurrentId} />
              </div>
            ))}
          </div>
        )
      }  
    </div>
  );
};

export default Experts;
