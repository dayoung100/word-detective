import {View, Text, Image} from "react-native";
import useCachedResources from "../../hooks/useCachedResources";
import Header from "./Header";
import {MenuBtn} from "../../styles/globalStyles";
import { Container, ContainerBg } from "../../styles/globalStyles";
import styled from "styled-components/native";

const Login = ({ navigation }: any) => {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
        <Container>
          <ContainerBg source={require("../../assets/background/main/mainBackground.png")}>
            {/* <HeaderContainer>
                        <Header navigation={navigation} />
                    </HeaderContainer> */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TutorialOne')}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 11 }}>
                  <LoginGroupImg
                      source={require("../../assets/etc/loginGroup.png")}
                      resizeMode="contain"

                  />
                  <MainLogo
                      source={require("../../assets/etc/mianLogo.png")}
                      resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 1 }} />
              </View>
            </TouchableWithoutFeedback>
          </ContainerBg>
        </Container>
    );
  } else {
    return null;
  }
};
export default Login;

const TouchableWithoutFeedback  = styled.TouchableOpacity` 
  flex: 1;
`;

const LoginGroupImg = styled.Image`
  position: absolute;
  width: 800px;
  height: 360px;
  left: 0px;
  top: 0px;
`;

const MainLogo = styled.Image`
  position: absolute;
  width: 291px;
  height: 204px;
  left: 247px;
  top: 105px;
`;
