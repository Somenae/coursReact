import ArticlesInterface from "../interfaces/ArticlesInterface";
interface ArticlesProps {
  article: ArticlesInterface;
  onClickDelete: (article: ArticlesInterface) => void;
  onClickDisplayUpdateForm: () => void;
  onClickUpdate: (article: ArticlesInterface) => void;
}
const Articles: React.FC<ArticlesProps> = ({ article, onClickDelete, onClickDisplayUpdateForm, onClickUpdate }) => {
  return (
    <section className="d-flex justify-content-between my-3">
      <h2 className="h4">{article.label}</h2>
      <div>
        <button
          onClick={() => {
            onClickDisplayUpdateForm();
          }}
          className="btn btn-warning me-3"
        >Modifier
        </button>

        <button
          onClick={() => {
            onClickDelete(article);
          }}
          className="btn btn-danger me-3"
        >Supprimer
        </button>
      </div>

      <form onSubmit={(event) => {
        event.preventDefault();
        const labelArticle = document.getElementById('input-update-toy') as HTMLInputElement;
        const priceArticle = document.getElementById('input-update-price') as HTMLInputElement;
        const yearArticle = document.getElementById('input-update-année') as HTMLInputElement;
        if (labelArticle && priceArticle && yearArticle) {
          onClickUpdate(article);
        }
        }}
        className='d-flex gap-2 visually-hidden'
        id="formUpdate">
        <label htmlFor='input-update-toy' className='visually-hidden'>Label jouet</label>
        <input type="text" value={ article.label } id="input-update-toy" placeholder='Modifier nom du jouet'/>

        <label htmlFor='input-update-price' className='visually-hidden'>Prix jouet</label>
        <input type="number" value={ article.price } id="input-update-price" placeholder='Modifier prix du jouet'/>

        <label htmlFor='input-update-toy' className='visually-hidden'>Année jouet</label>
        <input type="text" value={ article.year } id="input-update-année" placeholder='Modifier année du jouet'/>

        <button type='submit' className='btn btn-success'>Modifier</button>
      </form>
    </section>
  );
};

export default Articles;
