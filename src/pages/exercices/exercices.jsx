import { useParams } from "react-router-dom";
import image from "../../assets/Group 3232 (1).png";
import chapters from "../../data/data";
import { Link } from "react-router-dom";
export const Exercices = () => {
  const { id1 } = useParams();
  const { id } = useParams();

  console.log(id1, "id1", id, "id");
  return (
    <>
      <div className="exercices">
        <div className="big__title">
          <p className="chapter">
            <span>الفصل {+id + 1}:</span>
            {chapters[id].lessonName}
          </p>
          <p className="lesson__title">
            <span> الدرس {+id1 + 1}:</span>
            {chapters[id].lessons[id1].lessonName}
          </p>
        </div>
        {chapters[id].lessons[id1].exercice.map((ex, index) => {
          return (
            <div key={index} className="exercice">
              <div className="number">
                <p className="span">#0{+index + 1}</p>
              </div>
              <div className="exercice__content">
                <div className="about__exercice">
                  <img className="hide" src={image} alt="suiii" />
                  <img className="img" src={ex.imageUrl} alt="lol" />
                  <div className="title">
                    <p className="name">{ex.exerciceName}</p>
                    <p className="sub__name">{ex.exerciceDescription}</p>
                  </div>
                </div>

                <Link to={`/lessons/${id}/${id1}`}>
                  <button className="open__btn">افتح المنشئ</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
