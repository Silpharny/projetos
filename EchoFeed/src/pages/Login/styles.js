import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #353840;
  gap: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 52px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 48px;
  border-radius: 8px;
  padding: 0px 16px;
  font-size: 18px;
  background-color: #fff;
`;

export const Button = styled.Pressable`
  width: 80%;
  height: 48px;
  border-radius: 8px;
  background-color: #dc6601;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ToRegister = styled.Pressable``;

export const TextRegister = styled.Text`
  color: #fff;
  font-size: 18px;
  font-style: italic;
`;
