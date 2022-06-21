import React, { useState } from 'react';
import { Page } from './styles';
import RatingCard from '../rating-card';
import ThankYouCard from '../thankyou-card';

const MainCard = () => {
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
                <RatingCard
                    onProcess={rateSubmitHandler}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                />
            )}
        </Page>
    );
};

export default MainCard;
