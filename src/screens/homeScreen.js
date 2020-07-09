import React,{useEffect} from 'react'
import {listArticles} from '../action/homeAction';
import {useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


export default function HomeScreen(props) {
   
   
   
    const articleList = useSelector(state => state.articleList);
    const {articles, loading, error}= articleList;

    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(listArticles())

            return()=>{

           }
    }, [])


    return loading? <div> Loading..</div>:
    error? <div>{error}</div>:
    <ul className="articles">
        {
            articles.map(article =>
               
                <li key={articles.id}>
                    <div className="article">

            <Link to ={'/api/articles/' + article.id}>{article.title}</Link>
                    </div>

            <div className="article-date">{article.readable_publish_date}</div>
            <div className="article-comments">{article.comments_count}</div>
            <div className="article-reactions">{article.public_reaction_count}</div>
            <div className="article-tags">{article.tags}</div>

                </li>

                )
        }
    </ul>
}
