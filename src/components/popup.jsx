import React from "react";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import chapters from "../data/data";
import { useState } from "react";
export const Popup = ({ handler, id }) => {
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
  const style = {
    width: "78px",
    height: "78px",
    borderRadius: "50%",
    backgroundColor: "#DBDBDB",
    color: "gray",
    fontSize: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="popup">
      <div className="head">
        <p>أضف فصل جديد</p>
        <ImCross cursor="pointer" onClick={() => handler(false)} />
      </div>
      <form>
        <div className="select__img">
          <span style={style}>
            <AiOutlinePlus fontSize="2rem" />
          </span>
          <input
            type="file"
            id="file"
            className="file__btn"
            onChange={handleChange3}
          />
          <label htmlFor="file" className="upload__btn">
            {" "}
            اختر ملف
          </label>
          {!img ? "لم يتم إختيار ملف" : ""}
        </div>

        <label>
          إسم الفصل
          <input type="text" name="lesson" onChange={handleChange1} required />
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
                if (!id) {
                  chapters.push(state);
                  handler(false);
                } else {
                  chapters[id].lessons.push(state);
                  handler(false);
                }
              } else {
                alert("you should fill all the inputs :)");
              }
            }}
          >
            حفظ
          </button>
          <button
            className="reset__btn"
            type="submit"
            onClick={() => handler(false)}
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};
