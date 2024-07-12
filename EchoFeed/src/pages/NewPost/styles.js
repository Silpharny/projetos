import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: #404349;
`;

export const Input = styled.TextInput`
  margin: 10px;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.Pressable`
  margin-right: 10px;
  padding: 5px 12px;
  background-color: #418cfd;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
