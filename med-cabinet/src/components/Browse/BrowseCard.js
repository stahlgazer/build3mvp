import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import styled from 'styled-components';

const NewCard = styled(Card)`
  width: 30%;
  margin: 1%;
`;

const NewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NewCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2F5973;
`;

const BrowseButton = styled.button`
  width: 30%;
  color: white;
  background-color: #70bccf;
`;

const IndividualCard = (props) => {
    return (
        <NewDiv >
          {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <CardImg top width="100%" src={elem.image} alt={elem.name} />
            <NewCardBody>
              <CardTitle>Strain: {elem.name}</CardTitle>
              <CardSubtitle>Type: {elem.species}</CardSubtitle>
              <CardText>Rating: {elem.gender}</CardText>
              <CardText>Effects: {elem.gender}</CardText>
              <CardText>Flavor: {elem.gender}</CardText>
              <CardText>Description: {elem.gender}</CardText>
            </NewCardBody>
          <ButtonDiv>
          <BrowseButton type='button'>Add To Favorites</BrowseButton>
          <BrowseButton type='button'>Learn More</BrowseButton>
          </ButtonDiv>
          </NewCard>
          ))}
        </NewDiv>
      );
};

export default IndividualCard;