//make a card component and add scroll effects

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const SmallCard = (props)=> {

    return(
        <div>
            <Card>
                <CardImg src ="https://springbreakus.com/wp-content/uploads/2017/12/91mokrATML._SL1500_.jpg" alt ="DONUTS!" /><CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}
export default SmallCard;