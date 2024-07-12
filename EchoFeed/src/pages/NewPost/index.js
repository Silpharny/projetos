import { useState, useLayoutEffect, useContext } from "react";
import { Container, Input, Button, ButtonText } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import { doc, getDoc, addDoc, setDoc, collection } from "firebase/firestore";
import { ref } from "firebase/storage";
import { db, storage } from "../../firebaseConfig";

export default function NewPost() {
  const [post, setPost] = useState("");

  const navigation = useNavigation();

  const { authUser } = useContext(AuthContext);

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post]);

  async function handlePost() {
    if (post === "") {
      console.log("Conteúdo inválido");
      return;
    }

    let avatarUrl = null;

    try {
      let response = await ref("users")
        .storage()
        .child(user?.uid)
        .getDowloadURL();
      avatarUrl = response;
    } catch (err) {
      avatarUrl = null;
    }

    const docRef = await addDoc(collection(db, "posts"), {
      createBy: new Date(),
      content: post,
      autor: authUser?.name,
      uid: authUser?.uid,
      likes: 0,
      avatarUrl,
    })
      .then(() => {
        setPost("");
        console.log("Post criado com sucesso!");
      })
      .catch((err) => console.log(`Erro ao criar post ${err}`));
    navigation.goBack();
  }

  return (
    <Container>
      <Input
        placeholder="O que está acontecendo?"
        placeholderTextColor={"#ddd"}
        value={post}
        onChangeText={(text) => setPost(text)}
        autoCorrect={false}
        multiline={true}
        maxLength={200}
      />
    </Container>
  );
}
