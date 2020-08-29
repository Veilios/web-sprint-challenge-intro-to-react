// Write your Character component here

import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse, Spinner
} from 'reactstrap';

const Character = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if (props.status == "Alive") return (
        <div>
          <Card className="Card">
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <CardSubtitle>
                                <Spinner size="sm" type="grow" color="success" /> 
                                {props.status} - {props.species}
                            </CardSubtitle>
                            <CardText>
                                Last known location: {props.location}
                                </CardText>
                        </CardBody>
                    </Card>
                </Collapse>
            </CardBody>
          </Card>
        </div>
      ); return (
        <div>
          <Card className="Card">
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <CardSubtitle>
                                <Spinner size="sm" type="grow" color="danger" />
                                {props.status} - {props.species}
                                </CardSubtitle>
                            <CardText>
                                Last known location: {props.location}
                                </CardText>
                        </CardBody>
                    </Card>
                </Collapse>
            </CardBody>
          </Card>
        </div>
      );
    };

export default Character;