import React from 'react';
import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import ShowcaseArticle  from './components/ShowcaseArticle/ShowcaseArticle'
import ArticleGrid from './containers/ArticleGrid/ArticleGrid';

export default function App() {
    return (
        <main>
         <Header/>
         <ShowcaseArticle/>
         <ArticleGrid/>
         <Footer/>
    </main>
    );
}

