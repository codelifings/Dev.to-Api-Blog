import { ARTICLE_LIST_SUCCESS, ARTICLE_LIST_REQUEST, ARTICLE_LIST_FAIL} from '../constants/banner'


function articleListReducer(state={articles:[]}, action){


    switch(action.type){
      case ARTICLE_LIST_REQUEST:
          return {loading: true}
      case ARTICLE_LIST_SUCCESS:
          return {loading: false, articles: action.payload}
      case ARTICLE_LIST_FAIL:
          return {loading: false, error:action.payload}
      default:
          return state
    }
}

export {articleListReducer}