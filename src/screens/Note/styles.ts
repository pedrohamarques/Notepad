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
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: 700;
    color: #eef5db;

    position: absolute;
`;

export const NoteText = styled.Text`
    color: #000000;
    padding: 0 4px;

`;
export const Buttons = styled.View`
    width: 90%;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-bottom: 16px;

`;

export const Content = styled.View`
    flex: 1;

    width: 90%;
    height: 60%;

    margin: 16px;
    padding: 8px;

    border-width: 1px;
    border-radius: 5px;
    border-color: #F2F4F4; 

    background-color: #7a9e9f;
`;

export const BackButton = styled.TouchableOpacity`
    margin-right: 325px;
`;
