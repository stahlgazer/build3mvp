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

const TopCard = (props) => {
    return (
        <NewDiv className='character-container'>
          {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <CardImg top width="100%" src={elem.image} alt={elem.name} />
            <NewCardBody>
              <CardTitle>{elem.name}</CardTitle>
              <CardSubtitle>Species: {elem.species}</CardSubtitle>
              <CardText>Gender: {elem.gender}</CardText>
            </NewCardBody>
          </NewCard>
          ))}
        </NewDiv>
      );
};

export default TopCard;