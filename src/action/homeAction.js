

import axios from 'axios';
import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL } from '../constants/banner';

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

export {listArticles}