import { useLocation, useNavigate } from 'react-router-dom';
import React , {Component ,useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';

import Button from '../Button';
import { LOGOUT } from '../../constants/actionTypes';


function AppNavBar() {
  
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen , setIsOpen] = useState(false);
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  

  const toggle = () => {
    setIsOpen(!isOpen)
        

  }
    
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  } , [location]) 
  

  const logout = () =>{
    dispatch( {type: LOGOUT});
    navigate('/');
    setUser(null);

}

  return (
    <div>
            
              <Navbar dark expand="md" className={isOpen ? 'header2' : 'header'}>
                
                <NavbarBrand  className="header-link-logo"  style={{color:"white" , fontSize:"30px"}} href="/">EasyML</NavbarBrand>
                <NavbarToggler  onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav  className='ms-auto' tabs={isOpen} pills  navbar>
                    <NavItem  className='header-link' >
                      <NavLink  style={{color:"white"}} href="/">Home</NavLink>
                    </NavItem>
                    <NavItem  className='header-link' >
                      <NavLink  style={{color:"white"}} href="/">Models</NavLink>
                    </NavItem>
                    <NavItem  className='header-link' >
                      <NavLink style={{color:"white"}}  href="/experts">Experts</NavLink>
                    </NavItem>
                    <NavItem  className='header-link' >
                      <NavLink style={{color:"white"}}  href="/blogs">Blogs</NavLink>
                    </NavItem>
                    {user ? (<NavItem className='header-link'>
                     <a className='btn' style={{backgroundColor:"rgba(196, 110, 184)", color:"white" }} onClick={logout} >Logout</a>
                        
                    </NavItem> )
                    : (
                      <NavItem className='header-link'>
                        <a  href="/signin" className='btn' style={{backgroundColor:"rgba(196, 110, 184)", color:"white"  }}  >Sign in</a>
                      </NavItem>
                    ) }
                    
                    
                        
                    
                  
                  </Nav>
                </Collapse>
                
                
        </Navbar>
         

        </div> 
        
  )
}

export default AppNavBar
