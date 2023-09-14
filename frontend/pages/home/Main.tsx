import { View, Text, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import useCachedResources from "../../hooks/useCachedResources";
import Header from "../etc/Header";
import { Container, ContainerBg, MenuBtn } from "../../styles/globalStyles";

const Main = ({ navigation }: any) => {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Container>
        <ContainerBg source={require("../../assets/background/main/mainBackground.png")}>
          {/* <HeaderContainer>
            <Header navigation={navigation} />
          </HeaderContainer> */}
          <BtnContainer>
            <MenuBtn onPress={() => navigation.navigate("PictureLobby")}>
              <BtnImg
                source={require("../../assets/button/home/HomePicMatch.png")}
                resizeMode="contain"
              />
              <BtnText>그림 맞추기</BtnText>
            </MenuBtn>
            <MenuBtn onPress={() => navigation.navigate("WordLobby")}>
              <BtnImg
                source={require("../../assets/button/home/HomeWordMatch.png")}
                resizeMode="contain"
              />
              <BtnText>단어 맞추기</BtnText>
            </MenuBtn>
            <MenuBtn onPress={() => navigation.navigate("LetterLobby")}>
              <BtnImg
                source={require("../../assets/button/home/HomeWordDivideMatch.png")}
                resizeMode="contain"
              />
              <BtnText>단어 나누기</BtnText>
            </MenuBtn>
          </BtnContainer>
        </ContainerBg>
      </Container>
    );
  } else {
    return null;
  }
};
export default Main;

//전체 컨테이너의 배경 이미지
const HeaderContainer = styled.View`
  flex: 1;
`;

//버튼 컨테이너
const BtnContainer = styled.View`
  flex: 8;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//버튼 안의 이미지(사이즈 제한)
const BtnImg = styled.Image`
  max-width: 120px;
  max-height: 120px;
  margin-bottom: 5px;
`;

//버튼의 글씨
const BtnText = styled.Text`
  font-family: "BMJUA";
  font-size: 32px;
  color: #945023;
`;