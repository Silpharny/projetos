import { Text, View } from "react-native";
import { Container, Title } from "./styles";
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
    </Container>
  );
}
