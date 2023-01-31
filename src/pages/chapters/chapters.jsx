import chapters from "../../data/data";
import CardActionArea from "@mui/material/Card";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GrAddCircle } from "react-icons/gr";
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
            <div className="popup">
              <div className="head">
                <p>أضف فصل جديد</p>
                <ImCross cursor="pointer" onClick={() => setIsOpen(false)} />
              </div>
              <form>
                <div className="select__img">
                  <GrAddCircle fontSize="2rem" />
                  <input
                    type="file"
                    className="file__btn"
                    onChange={handleChange3}
                  />
                </div>

                <label>
                  إسم الفصل
                  <input
                    type="text"
                    name="lesson"
                    onChange={handleChange1}
                    required
                  />
                </label>
                <label>
                  وصف
                  <textarea name="descript" onChange={handleChange2} required />
                </label>
                <div className="popup__buttons">
                  <button
                    className="submit__btn"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();

                      if (lesson && description && img) {
                        chapters.push(state);
                        setIsOpen(false);
                        console.log(chapters, "chapters");
                      }
                    }}
                  >
                    حفظ
                  </button>
                  <button
                    className="reset__btn"
                    type="submit"
                    onClick={() => setIsOpen(false)}
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
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
