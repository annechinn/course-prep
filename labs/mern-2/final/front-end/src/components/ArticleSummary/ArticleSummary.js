import React from 'react';
import './ArticleSummary.css';
import {capitalize} from '../../utils/utils';

function ArticleSummary({category, title, abstract, imageURL}) {

  const classString =  `category category-${category}`;
  return (
    <article>
    <img src={imageURL} alt="" />
    <span className={classString}>{capitalize(category)}</span>
    <h3><a href="">{title}</a></h3>
    <p>{abstract}</p>
  </article>

    );
}

export default ArticleSummary;
