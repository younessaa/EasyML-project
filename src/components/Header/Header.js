import React, {Component ,useEffect,useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';

function Header () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen , setIsOpen] = useState(false);
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
  } , [location]) 
  

  const logout = () =>{
    dispatch( {type: LOGOUT});
    navigate('/');
    setUser(null);

}
  return(
    <div className={styles.Header}>
        <header>
          <div className="container-md">
              <div className="row">
                  <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                      <a className="navbar-brand" href="#"><h1 className={styles.easyMLTitle}>EasyML</h1></a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/`}> 
                            <div className="nav-link" ><span className={styles.navLink}>Home</span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/models`}> 
                            <div className="nav-link" ><span className={styles.navLink}>Models</span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/experts`}> 
                            <div className="nav-link" ><span className={styles.navLink}>Experts</span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/blogs`}> 
                            <div className="nav-link" ><span className={styles.navLink}>Blogs</span></div>
                            </Link>

                          </li>
                           
                          {user ? (
                          <><li className={styles.btnSingIn}>
                        <Link className={styles.linkSignIn} to={`/signin`} onClick={logout}>
                          <div className="nav-link"><span className='text-light' >Logout</span></div>
                        </Link>
                      </li></> )
                    : (
                      <li className={styles.btnSingIn}>
                            <Link className={styles.linkSignIn} to={`/signin`}> 
                              <div className="nav-link" ><span className='text-light'>Sing in</span></div>
                            </Link>
                          </li>
                    ) }
                        </ul>
                      </div>
                    </nav>
                  </div>
              </div>
          </div>  
        </header>
        <div className="container-md">
            <h2 className={styles.titleStart}>
                Start your machine learning model now
            </h2>
            <Link className={styles.linkSignUp } to={`/signin`}> 
              <div className={styles.btnSingUp}>
                  Sign up now
              </div>
            </Link>
            
            <div className={styles.marginbuttom}>
            </div>
        </div>
      </div>
  )
};


  
  



export default Header;
