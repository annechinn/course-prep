
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";

const StyledArticleCard = styled.div`
    background: #fff;
    padding: 16px;

    img {
        width:100%;
    }
`

const ArticleCard = ({article}) => {
    const articleLink = `/section/${article.topic}/${article.id}`;
    return (
        <>

        <StyledArticleCard>
            <img src={article.imageURL} alt="" />
            <Category topicKey={article.topic}/>
            <h3><Link to={articleLink}>{article.title}</Link></h3>
            <p>{article.abstract}</p>
            <p>
                {article.body}
            </p>
        </StyledArticleCard>

        </>
    )
}

export default ArticleCard;