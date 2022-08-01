import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;

    background-color: #ECF0F1;
`;

export const Header = styled.View`
    width: 100%;
    height: 10%;

    background-color: #2874A6;
    
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;

`;

export const CardList = styled.FlatList`
    width: 90%;
    margin: 8px;
`;