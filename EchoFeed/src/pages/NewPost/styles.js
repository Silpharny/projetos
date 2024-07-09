import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #404248;
`;

export const Header = styled.View`
  background-color: #353840;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 24px;
`;

export const BackButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 110px;
`;

export const ShareButton = styled.Pressable`
  width: 110px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #428cfd;
`;

export const ShareText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
`;

export const TextArea = styled.TextInput`
  background-color: #404248;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  font-weight: 500;
  font-size: 22px;
`;
