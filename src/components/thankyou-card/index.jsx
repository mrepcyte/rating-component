import React from 'react';
import { ThankCard, ThankYouIcon, ThankYou, ThankYouP, ThankYouText } from './styles';

const ThankYouCard = ({ ratingValue }) => {
    return (
        <ThankCard>
            <ThankYouIcon />
            <ThankYouP>{`You selected ${ratingValue} out of 5`}</ThankYouP>
            <ThankYou>Thank you!</ThankYou>
            <ThankYouText>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch!
            </ThankYouText>
        </ThankCard>
    );
};

export default ThankYouCard;
