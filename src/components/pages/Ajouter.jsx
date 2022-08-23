export default function Ajouter() {
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
