import React,{useEffect} from 'react'
import {listArticles} from '../action/homeAction';
import {useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
        root: {
         
          display: 'flex',
          '& > * + *': {
            marginLeft: '50px',
          },
        },
      }));


export default function HomeScreen(props) {
   
    
   
    const articleList = useSelector(state => state.articleList);
    const {articles, loading, error}= articleList;

    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect (()=>{
        dispatch(listArticles())

            return()=>{

           }
    }, [])


    return loading? <div className="loading" ><CircularProgress color="secondary" /></div>:
    error? <div>{error}</div>:
    <ul className="articles">
       <div className="box"> {
            
            articles.map(article =>
               
                <li key={article.id}>

                    <div className="main-box">
                    <div className="article-title">

            <Link className="title" to ={'/api/articles/' + article.id}>{article.title}</Link>
                    </div>

            <div className="article-date">{article.readable_publish_date}</div>
            <div className="article-comments">{article.comments_count}</div>
            <div className="article-reactions">{article.positive_reactions_count}</div>
            

            
            <div className="article-tags">Tags: #{article.tag_list[0]},  #{article.tag_list[1]}, #{article.tag_list[2]}</div>
            </div></li>

                )
        }</div>
    </ul>
}
