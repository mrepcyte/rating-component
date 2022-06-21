import styled from 'styled-components';
import { ReactComponent as phone } from '../../assets/thank-you.svg';
import { Card } from '../rating-card/styles';

export const ThankCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ThankYouIcon = styled(phone)`
    margin: 10px 0;
    display: block;
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
