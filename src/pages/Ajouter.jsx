import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate  } from "react-router-dom";

export default function Ajouter() {
  const [titre, setTitre] = useState();
  const [article, setArticle] = useState();
  const [submitted, setSubmitted] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "astro2"), {
        titre_bd: titre,
        article_bd: article,
        created_bd: Timestamp.now(),
      });

      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  submitted && navigate("/Articles");

  return (
    <>
    
      <div className="AjouterArticle">
        <h1> Ajouter Articles</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div>
          <input
            type="text"
            name="titre"
            required
            onChange={(event) => setTitre(event.target.value)}
          />
          </div>


          <div>
          
            <textarea
              name="article"
              onChange={(e) => setArticle(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Enregister l'article</button>
          </div>
        </form>
      </div>
    </>
  );
}
