import React from "react";
import img1 from "./previewImages/bacila_tn.jpg";
import img2 from "./previewImages/honey_tn.jpg";
import img3 from "./previewImages/ulbi_tn.jpg";
import img4 from "./previewImages/itproger_tn.jpg";
import img5 from "./previewImages/anton_tn.jpg";

export const data = [
  {
    id: 1,
    img: img1,
    link: "https://www.youtube.com/watch?v=vetTq5AbEHU",
    text: (
      <>
        Лучшим Видео от <span>Бацылы</span> я считаю разбор резюме фронтендера ,
        гость невероятно стеснительный и из-за этого ему прям разжёвывали
        материал который вполне возможно поможет вам устроиться в айти
      </>
    ),
  },
  {
    id: 2,
    img: img2,
    link: "https://www.youtube.com/watch?v=b_oRXHDTHNo",
    text: (
      <>
        Какое - либо видео выделить было сложно , так как весь контент{" "}
        <span>Монтаны </span>
        является некой мотивашкой для продолжения своего пути программиста ,
        частью его контента являются стримы с опытными прогерами , их в кайф
        посмотреть на фоне
      </>
    ),
  },
  {
    id: 3,
    img: img3,
    link: "https://youtu.be/GNrdg3PzpJQ?si=dbW5K5UQTpU_K6Lh",
    text: (
      <>
        3 часа продлились на 3 дня работы , считаю курс от <span>Ульби</span>{" "}
        приятным и позновательным , НО когда вы новичёк , фиг его знает имеет ли
        это смысл , автор быстро пробегается по темам - которые уж точно
        прийдётся пересматривать для понимания
      </>
    ),
  },
  {
    id: 4,
    img: img4,
    link: "https://www.youtube.com/watch?v=tfn-59fbNMQ&list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2",
    text: (
      <>
        <span>АйтиПрогер</span> выпускает приятные видео , без сложного замысла
        - которые замесательно подходят под приём пищи всё ещё продолжаю
        смотреть этот курс , сейчас автор начал заниматься заодно и курсами по
        другим языкам программирования
      </>
    ),
  },
  {
    id: 5,
    img: img5,
    link: "https://youtu.be/i4MjGlOQZmQ?si=6zLJO8oFpwsy1HA_",
    text: (
      <>
        <span>Антон Назаров</span> очень интересный человек , не стоит верить
        каждому слову из его уст , но он заставляет задуматься о том , что не
        стоит трать свои человеко-часы в пустую и обесценивать их
      </>
    ),
  },
];

// function Preview({ img_num, link, children }) {
//   let imager = null;
//   switch (img_num) {
//     case 1:
//       imager = img1;
//       break;
//     case 2:
//       imager = img2;
//       break;
//     case 3:
//       imager = img3;
//       break;
//     case 4:
//       imager = img4;
//       break;
//     case 5:
//       imager = img5;
//       break;
//     default:
//       imager = null;
//   }
//   return (
//     <div className={styles.prev}>
//       <div className={styles.prev__text}>{children}</div>
//       <Link to={link} target="_blank">
//         <img src={imager} alt="" className={styles.prev__img} />
//       </Link>
//     </div>
//   );
// }

// export default Preview;
