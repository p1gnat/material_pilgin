import img1 from "./otherImages/codewars.svg";
import img2 from "./otherImages/github.svg";
import img3 from "./otherImages/leetcode.svg";
import img4 from "./otherImages/photopea.svg";

export const data = [
  {
    text: (
      <>
        <span>CodeWars</span> Прикольный сайт для задачек на js, ts / существуют
        и на других языках , но ниразу не слышал чтобы их выполняли )
      </>
    ),
    url: "resres",
    img: img1,
    id: 1,
  },
  {
    text: (
      <>
        <span>Github</span> это однозначно - база , уж точно будет нужна для
        работе в команде , да и для себя впринципе приятная тема ( существуют и
        другие сайты для работы с Гитом , но Github лучший)
      </>
    ),
    url: "",
    img: img2,
    id: 2,
  },
  {
    text: (
      <>
        Есть два варианта : Кодварс или <span>Leetcode</span> Выбор ваш , кому
        что нравится , я выбрал Кодварс - для меня он показался более
        интуитивным )
      </>
    ),
    url: "",
    img: img3,
    id: 3,
  },
  {
    text: (
      <>
        Всё очень удобно и с кайфом - <span>PhotoPea</span> является карманным
        Фотошопом в браузере , выполнял простенькие задачки для этого проекта
        как раз-таки в нём
      </>
    ),
    url: "",
    img: img4,
    id: 4,
  },
];
