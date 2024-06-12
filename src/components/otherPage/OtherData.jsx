import img1 from "./otherImages/codewars.svg";
import img2 from "./otherImages/github.svg";
import img3 from "./otherImages/leetcode.svg";
import img4 from "./otherImages/photopea.svg";
import styled from "styled-components";

const OtherSpan = styled.span`
  color: rgb(241, 0, 0);
`;

export const data = [
  {
    text: (
      <>
        <OtherSpan>CodeWars</OtherSpan> Прикольный сайт для задачек на js, ts /
        существуют и на других языках , но ниразу не слышал чтобы их выполняли )
      </>
    ),
    url: "https://www.codewars.com/",
    img: img1,
    id: 1,
  },
  {
    text: (
      <>
        <OtherSpan>Github</OtherSpan> это однозначно - база , уж точно будет
        нужна для работе в команде , да и для себя впринципе приятная тема (
        существуют и другие сайты для работы с Гитом , но Github лучший)
      </>
    ),
    url: "https://github.com/",
    img: img2,
    id: 2,
  },
  {
    text: (
      <>
        Есть два варианта : Кодварс или <OtherSpan>Leetcode</OtherSpan> Выбор
        ваш , кому что нравится , я выбрал Кодварс - для меня он показался более
        интуитивным )
      </>
    ),
    url: "https://leetcode.com/",
    img: img3,
    id: 3,
  },
  {
    text: (
      <>
        Всё очень удобно и с кайфом - <OtherSpan>PhotoPea</OtherSpan> является
        карманным Фотошопом в браузере , выполнял простенькие задачки для этого
        проекта как раз-таки в нём
      </>
    ),
    url: "https://www.photopea.com/",
    img: img4,
    id: 4,
  },
];
