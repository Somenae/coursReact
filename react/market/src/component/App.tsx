import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ArticlesInterface from '../interfaces/ArticlesInterface';
import ArticlesFetcher from '../services/ArticlesFetcher';
import Articles from './Articles';

function App() {
  const [articles, setArticles] = useState<ArticlesInterface[]>([]);
  useEffect(() => {
    ArticlesFetcher.loadArticles()
      .then((articles: ArticlesInterface[]) => {
        setArticles(articles);
      })
  }, [])

  // Gestion des erreurs
  const [error, setError] = useState("");
  
    function displayFormUpdate() {
      const form = document.getElementById('formUpdate');
      if (form?.classList.contains("visually-hidden")) {
        form?.classList.remove("visually-hidden");
      } else {
        form?.classList.add("visually-hidden");
      }
    }

  function handleClickDelete(article: ArticlesInterface): void {
    if (window.confirm("Confirmez-vous la suppression ?")) {
      let articlesCopy = [...articles];
      let i = 0;
      articlesCopy.forEach(toy => {
        if (toy.id === article.id) {
          articlesCopy.splice(i, 1);
        }
        i++;
      });
      setArticles(articlesCopy);
      // Suppression de la tâche sur le serveur json-server
      if(article) {
        const promise = ArticlesFetcher.deleteArticle(article.id);
        promise
        .catch(error => {
          console.error("Erreur attrapée dans handleClickDelete" + error);
          setError(error.message);
          const promise = ArticlesFetcher.loadArticles();
          promise.then(articles => {
            setArticles(articles);
          })
          setTimeout(() => {
            setError("")
          }, 10000);
        })
      }
    }
  }

  function handleClickUpdate(article: ArticlesInterface) {
    
  }

  function handleClickSubmit(label:HTMLInputElement, price:HTMLInputElement, year:HTMLInputElement) {
    const articlesCopy = [...articles, {label: label.value, id: Math.trunc(Math.random()*10000), price: Number(price.value), year: year.value}]
    console.log(`price`, price.value);
    
    setArticles(articlesCopy);

    ArticlesFetcher.addArticle({label: label.value, price: Number(price.value), year: year.value});

    label.value = '';
    price.value = '';
    year.value = '';
  }

  return (
    <div className="App container">
      <h1>Liste des articles</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const labelArticle = document.getElementById('input-toy') as HTMLInputElement;
        const priceArticle = document.getElementById('input-price') as HTMLInputElement;
        const yearArticle = document.getElementById('input-année') as HTMLInputElement;
        if (labelArticle && priceArticle && yearArticle) {
          handleClickSubmit(labelArticle, priceArticle, yearArticle);
        }
      }}
        className='d-flex gap-2'>
        <label htmlFor='input-toy' className='visually-hidden'>Label jouet</label>
        <input type="text" id="input-toy" placeholder='Nom du jouet'/>

        <label htmlFor='input-price' className='visually-hidden'>Prix jouet</label>
        <input type="number" id="input-price" placeholder='Prix du jouet'/>

        <label htmlFor='input-toy' className='visually-hidden'>Année jouet</label>
        <input type="text" id="input-année" placeholder='Année du jouet'/>

        <button type='submit' className='btn btn-success'>Ajouter</button>
      </form>
      { articles.map((article: ArticlesInterface) => 
          <Articles 
            key = {article.id}
            article = {article}
            onClickDelete = {handleClickDelete}
            onClickDisplayUpdateForm = {displayFormUpdate}
            onClickUpdate = {handleClickUpdate}
          />        
      )}
    </div>
  );
}

export default App;
