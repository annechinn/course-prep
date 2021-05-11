import React from "react-dom";
import styled from "styled-components";
import userAvatar from "../assets/images/user1-avatar.png";

const StyledComment = styled.section`
  display:flex;
  margin-bottom:30px;

  img {
    width:30px; 
    height:30px;
    padding-right:10px;
  }

  .name {
    font-weight:bold;
  }

  .location,
  .timestamp {
    opacity:.4;
  }

  .comment-summary {
    color:rgb(50, 104, 145);
  }

  a {
    text-decoration: none;
  }
`

const Comment = ({comment}) => {
  return (
    <>
     <StyledComment>
        <img src={userAvatar} alt="" />
        <div class="comment-details">
          <div class="name">Jon James</div>

          <span class="location">Luisville, KY |</span>
          <span class="timestamp">41m ago</span>
          <p>
            {comment.comment}
          </p>
          <div class="comment-summary">
            <a href="">{comment.recommendedCount} Recommended</a>
          </div>
        </div>
      </StyledComment>
    </>
  )
}

export default Comment;