import React from 'react';
import Sample from '../img/sample_img.jpg';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
`;

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 2%;
`;

const AboutDiv = styled.div`
    text-align: left;
    width: 40%;
    margin-left: 2%;
    color: #2f5973
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const ImgButton = styled.button`
    width: 35%;
    margin: 2%;
    font-size: 1rem;
    color: white;
    background-color: #70bccf;
    border-radius: 4%;
    height: 40px;
`;


const IndividualCard = (props) => {
    
    
    return (
        
        <Section>
            <ImgDiv>
                <img src={Sample} alt=''/>
                <ButtonDiv>
                    <ImgButton type='button'>Favorite</ImgButton>
                    <ImgButton type='button'>Share</ImgButton>
                </ButtonDiv>  
            </ImgDiv>
            <AboutDiv>
                <h1>Strain: White-Widow</h1>
                <h3>Type: Hybrid</h3>
                <h3>Rating:</h3>
                    <p></p>
                <h3>Effects:</h3>
                    <p>Creative, Energetic, Tingly, Euphoric, Relaxed</p>
                <h3>Flavor:</h3>
                    <p>Earthy, Sweet, Citrus</p>
            </AboutDiv>
        </Section>
    );
};

export default IndividualCard;