import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

function HomePage()
{
    return(
   <HomePageStyled>

          <div className="particle-con">
              <Particle/>
          </div>
          <div className="typography">

              <h1>Hi I'am <span>Nasif Shahriar Mohim</span></h1>
              <p>
                  I am reading
              </p>
              <div className="icons">
              <a href="https://www.facebook.com/profile.php?id=100007169347086" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/shahriarnasif" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/nasif-shahriar-b6584417a/" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>

              </div>
          </div>

   </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;
.particle-con{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
   
}
.typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
               
                svg{
                  margin: .5rem;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid blanchedalmond;
                    color: goldenrod;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid lightseagreen;
                    color: lightsalmon;
                }
            }
            .i-facebook{
                &:hover{
                    border: 2px solid forestgreen;
                    color: mediumslateblue;
                }
            }
        }
}


`;

export default HomePage;