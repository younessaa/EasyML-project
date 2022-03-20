import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteModel} from '../../../actions/Models';
import useStyles from './styles';

const Model = ({ model}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
        {model.name}
    </div>
  );
};

export default Model;
