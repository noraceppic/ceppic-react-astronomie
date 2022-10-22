import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Articles() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const articlesRef = query(
           collection(db, "astro"),
           orderBy("created_bd", "desc")
        )
        onSnapshot(articlesRef, (snapshot) => {
           setArticles(
              snapshot.docs.map((doc) => ({
                 id: doc.id,
                 data: doc.data(),
              }))
           );
        });
     }, []);
    

    return(
        <>
      <h1>Liste des articles </h1>
      
      {articles.map((article) => (
         <li key={article.id}>
         <div>{article.data.titre_bd}</div>
         <p>{article.data.article_bd}</p>
         </li>
      ))}
    
      </>
        
    );
    
};
