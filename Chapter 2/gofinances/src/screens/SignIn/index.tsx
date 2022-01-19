import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

const SignIn: React.FC = () => {
  const [loading, isLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  async function handleSignWithGoogle() {
    try {
      isLoading(true);
      return await signInWithGoogle();
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Não foi possível conectar a conta Google");
      isLoading(false);
    }
  }

  async function handleSignWithApple() {
    try {
      isLoading(true);
      return await signInWithApple();
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Não foi possível conectar a conta Apple");
      isLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignWithApple}
            />
          )}
        </FooterWrapper>

        {loading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 16 }}
          />
        )}
      </Footer>
    </Container>
  );
};

export default SignIn;
