import { View, Text, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import useCachedResources from "../../hooks/useCachedResources";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../etc/Header";
import { Container, ContainerBg, MenuBtn } from "../../styles/globalStyles";
import Canvas from "./Canvas";
import QuestionCard from "../components/QuestionCard";
import MiniCard from "../components/MiniCard";
import { ICard } from "../../types/types";
import OXCard from "../components/OXCard";
import { useState } from "react";
import GameClearModal from "../components/GameClearModal";
import Modal from "react-native-modal";
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type StagePageRouteProp = RouteProp<RootStackParamList, "PictureGame2">;

const PictureGame2 = () => {
  const [count, setCount] = useState(0);
  const isLoaded = useCachedResources();
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<StagePageRouteProp>();
  const { word } = route.params;
  const Word1Type: ICard = {
    pictureHidden: false, //그림 숨기기
    wordHidden: false, //글씨는 숨기지 않음
    wordHiddenIndx: 1, //글씨를 숨긴다면 몇번째 인덱스의 글씨를 숨기는지(0부터시작)
  };
  // 미니 카드
  const answer = ["사과", "오렌지", "사과", "오렌지", "사과", "오렌지", "사과", "사과", "사과"];

  const newCards = answer.map(item => {
    return {
      imgSrc: "",
      name: item,
    };
  });
  // 모달
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  // 정답 체크 (o,x 카드 선택시)
  const oAnswerCheck = () => {
    if (word.name === newCards[count].name) {
      setCount(prevCount => prevCount + 1);

      if (count === 7) {
        openModal();
      }
    } else {
      alert("틀렸어 ㅄ아");
    }
  };

  const xAnswerCheck = () => {
    if (word.name != newCards[count].name) {
      setCount(prevCount => prevCount + 1);

      if (count === 7) {
        openModal();
      }
    } else {
      alert("틀렸어 ㅄ아");
    }
  };

  if (isLoaded) {
    return (
      <Container>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropColor="rgba(0, 0, 0, 0.5)"
          isVisible={isModalVisible}
          onBackButtonPress={closeModal} // onRequestClose 대신 onBackButtonPress 사용
          backdropTransitionOutTiming={0}
          statusBarTranslucent={true} // 이 옵션을 사용하여 상태 표시줄을 숨깁니다.
        >
          <GameClearModal nextScreen="PictureGame3" word={word} />
        </Modal>
        <ContainerBg source={require("../../assets/background/game/fruit.png")}>
          <ContentContainer>
            <QCardContainer>
              <QCardContainer>
                <QuestionCard word={word} type={Word1Type} />
              </QCardContainer>
            </QCardContainer>
            <ACardContainer>
              <MiniCard word={newCards[count]} isFront={true} />
              <OXCardContainer>
                <OXCard word={word} isFront={true} onPress={() => oAnswerCheck()} />
                <OXCard word={word} isFront={false} onPress={() => xAnswerCheck()} />
              </OXCardContainer>
            </ACardContainer>
          </ContentContainer>
        </ContainerBg>
      </Container>
    );
  } else {
    return null;
  }
};
export default PictureGame2;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const QCardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ACardContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const OXCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
