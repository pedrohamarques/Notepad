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

export const InputText = styled.TextInput`
    font-size: 16px;
    font-weight: 500;
`;

export const Buttons = styled.View`
    width: 90%;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-bottom: 16px;

`;

export const LocationView = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-left: 40px;
    margin-bottom: 8px;

`;

export const LocationText = styled.Text`
    padding-left: 8px;
    font-size: 16px;
    font-weight: 500;

    color: #7B7D7D;

`;