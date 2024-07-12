import { Text } from "react-native";
import { Container, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <Title>
        Echo
        <Text style={{ color: "#dc6601" }}>Feed</Text>
      </Title>
    </Container>
  );
}
