import styled from "styled-components/native";


export const Container = styled.View `
flex: 1;
background-color: #2E003B;
`;

export const Header = styled.View `
z-index: 99;
position: absolute;
top: 50px;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 0 14px;
`;
export const HeaderButton = styled.TouchableOpacity `
width: 45px;
height: 46px;
background-color: rgba(25, 26, 48, 0.8);
border-radius: 23px;
justify-content: center;
align-items: center;
`;

export const Banner = styled.Image `
width: 100%;
height: 400px;
border-bottom-left-radius: 60px;
border-bottom-right-radius: 60px;

`;
export const ButtonLink = styled.TouchableOpacity `
background-color: #7A005A;
width: 63px;
height: 63px;
border-radius: 35px;
position: absolute;
top: 350px;
right: 10px;
justify-content: center;
align-items: center;
z-index: 99;
`;
export const Title = styled.Text `
color: #FFF;
font-size: 30px;
font-weight: bold;
padding: 8px 14px;
margin-top: 8px;
`;
export const ContentArea = styled.View `
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 14px;
`;
export const Rate = styled.Text `
color: #FFF;
font-size: 18px;
padding: 8px 14px;
margin-top: 8px;
`;

export const ListGenres = styled.FlatList`
padding-left: 14px;
margin: 8px 0;
max-height: 35px;
min-height: 35px;
`;

export const Description = styled.Text`
color: #FFF;
padding-right: 14px;
padding-left: 14px;
line-height: 20px;
`;

    
