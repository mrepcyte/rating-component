import React from 'react';
import { RatingSection, Number } from './styles';

const Rates = ({ userRating, setUserRating }) => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <RatingSection>
            {numbers.map((number) => (
                <Number
                    key={number}
                    $id={number}
                    $userRating={userRating}
                    onClick={() => setUserRating(number)}
                >
                    {number}
                </Number>
            ))}
        </RatingSection>
    );
};

export default Rates;
