import React from 'react';
import { Card, StarIcon, Question, Text, Button } from './styles';
import Rates from '../rates';

const RatingCard = ({ onProcess, selectedRating, setSelectedRating }) => {

    return (
        <Card>
            <StarIcon />
            <Question>How did we do?</Question>
            <Text>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </Text>
            <Rates userRating={selectedRating} setUserRating = {setSelectedRating} />
            <Button onClick={onProcess}>Submit</Button>
        </Card>
    );
};

export default RatingCard;
