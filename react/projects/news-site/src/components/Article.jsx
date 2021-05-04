import React, {useState} from "react";
import styled from "styled-components";

import articles from "../data/articles";
import Comment from "./Comment";
import CommentsPanel from "./SlidingPanel";

const StyledImage = styled.img`
  width:100%;
`

const StyledButton = styled.button`
    border-width:0px;
    padding:8px 16px;
    border-radius:5px;
`

const Article = (props) => {

  const [showComments, setState] = useState(false);

  const article = articles.find(x=>x.id === parseInt(props.id));

  const commentsJSX = 
  <div>
    {article.comments.map(x=> {return <Comment comment={x}/> })}
  </div>

  function toggleCommentsPanel(show) {
    setState(show);
  }

  return (
    <>
    <CommentsPanel show={showComments} togglePanelFcn={toggleCommentsPanel}>
      <header>
        <span class="title">Comments</span>
        <span class="count">1136</span>
        <div>
          <textarea
            class="new-comment-input"
            rows="3"
            placeholder="Share your thoughts."
          ></textarea>
          <div class="new-comment-actions">
            <button class="btn">Cancel</button>
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </header>
        {commentsJSX}
    </CommentsPanel>

    <h1>{article.title}</h1>
    <h3>{article.abstract}</h3>

    <StyledImage src={article.imageURL} alt=""/>
    <p>{article.body}</p>

    <StyledButton onClick={()=> toggleCommentsPanel(!showComments) }>Show Comments {article.comments.length}</StyledButton>
    </>
  )
}

export default Article;