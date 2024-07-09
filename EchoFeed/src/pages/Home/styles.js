import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardList = styled.FlatList``;

export const ButtonPost = styled.Pressable`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #000;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 30px;
  right: 30px;
`;
