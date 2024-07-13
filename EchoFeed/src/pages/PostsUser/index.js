import React, { useLayoutEffect, useState } from "react";
import { Text } from "react-native";
import { Container } from "./styles";

import { useRoute, useNavigation } from "@react-navigation/native";
import react from "react";

export default function PostsUser() {
  const route = useRoute();
  const navigation = useNavigation();

  const [title, setTitle] = useState(route.params?.title);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title === "" ? "" : title,
    });
  }, [navigation, title]);

  return (
    <Container>
      <Text>{route.params?.title}</Text>
    </Container>
  );
}
