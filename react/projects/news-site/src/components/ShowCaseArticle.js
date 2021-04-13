
import React from "react";
import styled from "styled-components";
import Category from "./Category";
import topics from "../data/topics";

const ShowCaseBackground = styled.div`
    color: #fff;
    padding: 32px;
    height: 40vh;  
 `

const ShowCaseGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const ShowCaseArticle = ({article}) => {
    return (
        <>
        <ShowCaseBackground style={{ background: `url(${article.imageURL}) center/cover` }}>
            <ShowCaseGrid>
                <div>
                    <Category topicKey={article.topic}/>
                    <h1>{article.title}</h1>
                    <p>{article.abstract}</p>
                    {/* <a href={props.article.articleURL}>Learn More...</a> */}
                </div>
            </ShowCaseGrid>
        </ShowCaseBackground>

        </>
    )
}

export default ShowCaseArticle;