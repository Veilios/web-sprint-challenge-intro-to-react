// Write your Character component here

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Character = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.status} - {props.species}</CardSubtitle>
          <CardText>Last known location:</CardText>
          <Button color="primary">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;