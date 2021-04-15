import React from "react";
import ShowCaseArticle from "./ShowCaseArticle";
import articles from "../data/articles";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";


const ArticlesSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;

    @media screen and (min-width:600px) {
          grid-template-columns: 1fr 1fr 1fr;
    }
`

const Main = () => {

    const showCaseArticleId = 1;
    const showCaseArticle = articles.find(x=>x.id===showCaseArticleId);

    const articlesJSX = articles
        .filter(x=>x.id!=showCaseArticle.id)
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

export default Main;