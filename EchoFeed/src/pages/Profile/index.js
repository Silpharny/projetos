import { Text, View } from "react-native";
import { Container, Title, Button, TextButton } from "./styles";
import ImageProfile from "../../components/PickImage";

export default function Profile() {
  return (
    <Container>
      <View>
        <Title>
          Echo
          <Text style={{ color: "#dc6601" }}>Feed</Text>
        </Title>
      </View>
      <View>
        <ImageProfile />
      </View>
      <Button>
        <TextButton>Atualizar Perfil</TextButton>
      </Button>
    </Container>
  );
}
