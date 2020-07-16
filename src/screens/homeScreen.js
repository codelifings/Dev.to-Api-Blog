import React,{useEffect} from 'react'
import {listArticles} from '../action/homeAction';
import {useSelector , useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Article from '../components/Article/Article';

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
  }, [dispatch])


  return loading ? <div className="loading" ><CircularProgress color="secondary" /></div> :
    error ? <div>{error}</div> :
    <ul className="articles">
      <div className="box">
        {
          articles.map( article => <Article data={article} />)
        }
      </div>
    </ul>
}
