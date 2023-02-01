import chapters from "../../data/data";
import Button from "../../components/button";
import image from "./assets/Group 3232.png";
import { Popup } from "../../components/popup";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
export const Lessons = () => {
  const [isOpen, setIsOpen] = useState(false);

  let { id } = useParams();

  return (
    <div className="chapters">
      <div className="top">
        <p>أكملْ دورة اللغة الإنجليزية</p>
        <Button
          width="181px"
          className="btn"
          text="أضف درس جديد"
          setIsopen={setIsOpen}
        />
        <div>{isOpen && <Popup handler={setIsOpen} id={id} />}</div>
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
                  <img src={image} alt="suiii" />
                  <img className="img" src={lesson.imageUrl} alt="" />
                  <div className="title">
                    <p>
                      الدرس {index + 1} : {lesson.lessonName}
                    </p>
                    <p>{lesson.description}</p>
                  </div>
                </div>

                <Link to={`/lessons/${id}/${index}`}>
                  <button className="open__btn">إفتح</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
