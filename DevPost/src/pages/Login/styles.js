import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 12px;
  background-color: #36393f;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
`;

export const Button = styled.Pressable`
  width: 80%;
  background-color: #418cfd;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const SignUpButton = styled.Pressable`
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const SignUpTextButton = styled.Text`
  color: #ddd;
  font-size: 15px;
  font-style: italic;
`;
