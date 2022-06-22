import styled from 'styled-components';
import { ReactComponent as star } from '../../assets/icon-star.svg';

export const Card = styled.div`
    background-color: #202630;
    height: 320px;
    width: 320px;
    border: 1px solid black;
    border-radius: 24px;
    padding: 24px;

    @media (max-width: 460px) {
        height: 280px;
        width: 280px;
    }
`;

export const StarIcon = styled(star)`
    border: 1px solid #2b3342;
    background-color: #2b3342;
    padding: 12px;
    border-radius: 50%;
`;

export const Text = styled.p`
    color: #666c77;
    font-size: 14px;

    @media (max-width: 460px) {
        font-size: 12px;
    }
`;

export const Question = styled.h1`
    color: #fff;
    font-weight: 500;
    font-size: 24px;

    @media (max-width: 460px) {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    background-color: #fa7613;
    font-family: 'Overpass', sans-serif;
    color: #fff;
    width: 100%;
    margin: 12px 0;
    border: 1px solid #000;
    border-radius: 24px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;

    &:hover {
        cursor: pointer;
        background-color: ${({ $userRating }) => ($userRating ? '#fff' : '#fa7613')};
        color: ${({ $userRating }) => ($userRating ? '#fa7613' : '#fff')};
    }

    @media (max-width: 460px) {
        margin: 10px 0;
    }
`;
