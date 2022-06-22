import styled from 'styled-components';

export const RatingSection = styled.section`
    display: flex;
    flex-direction: row;
    margin: 0 0 10px -10px;
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
        background-color: ${({ $userRating }) => ($userRating ? '#434954' : '#fa7613')};
        color: #fff;
    }

    @media (max-width: 460px) {
        width: 16px;
        height: 16px;
    }
`;
