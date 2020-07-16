import React from 'react';
import {Link} from 'react-router-dom';

import '../../index.css';

const Article = (props) => {
  const article = props.data;

  return (
    <li key={article.id}>
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
    </li>
  );
};

export default Article;