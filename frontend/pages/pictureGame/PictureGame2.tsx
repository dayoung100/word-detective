import { View, Text, Image, ImageBackground, Platform } from "react-native";
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
  const answer = ["사과", "오렌지", "사과", "오렌지", "사과", "오렌지", "사과", "사과", "사과"];

  const newCards = answer.map(item => {
    return {
      imgSrc: "",
      name: item,
    };
  });

  const oAnswerCheck = () => {
    if (word.name === newCards[count].name) {
      setCount(prevCount => prevCount + 1);

      if (count === 7) {
        alert("goodjob");
      }
    } else {
      alert("틀렸어 ㅄ아");
    }
  };

  const xAnswerCheck = () => {
    if (word.name != newCards[count].name) {
      setCount(prevCount => prevCount + 1);

      if (count === 7) {
        alert("goodjob");
      }
    } else {
      alert("틀렸어 ㅄ아");
    }
  };

  if (isLoaded) {
    return (
      <Container>
        <ContainerBg source={require("../../assets/background/game/fruit.png")}>
          <ContentContainer>
            <QCardContainer>
              <QCardContainer>
                <QuestionCard word={word} type={Word1Type} />
              </QCardContainer>
            </QCardContainer>
            <ACardContainer>
              <MiniCardContainer>
                <BackGroundSquare/>
                <MiniCard word={newCards[count]} isFront={true}  isTouchable={false} onClick={()=>{
                  console.log();
                }}/>
              </MiniCardContainer>
              <OXCardContainer>
                <OXOneCard>
                <OXCard word={word} isFront={true} onPress={() => oAnswerCheck()} />
                </OXOneCard>
                <OXOneCard>
                <OXCard word={word} isFront={false} onPress={() => xAnswerCheck()} />
                </OXOneCard>
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
const OXOneCard = styled.View`
  margin:10%;
`
const ACardContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const OXCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const MiniCardContainer=styled.View`
  margin-top: 5%;
  position:relative;
  `;
const BackGroundSquare = styled.View`
  position: absolute;
  width: 27%;  
  aspect-ratio: 1; 
  border-radius: 20px;
  background-color: white;
  transform: rotate(-10deg);
  z-index: -1;
  ${Platform.OS === 'android' && `
    elevation: 5;
  `}
`;