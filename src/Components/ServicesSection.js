import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import browser from '../img/browser.svg';
import hacker from '../img/hacker.svg';
import mobile from '../img/mobile.svg';
function ServicesSection() {
   return(
<InnerLayout>
    <ServicesSectionStyled> 
    <Title title={'Services'} span={'services'}/>
    <div className="services">
         <ServiceCard
         image={browser}
         title={'Web Design'}
         paragraph={"HTML,CSS,BOOTSTRAP,REACTJS,MATERIAL-UI"}
         
         
         />

   
    
        <ServiceCard 
        image={hacker} 
        title={'Cyber Security'} 
        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
        />
    
      
                    
        <ServiceCard 
        image={mobile} 
        title={'App Development'} 
        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>

    </ServicesSectionStyled>
</InnerLayout>
   )
}
const ServicesSectionStyled = styled.section`
.services{
 margin-top: 5rem;
 display: grid;
 justify-content: space-between;
 


}


`;
export default ServicesSection;