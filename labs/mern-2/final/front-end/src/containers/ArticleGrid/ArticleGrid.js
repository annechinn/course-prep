import React from 'react';
import './ArticleGrid.css';
import ArticleSummary from '../../components/ArticleSummary/ArticleSummary';

function ArticleGrid() {
  return (
    <section className="articles">
        <ArticleSummary
          category="science"
          imageURL="https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>

        <ArticleSummary
          category="food"
          imageURL="https://images.pexels.com/photos/6529912/pexels-photo-6529912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>

        <ArticleSummary
          category="sports"
          imageURL="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>

        <ArticleSummary
          category="arts"
          imageURL="https://images.pexels.com/photos/256189/pexels-photo-256189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>
    
        <ArticleSummary
          category="sports"
          imageURL="https://images.unsplash.com/photo-1551524559-8af4e6624178?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25vd2JvYXJkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>
       
       <ArticleSummary
          category="science"
          imageURL="https://images.unsplash.com/photo-1453847668862-487637052f8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZSUyMHNrdWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Lorem ipsum dolor sit amet."
          abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
          impedit libero, beatae animi provident nesciunt molestias ipsam nemo
          ad."/>
      </section>

    );
}

export default ArticleGrid;
