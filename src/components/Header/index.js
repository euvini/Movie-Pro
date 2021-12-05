import React from "react";
import { Container, MenuButton, Title } from './styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {

    const navigation = useNavigation();

    return (
        <Container>
            <>
                <MenuButton onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={36} color="#FFF" />
                </MenuButton>
            </>
            <>
                <Title>{title} <Ionicons name="play-outline" size={30} color="#FFF" /></Title>
            </>
        </Container>
    )
}