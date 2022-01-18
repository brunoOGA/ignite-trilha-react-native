import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: 'SignIn' | 'Home';
}

const Confirmation: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();

  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirmation() {
    if (nextScreenRoute == 'SignIn') {
      navigation.navigate('SignIn');
    } else {
      navigation.navigate('Home');
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmation} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
