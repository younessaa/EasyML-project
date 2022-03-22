import React from 'react';
import styles from './TabCardModelPending.module.css';
import { Link } from 'react-router-dom';

function TabCardModelPending({id, name, type, owner, permission, selectedFile}) {


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
                <div className='col-sm-2 pt-4'>
                    <Link to='' className={styles.viewFile}>View</Link>
                </div>
                <div className='col-sm-2'>
                    <button className={styles.accepteModel}>Accepte</button> <br />
                    <button className={styles.denyModel}>Deny</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModelPending;
