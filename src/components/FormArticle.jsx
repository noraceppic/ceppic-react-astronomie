import { useState } from "react";
import { db } from "../firebase";
import "./FormArticle.css";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export default function FormArticle() {
  const [titre, setTitre] = useState();
  const [article, setArticle] = useState();
  const [submitted, setSubmitted] = useState(false);
 

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

  if (submitted) {
    return (
      <>
        <p>l'article a été Enregisté.</p>
        <navigate to="../articles" />
      </>
    );
  }
  return (
    <div className="AjouterArticle">
      <h1> Ajouter Articles</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            name="titre"
            placeholder="Titre de l'article"
            required
            onChange={(event) => setTitre(event.target.value)}
          />
        </div>

        <div>
          <textarea
            name="article"
            required
            onChange={(e) => setArticle(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enregister l'article</button>
        </div>
      </form>
    </div>
  );
}
