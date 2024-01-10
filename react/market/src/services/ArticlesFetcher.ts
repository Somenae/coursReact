import ArticlesInterface from "../interfaces/ArticlesInterface";

export default class ArticlesFetcher {
  static url:string = 'http://localhost:3000/articles';

  static loadArticles():Promise<ArticlesInterface[]> {
    return fetch(this.url)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Le serveur n'a pas répondu correctement. Statut de l'erreur : " + response.status);
      })
      .then(articles => {
        console.log(`articles : `, articles);
        return articles;
      })
      .catch(error => {
        console.error("Erreur attrapée dans loadarticles " + error)
      })
  }
  /**
   * Permet de modifier une tâche
   * @param {number} articleId 
   * @param {object} propertyToPatch
   */
  static patchArticle(articleId:number, propertyToPatch: Partial<ArticlesInterface>):Promise<void> {
    return fetch(`${this.url}/${articleId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        //body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
        body: JSON.stringify(propertyToPatch)
      })
      .then(function (res) {
        if (res.status === 200){
          console.log(`La modification s'est bien passée`);
        }
        else throw new Error("Problème serveur lors du patch. Statut : " + res.status);
      })
  }
  /**
   * Permet de supprimer une tâche
   * @param {number} articleId 
   */
  static deleteArticle(articleId: number):Promise<void>  {
    return fetch(`${this.url}/${articleId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then(function (res) {
        if (res.status === 200) console.log(`La suppression s'est bien passée`);
        else throw new Error("Problème serveur lors du delete. Statut : " + res.status);
      })
  }
   /**
   * Permet d'ajouter une tâche
   * @param {object} article
   */
   static addArticle(article: Omit<ArticlesInterface, "id">): Promise<void>{
    return fetch(`${this.url}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        //body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
        body: JSON.stringify(article)
      })
      .then(function (res) {
        if (res.status === 201) console.log(`L'ajout s'est bien passé`);
        else throw new Error("Problème serveur lors du post. Statut : " + res.status);
      })
  }
}