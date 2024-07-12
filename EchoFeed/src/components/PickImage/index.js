import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import { ContainerPhoto, ProfileImage } from "./styles";

export default function ImageProfile() {
  const [image, setImage] = useState(null);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <ContainerPhoto>
      {image ? (
        image
      ) : (
        <ProfileImage source={require("../../assets/avatar.png")} />
      )}
    </ContainerPhoto>
  );
}
