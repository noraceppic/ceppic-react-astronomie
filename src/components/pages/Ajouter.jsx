import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
export default function Ajouter() {
    const [Titre, setTitre]=useState();
    const[Articl, setArticl]=useState();
  return (
    <>
      <h1> Ajouter Articles</h1>

      <div className="AjouterArticle">
      <label for="Titre"> Titre:</label>
      <input type="text" name="Titre" required />
      </div>
      <div className="article">
      <label for="Article"> Article:</label>
      <textarea  name="Article" required></textarea > 
      </div>
    </>
  );
}
