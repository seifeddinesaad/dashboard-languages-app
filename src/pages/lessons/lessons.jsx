import chapters from "../../data/data";
import Button from "../../components/button";
import img from "./assets/Group 3232.png";
import { useParams } from "react-router-dom";
export const Lessons = () => {
  let { id } = useParams();
  console.log(id, "etoile sportive du sahel");
  return (
    <div className="chapters">
      <div className="top">
        <p>أكملْ دورة اللغة الإنجليزية</p>
        <Button width="181px" className="btn" text="أضف درس جديد" />
      </div>
      <div className="content">
        {chapters[id].lessons.map((lesson, index) => {
          return (
            <div key={index} className="lesson">
              <div className="number">
                <p>#0{index + 1}</p>
              </div>
              <div className="lesson__content">
                <div className="about__lesson">
                  <img src={img} alt="suiii" />
                  <img className="img" src={lesson.imageUrl} alt="" />
                  <div className="title">
                    <p>
                      الدرس {index + 1} : {lesson.title}
                    </p>
                    <p>{lesson.description}</p>
                  </div>
                </div>

                <button className="open__btn">إفتح</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
