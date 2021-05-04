import React from "react";
import ShowCaseArticle from "./ShowCaseArticle";
import articles from "../data/articles";
import ArticleCard from "./ArticleCard";
import Article from "./Article";
import styled from "styled-components";


const ArticlesSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;

    @media screen and (min-width:600px) {
          grid-template-columns: 1fr 1fr 1fr;
    }
`

const Section = (props) => {

  const topic = props.match.params.topic;
  const articleId = props.match.params.articleId;
  console.log(props.match.params);

  if (articleId) {
    return (
      <Article id={articleId}/>
    )
  }
  else {
    const topicArticles = articles.filter(x=>x.topic===topic);
    const showCaseArticle = topicArticles[0];

    const articlesJSX = topicArticles
        .filter(x=>x.id!==showCaseArticle.id)
        .map(article=><ArticleCard key={article.id} article={article}/>);

    return (
        <>

            <header>
                <ShowCaseArticle  article={showCaseArticle}/>
            </header>
            <ArticlesSection>
                {articlesJSX}
            </ArticlesSection>

        </>
    )
  }
}

export default Section;