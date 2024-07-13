import react, { useState } from "react";
import {
  Container,
  Header,
  Avatar,
  Name,
  ContentView,
  Content,
  Actions,
  LikeButton,
  Like,
  TimePost,
} from "./styles";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { db } from "../../firebaseConfig";
import {
  setDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export default function Card({ data, userId }) {
  const navigation = useNavigation();
  const [likePost, setLikePost] = useState(data?.likes);

  async function handleLikePost(id, likes) {
    const docId = `${userId}_${id}`;

    const docRef = doc(db, "likes", docId);

    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const postRef = await doc(db, "posts", id);
      updateDoc(postRef, {
        likes: likes - 1,
      }).catch((err) => console.log(err));

      await deleteDoc(doc(db, "likes", docId)).then(() => {
        setLikePost(likes - 1);
      });

      return;
    }

    await setDoc(doc(db, "likes", docId), {
      postId: id,
      userId: userId,
    });

    const likeRef = await doc(db, "posts", id);
    updateDoc(likeRef, {
      likes: likes + 1,
    }).then(() => {
      setLikePost(likes + 1);
    });
  }

  function formatTimePost() {
    const datePost = new Date(data.createBy.seconds * 1000);

    return formatDistance(new Date(), datePost, {
      locale: ptBR,
    });
  }

  return (
    <Container>
      <Header
        onPress={() =>
          navigation.navigate("postuser", {
            title: data.autor,
            userId: data.userId,
          })
        }
      >
        {data.avatarUrl ? (
          <Avatar source={{ uri: data.avatarUrl }} />
        ) : (
          <Avatar source={require("../../assets/avatar.png")} />
        )}
        <Name nameOfLines={1}>{data.autor}</Name>
      </Header>

      <ContentView>
        <Content>{data.content}</Content>
      </ContentView>

      <Actions>
        <LikeButton onPress={() => handleLikePost(data.id, likePost)}>
          <Like>{likePost === 0 ? "" : likePost}</Like>
          <MaterialCommunityIcons
            name={likePost === 0 ? "heart-plus-outline" : "cards-heart"}
            size={20}
            color="#dc6601"
          />
        </LikeButton>
        <TimePost>{formatTimePost()}</TimePost>
      </Actions>
    </Container>
  );
}
