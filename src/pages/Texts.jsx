import React from "react";
import Text from "../components/texts/Text";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: yellow;
`;

function Texts(props) {
  return (
    <div>
      <Text img_num={1}>
        <StyledSpan>Дока</StyledSpan> - это сайт на котором огромное количество
        качественного материала связанного с фронтендом , такого как : HTML ,
        CSS JS и более продвинутого : Webpack, React, TS и много всего всякого
        связанного уже с командой разработчиков
      </Text>
      <Text img_num={2}>
        <StyledSpan>LearnJS.ru</StyledSpan> это база для всех начинающих
        кнопко-делов на нём доступно и легко объясняют темы которые не ясны , но
        не нужно сильно фокусироваться на прочтении всех тем , всё-таки это
        руководство и оно необходимо для прочтения , когда вы столкнулись с
        проблемой и ищите решение
      </Text>
      <Text img_num={3}>
        <StyledSpan>ReactDev.ru</StyledSpan> ещё один справочник , но скорее -
        документация для изучения и работы с Реактом , приятная выполненная
        работа , а больше сказать то и нечего )
      </Text>
      <Text img_num={4}>
        <StyledSpan>ChatGPT</StyledSpan> это личный помощник по любому ответу ,
        невороятно помогает с решением проблем , и лично для меня является
        заменой поиска информации по документациям , т.к он правктически
        мгновенно даёт решение и если ему предоставить свой код, то прям в нём
      </Text>
    </div>
  );
}

export default Texts;
