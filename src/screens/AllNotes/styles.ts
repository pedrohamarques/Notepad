import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;

    background-color: #7a9e9f;
`;

export const Header = styled.View`
    width: 100%;
    height: 10%;

    background-color: #4f6367;
    
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: 700;
    color: #eef5db;

`;

export const CardList = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 8px;
`;