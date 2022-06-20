import styled from 'styled-components';
import { ReactComponent as star } from '../assets/icon-star.svg';
import { ReactComponent as phone } from '../assets/thank-you.svg';

export const Page = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const Card = styled.div`
    background-color: #202630;
    height: 320px;
    width: 320px;
    border: 1px solid black;
    border-radius: 24px;
    padding: 24px;
`;

export const ThankCard = styled(Card)`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const StarIcon = styled(star)`
    border: 1px solid #2b3342;
    background-color: #2b3342;
    padding: 12px;
    border-radius: 50%;
`;

export const ThankYouIcon = styled(phone)`
    margin: 10px 0;
    display: block;
`;

export const Text = styled.p`
    color: #666c77;
    font-size: 14px;
`;

export const ThankYou = styled.h2`
    color: #fff;
    margin: 20px 0 0 0;
`;

export const ThankYouText = styled.p`
    text-align: center;
    color: #68717a;
    font-size: 14px;
`;

export const ThankYouP = styled.p`
    background-color: #242f38;
    color: #fa7613;
    font-size: 14px;
    border: 1px solid #242f38;
    border-radius: 35px;
    padding: 6px 20px;
    margin-top: 20px;
`;

export const RatingSection = styled.section`
    display: flex;
    flex-direction: row;
    margin: 0 0 10px -10px;
`;

export const Question = styled.h1`
    color: #fff;
    font-weight: 500;
`;

export const Number = styled.p`
    background-color: ${({ $userRating, $id }) => ($userRating === $id ? '#fa7613' : ' #2b3342')};
    color: #6b747d;
    border: 1px solid black 0.4;
    width: 20px;
    height: 20px;
    padding: 12px;
    text-align: center;
    margin: 10px;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        background-color: #fa7613;
        color: #fff;
    }
`;

export const Button = styled.button`
    background-color: #fa7613;
    font-family: 'Overpass', sans-serif;
    color: #fff;
    width: 100%;
    margin: 10px 0;
    border: 1px solid #000;
    border-radius: 24px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #fa7613;
    }
`;
