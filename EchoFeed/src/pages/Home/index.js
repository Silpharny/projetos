import react, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { CardList, Container, ButtonPost } from "./styles";

import { AuthContext } from "../../contexts/auth";
import Card from "../../components/Card";

import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";

export default function Home() {
  const { authUser, handleLogout } = useContext(AuthContext);

  const navigation = useNavigation();
  console.log(authUser);
  return (
    <Container>
      <Text>{authUser.name}</Text>
      <CardList
        //data={DATA}
        renderItem={({ item }) => <Card title={item.title} />}
        keyExtractor={(item) => String(item.id)}
      />
      <Button title="Sair" onPress={async () => await handleLogout()} />
      <ButtonPost onPress={() => navigation.navigate("newpost")}>
        <Feather name="edit-2" size={30} color="#f2f2f2" />
      </ButtonPost>
    </Container>
  );
}
