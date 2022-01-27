import React from 'react'
import styled from 'styled-components';


function ServiceCard({image, title, paragraph}) 
{
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
       </ServiceCardStyled >
    )



}
const ServiceCardStyled = styled.div`
background-color: forestgreen;
border-top: 1px solid orange;
border-left: 1px solid red;
border-right: 1px solid aliceblue;
border-bottom: 1px solid darkviolet;
transition: all .4s ease-in-out;
&:hover{
    border-top: 5px solid darkslategrey;
    transform: translateY(3px);
}
.container{
    padding: 3rem;
img{
    width:40%;
    border-radius: 10%;
    
    
           
        }
        h4{
            color:papayawhip;
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
            &::after{
                content:"";
                width: 12rem;
                background-color: var(--border-color);
                height: 4px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;

            }
        }
        p{
           padding:.8rem 0 0 0;
        }

    }
`;
export default ServiceCard;