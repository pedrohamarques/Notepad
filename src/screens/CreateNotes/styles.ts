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