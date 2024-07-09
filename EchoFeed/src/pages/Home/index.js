import react, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { CardList, Container, ButtonPost } from "./styles";

import { AuthContext } from "../../contexts/auth";
import Card from "../../components/Card";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { handleLogout } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <CardList
        //data={DATA}
        renderItem={({ item }) => <Card title={item.title} />}
        keyExtractor={(item) => String(item.id)}
      />

      <ButtonPost onPress={() => navigation.navigate("newpost")}>
        <Feather name="edit-2" size={30} color="#f2f2f2" />
      </ButtonPost>
    </Container>
  );
}
