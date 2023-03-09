import React, { useEffect,  useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

const News = (props) => {


   let [articles, setArticals] = useState([]);
   let [loading, setLoading] = useState(false);
   let [page, setPage] = useState(1);




  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`;
    setLoading( loading= true );
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticals( articles= parsedData.articles )
    
    setLoading( loading= false );
    
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    
  },[]);

  const handleNext = async () => {
    updateNews();
    setPage(page=page+1);
    console.log(page);
   
    
  }

   const handlePrev = async () => {
    updateNews();
    setPage(page=page-1);
    console.log(page);
   

  }
  return (

    <>
      <div className='container my-3'  >
        <h1 className='text-center'>DailyNews : {props.topic} Top Headlines </h1>
        {loading && <Spinner />}
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4 " key={element.url}>
              <NewsItems title={element.title.slice(0, 60)} description={element.description} imgurl={element.urlToImage} newsurl={element.url} auther={element.author} time={element.publishedAt}></NewsItems>
            </div>
          })}

        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark " disabled={page === 1} onClick={handlePrev}>&larr; Previous</button>
          <button type="button" class="btn btn-dark " onClick={handleNext}>Next &rarr;</button>

        </div>
      </div>


    </>
  )
}

/*News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
};
*/

export default News
