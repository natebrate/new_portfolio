import React from 'react';
import {Card} from "react-bootstrap";

const cardComponent1 = () => {
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Seaside React Store</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Here I worked to develop a web app store
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default cardComponent1;