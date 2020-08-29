// Write your Character component here

import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse
} from 'reactstrap';

const Character = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card className="Card">
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <CardSubtitle>{props.status} - {props.species}</CardSubtitle>
                        <CardText>Last known location: </CardText>
                    </CardBody>
                </Card>
            </Collapse>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;