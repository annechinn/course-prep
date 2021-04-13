
import React from "react";
import styled from "styled-components";

import topics from "../data/topics";
import Category from "./Category";

const StyledArticleCard = styled.div`
    background: #fff;
    padding: 16px;

    img {
        width:100%;
    }
`

const ArticleCard = ({article}) => {
    const topic = topics[article.topic];
    return (
        <>

        <StyledArticleCard>
            <img src={article.imageURL} alt="" />
            <Category topicKey={article.topic}/>
            <h3><a href="">{article.abstract}</a></h3>
            <p>
                {article.body}
            </p>
        </StyledArticleCard>

        </>
    )
}

export default ArticleCard;