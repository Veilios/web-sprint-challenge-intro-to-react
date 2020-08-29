// Write your Character component here

import React, { useState } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Collapse, Spinner
} from 'reactstrap';

const Character = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if (props.status === "Alive") return (
        <div>
          <Card className="Card">
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Information</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <CardSubtitle>
                                Status:   <Spinner size="sm" type="grow" color="success" /> {props.status}
                            </CardSubtitle>
                            <CardSubtitle>
                                Species: {props.species}
                            </CardSubtitle>
                            <CardSubtitle>
                                Gender: {props.gender}
                            </CardSubtitle>
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
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Information</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <CardSubtitle>
                                Status:   <Spinner size="sm" type="grow" color="danger" /> {props.status}
                            </CardSubtitle>
                            <CardSubtitle>
                                Species: {props.species}
                            </CardSubtitle>
                            <CardSubtitle>
                                Gender: {props.gender}
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </Collapse>
            </CardBody>
          </Card>
        </div>
      );
    };

export default Character;