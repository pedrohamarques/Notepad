import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;

    width: 100%;
    height: 80px;

    border-width: 1px;
    border-radius: 4px;
    border-color: #B3B6B7;

    background-color: #FFFFFF;

    padding: 12px;

    margin-bottom: 8px;
    margin-top: 8px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 4px;
`;
export const Content = styled.Text`
    font-size: 18px;
    font-weight: 600;
    
`;
export const Location = styled.Text`
    font-size: 16px;
    
    color: #7B7D7D;
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const SeeAll = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const Text = styled.Text`
    font-size: 16px;
    font-weight: 700;

    color: #2874A6;
`;