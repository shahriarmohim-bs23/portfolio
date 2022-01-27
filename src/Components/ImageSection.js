import React from 'react'
import styled from 'styled-components';
import mohim from '../img/mohim.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={mohim} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Nasif Shahriar</span></h4>
                <p className="paragraph">
                   
                    Problem solving,System Design,Python Backend Enthusiast.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                
                <div className="info">
                        <p>: Nasif Shahriar Mohim</p>
                        <p>: 22</p>
                        <p>: Bangladeshi </p>
                        <p>: Bangla,English </p>
                        <p>: Mirpur,Dhaka</p>
                        <p>: Software Engineer</p>
                </div>
            </div>
            <PrimaryButton title={'Download Cv'} />
            </div>
            
        </ImageSectionStyled>
    )


    }
const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content
    {
        width: 100%;
        height: 60vh;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: seagreen;
            }
        }
            .paragraph{
            padding: 2rem 0;
            color:plum;
                }
            .about-info{
            display: flex;
            padding-bottom: 2rem;
            .info-title{
                padding-right: .5rem;
                p
                {
                    font-weight: 600;
                }
            }
            .info-title{
                
                p{
                    padding: .5rem 0;
                }
            }
            .info{
                color: tan;
                p{
                    padding: .5rem 0;
                }
            }
            
        }
                
        
            
           
        
        
    }
`;
export default ImageSection;