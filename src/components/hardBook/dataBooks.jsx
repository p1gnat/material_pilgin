import styled from "styled-components";
import img1 from "./BookImages/book1.png";
import img2 from "./BookImages/js_book_2.png";
import img3 from "./BookImages/js_book_3.png";
import img4 from "./BookImages/js_plan_1.png";

const StyledSpan = styled.span`
  color: purple;
`;

export const read = [
  {
    text: (
      <>
        Первой книгой которую я прочитал в жизни стала -{" "}
        <StyledSpan>"JavaScript для начинающих"</StyledSpan> от Майка МакГрата ,
        по сути читать не в кайф , но так как потратил свои деньги был обязан
        это сделать . Материал в ней и правда для новичков , почти без
        бесполезных
      </>
    ),
    imgUrl: img1,
    url: "https://codelibrary.info/download/1435_JavaScript-dlya-nachinayshih.pdf",
    id: "1",
  },
];
export const process = [
  {
    text: (
      <>
        Вторая книга в жизни -{" "}
        <StyledSpan>"Современный JavaScript для нетерпеливых"</StyledSpan> ,
        информация внутри развивается в разы стремительнее , чем в 1 , где не
        смотрел , все пишут что новичку будет сложно её читать и понимать , но я
        не растерялся и вспомнил время когда чуть изучал пайтон и купил её...
      </>
    ),
    imgUrl: img2,
    url: "https://codelibrary.info/download/1355_Sovremenny_JavaScript_dlya_neterpelivykh.pdf",
    id: "2",
  },
  {
    text: (
      <>
        Много где слышно про эти самые "Алгоритмы" вот и решил заказать себе эту
        приятную книжку - <StyledSpan>"Грокаем алгоритмы"</StyledSpan> , в ней -
        объясняют всё достопно , даже для самых маленьких , прочитал страниц 30
        и буду дочитывать , но не к спеху , понял то что алгоритмы уж точно не
        для фронтендера ))
      </>
    ),
    imgUrl: img3,
    url: "https://www.phantastike.com/yelektronnaya_kommertciya/grokaem_algoritmyi/pdf/",
    id: "3",
  },
];
export const plans = [
  {
    text: (
      <>
        Планирую прочитать{" "}
        <StyledSpan>"Создаём динамические веб-сайты с помощью ..."</StyledSpan>{" "}
        , блогеры которых я смотрю прям прохайпили её для меня , как дочитаю
        хотя-бы ещё одну книгу , обязательно её куплю , говорят что она
        рассказывает базу и даёт понимание , что учить и куда идти после её
        прочтения
      </>
    ),
    imgUrl: img4,
    url: "https://codelibrary.info/download/1345_Sozdaem-dinamicheskie-veb-sayty-s-pomoshchyu-PHP-MySQL-javascript-CSS-i-HTML5.pdf",
    id: "4",
  },
];
