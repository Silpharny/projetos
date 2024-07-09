import { Container, SearchInput } from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Search() {
  return (
    <Container>
      <SearchInput>
        <Feather name="search" size={24} color="#dc6601" />
      </SearchInput>
    </Container>
  );
}
