import React from 'react'
import styled from 'styled-components';


function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}
const TitleStyled = styled.div`
position: relative;
h2
{
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .8rem;
    &::before
    {
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.5rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
    }
    &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.8rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
    span
    {
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 40%;
            z-index: -1;
        
    }


}



`;
export default Title;




///&::after is actually nothing in CSS, but it is a feature of SASS/SCSS and is probably written in a context like this:
//li {
  /* some style 1 */

 // &::after {
    /* some style 2 */
 /// }

//}
//li { /* some style 1 */ }
//li::after { /* some style 2 */ }
///Z Index (z-index) is a CSS property that defines the order of overlapping HTML elements. 
//Elements with a higher index will be placed on top of elements with a lower index.
//Z index only works on positioned elements (position:absolute, position:relative, or position:fixed).