import chapters from "../../data/data";
import { useState } from "react";
import { Popup } from "../../components/popup";
import Button from "../../components/button";
import { Link } from "react-router-dom";
export const Chapters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lesson, setLesson] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const handleChange1 = (event) => {
    setLesson(event.target.value);
  };
  const handleChange2 = (event) => {
    setDescription(event.target.value);
  };
  const handleChange3 = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const state = {
    imageUrl: img,
    lessonName: lesson,
    description: description,
  };
  console.log(state, "state");
  return (
    <>
      <div className={isOpen ? "background__blur" : "none"}></div>
      <div className="chapters">
        <div className="top">
          <p>الفصول</p>
          <Button className="btn" setIsopen={setIsOpen} text="أضف فصل جديد" />
        </div>
        <div>
          {isOpen && (
            <Popup
              handler={setIsOpen}
              lesson={lesson}
              description={description}
              img={img}
              handlerChange1={handleChange1}
              handlerChange2={handleChange2}
              handlerChange3={handleChange3}
            />
          )}
        </div>
        <div className="bottom">
          {chapters.map((chapter, index) => {
            return (
              <Link to={`/lessons/${index}`}>
                <div
                  className="cardActionArea"
                  style={{
                    margin: "0.6rem",
                  }}
                >
                  <img
                    className="lessonImg"
                    src={chapter.imageUrl}
                    alt="error 404"
                  />
                  <div className="title">
                    <p>{chapter.lessonName}</p>
                  </div>
                  <div className="description">
                    <p>{chapter.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
