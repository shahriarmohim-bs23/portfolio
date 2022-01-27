import React from  'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.png';
function Navigation()
{
    return(
        <NavigationStyled>
          <div className="avatar">
          <img src={avatar} alt=""/>


          </div>
          <ul className ="nav-items">
            <li className="nav-item">
                <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>

                

            </li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active-class"exact>About</NavLink>

                

            </li>
            <li className="nav-item">
                <NavLink to="/resume" activeClassName="active-class"exact>Resume</NavLink>

                

            </li>
            <li className="nav-item">
                <NavLink to="/blogs" activeClassName="active-class"exact>Blogs</NavLink>

                

            </li>
            <li className="nav-item">
                <NavLink to="/portfolios" activeClassName="active-class"exact>Portfolios</NavLink>

                

            </li>
            <li className="nav-item">
                <NavLink to="/contact" activeClassName="active-class"exact>Contact</NavLink>

                

            </li>

          </ul>
          <footer className="footer">
            <p>My Portfolio Website</p>
          </footer>

          </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right:5px solid var(--border-color);
.avatar{
  width: 100%;
  border-bottom:3px solid var(--border-color);
  text-align: center;
  padding: 2rem  0;
  img{
    width:70%;
    border-radius: 50%;
    border:8px solid var(--border-color);
    
  }
}
 .nav-items{

   li{
     display: block;
     text-align: center;
     .active-class{
       background-color: var(--primary-color);
       
     }
     a{
       display: block;
       padding: .2rem 0;
       position: relative;
       transition:All 0.4s cubic-bezier(1,-0.07,.28,.92);
       text-transform: uppercase;
       font-weight:600;
       letter-spacing: 1px;
     
       &:hover{
           cursor: pointer;
           color: var(--primary-color);

       }
       &::before{
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 1rem;
         height: 100%;
         
       }
      
       a:hover::before{
         width:100%;
         height: 100%;

       }
     }
   }

 }
 footer{
    border-top: 2px solid var(--border-color);
    width: 100%;
   p{
     padding: 2rem 0;
     font-size: 1.1rem;
     text-align: center;
     display: block;
   }
 }
`;
export default Navigation;