import { Text } from "react-native";
import {
  BackButton,
  Container,
  Header,
  ShareButton,
  ShareText,
  TextArea,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NewPost() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#fff" />
          <ShareText>Novo Post</ShareText>
        </BackButton>
        <ShareButton>
          <ShareText>Compartilhar</ShareText>
        </ShareButton>
      </Header>
      <TextArea
        placeholder="O que está acontecendo?"
        placeholderTextColor={"#dfdfdf"}
      />
    </Container>
  );
}
