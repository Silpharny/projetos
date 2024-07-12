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

export default function Card({ data, userId }) {
  const [likePost, setLikePost] = useState(data?.likes);

  function formatTimePost() {
    const datePost = new Date(data.createBy.seconds * 1000);

    return formatDistance(new Date(), datePost, {
      locale: ptBR,
    });
  }

  return (
    <Container>
      <Header>
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
        <LikeButton>
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
