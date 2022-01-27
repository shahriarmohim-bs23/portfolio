import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import { useState} from "react";
import "../app.css";
import { db } from "../firebase";


    function AboutPage() {

    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });


        setMessage("");
    };
    return (

        <MainLayout>
            <AboutStyled>

                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
                <form className="form" onSubmit={handleSubmit}>

                    <label>Message</label>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                    >
                        Submit
                    </button>
                </form>

            </AboutStyled>


        </MainLayout>




    );
}
const AboutStyled = styled.section`
.form{     
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field
            {
                margin-top: 2rem;
                position: relative;
                width: 100%;
            }
            label{
                position: absolute;
                background-color: var(--background-dark-color);
                padding:0 .5rem;
                color: inherit;
                left: 20px;
                top: -19px;
                display: inline-block;




            }
            input{
                    border: 5px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: paleturquoise;
                    
                }
                textarea{
                    background-color: transparent;
                    border: 5px solid var(--border-color);
                    color: paleturquoise;
                    width: 100%;
                    padding: .8rem 1rem;

                }
        }



`;
export default AboutPage;