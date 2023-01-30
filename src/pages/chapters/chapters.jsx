import chapters from "../../data/data";
import CardActionArea from "@mui/material/Card";
import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { GrAddCircle } from "react-icons/gr";

export const Chapters = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="chapters">
      <div className="top">
        <p>الفصول</p>
        <button type="button" className="btn" onClick={() => setIsOpen(true)}>
          أضف فصل جديد{" "}
        </button>

        <div>
          {isOpen && (
            <div className="popup">
              <div className="head">
                <p>أضف فصل جديد</p>
                <GiCrossMark onClick={() => setIsOpen(false)} />
              </div>
              <form>
                <GrAddCircle />
                <p>
                  <button>اختر ملف</button>
                  لم يتم إختيار الملف
                </p>

                <label>
                  Email:
                  <input type="email" name="email" />
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="bottom">
        {chapters.map((chapter, index) => {
          return (
            <CardActionArea
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
            </CardActionArea>
          );
        })}
      </div>
    </div>
  );
};
