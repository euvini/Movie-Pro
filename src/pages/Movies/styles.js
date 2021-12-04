import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'


export const Container = styled(LinearGradient).attrs({
    colors: ['#121212', '#121212']
})`
    flex: 1;
    padding: 30px 0;
`;
export const ListMovies = styled.FlatList`
    margin-left: 4px;
`;