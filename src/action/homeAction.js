

import axios from 'axios';
import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL } from '../constants/banner';
import { ARTICLE_DETAILS_REQUEST, ARTICLE_DETAILS_FAIL, ARTICLE_DETAILS_SUCCESS } from '../constants/article';

const listArticles =()=> async(dispatch)=>{


    try{
        dispatch({type: ARTICLE_LIST_REQUEST});
        const {data}= await axios.get('/api/articles?username=hemant')
        dispatch({type:ARTICLE_LIST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({type:ARTICLE_LIST_FAIL, payload:error.message})

    }
}



const detailsArticle = (articleId)=> async(dispatch)=>{

    try{

        dispatch({type:ARTICLE_DETAILS_REQUEST, payload:articleId})
        const {data}=await axios.get("/api/articles/"+ articleId)
        dispatch({type: ARTICLE_DETAILS_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:ARTICLE_DETAILS_FAIL, payload:error.message})

    }
}

export {listArticles, detailsArticle}