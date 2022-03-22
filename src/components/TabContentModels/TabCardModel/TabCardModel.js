import React, {useEffect} from 'react';
import styles from './TabCardModel.module.css';
import { Link } from 'react-router-dom';

import { getModels, deleteModel } from '../../../actions/Models';

import { useDispatch } from "react-redux";

function TabCardModel({id, name, type, owner, permission, selectedFile}) {

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteModel(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{name} / <strong>{type}</strong></pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{owner} / <strong>{permission}</strong></pre>
                </div>
                <div className='col-sm-2'>
                    <pre>20/03/2021</pre>
                </div>
                <div className='col-sm-4'>
                    <Link to='' className={styles.viewFile}>View</Link>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModel;
