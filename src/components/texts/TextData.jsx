import styled from "styled-components";
import img1 from "./TextImages/doka.png";
import img2 from "./TextImages/learn.png";
import img3 from "./TextImages/rea.png";
import img4 from "./TextImages/chatgpt.jpg";

const StyledSpan = styled.span`
  color: yellow;
`;

export const data = [
  {
    id: 1,
    img: img1,
    link: "https://doka.guide/",
    text: (
      <>
        <StyledSpan>Дока</StyledSpan> - это сайт на котором огромное количество
        качественного материала связанного с фронтендом , такого как : HTML ,
        CSS JS и более продвинутого : Webpack, React, TS и много всего всякого
        связанного уже с командой разработчиков
      </>
    ),
  },
  {
    id: 2,
    img: img2,
    link: "https://learn.javascript.ru/",
    text: (
      <>
        <StyledSpan>LearnJS.ru</StyledSpan> это база для всех начинающих
        кнопко-делов на нём доступно и легко объясняют темы которые не ясны , но
        не нужно сильно фокусироваться на прочтении всех тем , всё-таки это
        руководство и оно необходимо для прочтения , когда вы столкнулись с
        проблемой и ищите решение
      </>
    ),
  },
  {
    id: 3,
    img: img3,
    link: "https://reactdev.ru/",
    text: (
      <>
        <StyledSpan>ReactDev.ru</StyledSpan> ещё один справочник , но скорее -
        документация для изучения и работы с Реактом , приятная выполненная
        работа , а больше сказать то и нечего )
      </>
    ),
  },
  {
    id: 4,
    img: img4,
    link: "https://chatgpt.com/",
    text: (
      <>
        <StyledSpan>ChatGPT</StyledSpan> это личный помощник по любому ответу ,
        невороятно помогает с решением проблем , и лично для меня является
        заменой поиска информации по документациям , т.к он правктически
        мгновенно даёт решение и если ему предоставить свой код, то прям в нём
      </>
    ),
  },
];
