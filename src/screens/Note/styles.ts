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
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;

    position: absolute;
`;

export const NoteText = styled.Text`
    color: #000000;
    padding: 0 4px;

    font-size: 18px;

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
    border-color: #B3B6B7; 

    background-color: #FDFEFE;
`;

export const BackButton = styled.TouchableOpacity`
    margin-right: 325px;
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