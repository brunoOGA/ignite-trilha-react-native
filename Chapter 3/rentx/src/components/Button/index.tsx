import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  color,
  loading = false,
  enabled = true,
  light = false,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      color={color}
      style={{
        opacity: enabled == false || loading == true ? 0.5 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
