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

const NewCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrowseButton = styled.button`
  width: 30%;
  color: white;
  background-color: #2f5973;
`;

const IndividualCard = (props) => {
    return (
        <NewDiv >
          {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <NewCardBody>
              <CardTitle>Strain:{elem.Strain}</CardTitle>
              <CardSubtitle>Type: {elem.Type}</CardSubtitle>
              <CardText>Flavors: {elem.Flavor}</CardText>
              <CardText>Effects: {elem.Effects}</CardText>
              <CardText>Description: {elem.Description}</CardText>
            </NewCardBody>
          <BrowseButton type='button'>Favorite</BrowseButton>
          <BrowseButton type='button'>Share</BrowseButton>
          </NewCard>
          ))}
        </NewDiv>
      );
};

export default IndividualCard;