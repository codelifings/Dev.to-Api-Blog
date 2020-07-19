import React from 'react';
import {Link} from 'react-router-dom';

import './article.css';

const Article = (props) => {
  const article = props.data;
  const image = article.cover_image;

  console.log(article)

  return (
    <div className="article-card" key={article.id}>
      <div className="article-image" style={{backgroundImage: `url(${article.cover_image})`}}></div>
      <div className="main-box">
        <div className="article-title">
          <Link className="title" to ={'/api/articles/' + article.id}>{article.title}</Link>
        </div>
        <div className="article-date">{article.readable_publish_date}</div>
        <div className="article-comments">{article.comments_count}</div>
        <div className="article-reactions">{article.positive_reactions_count}</div>
        <div className="article-tags">
          Tags: #{article.tag_list[0]},  #{article.tag_list[1]}, #{article.tag_list[2]}
        </div>
      </div>
    </div>
  );
};

export default Article;