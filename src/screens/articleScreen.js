import React, { useEffect} from 'react'
import {detailsArticle} from '../action/homeAction'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown'


function ArticleScreen(props){

    const articleDetails = useSelector(state=>state.articleDetails)
    const {articles, loading, error} = articleDetails

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsArticle(props.match.params.id))

        return()=>{

        }
    },[])


    return <div>
            {loading? <div>Loading..</div>:
            error? <div>{error}</div>:
            (
                <div className='box'>
                    <div className="cover-image">
                        <img src={articles.cover_image} />
                         </div>

                    {/* <div className="reactions">
                     {articles.public_reaction_count}
                     {articles.comments_count}
                    </div> */}
                   
                <div className="main">
                   <ul>
                    <li className="title-article" >
                        <h2>
                            {articles.title}
                        </h2>
                    </li>



                   </ul>
                   
                    </div>

                    <div className="body">
                        <ReactMarkdown source={articles.body_markdown} />
                    </div>


                    <div className="about-the-author">

                        {/* {articles.user} */}
                    </div>


                    </div>
            )}



    </div>
}

export default ArticleScreen;