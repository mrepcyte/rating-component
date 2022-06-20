import React, { useState } from 'react';
import { Page, Card, StarIcon, Question, Text, RatingSection, Number, Button } from '../styles';
import ThankYouCard from '../thankyou-card';

const RatingCard = () => {
    const numbers = [1, 2, 3, 4, 5];

    const [selectedRating, setSelectedRating] = useState();
    const [rateStatus, setRateStatus] = useState(false);

    const rateSubmitHandler = () => {
        setRateStatus(true);
    };

    return (
        <Page>
            {rateStatus ? (
                <ThankYouCard ratingValue={selectedRating} />
            ) : (
                <Card>
                    <StarIcon />
                    <Question>How did we do?</Question>
                    <Text>
                        Please let us know how we did with your support request. All feedback is
                        appreciated to help us improve our offering!
                    </Text>
                    <RatingSection>
                        {numbers.map((number) => (
                            <Number
                                key={number}
                                $id={number}
                                $userRating={selectedRating}
                                onClick={() => setSelectedRating(number)}
                            >
                                {number}
                            </Number>
                        ))}
                    </RatingSection>
                    <Button onClick={rateSubmitHandler}>Submit</Button>
                </Card>
            )}
        </Page>
    );
};

export default RatingCard;
