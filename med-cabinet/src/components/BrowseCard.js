import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
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

const IndividualCard = (props) => {
    return (
        <NewDiv >
          {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <CardImg top width="100%" src={elem.image} alt={elem.name} />
            <NewCardBody>
              <CardTitle>{elem.name}</CardTitle>
              <CardSubtitle>Strain: {elem.species}</CardSubtitle>
              <CardText>Hybrid/Sativa: {elem.gender}</CardText>
            </NewCardBody>
          <button type='button'>Favorite</button>
          <button type='button'>Share</button>
          </NewCard>
          ))}
        </NewDiv>
      );
};

export default IndividualCard;