import React from 'react';
import styles from './TabCardModelCanceled.module.css';
import { Link } from 'react-router-dom';

function TabCardModelCanceled({id, name, type, owner, permission, selectedFile}) {


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
                    <button className={styles.pendModel}>Pend</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModelCanceled;
