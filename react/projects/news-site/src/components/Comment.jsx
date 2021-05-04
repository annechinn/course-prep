import React from "react-dom";

const Comment = ({comment}) => {
  return (
    <>
     <section class="comment">
        <img src="images/avatar.png" alt="" />
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
      </section>
    </>
  )
}

export default Comment;