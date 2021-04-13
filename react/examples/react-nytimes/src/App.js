import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';
import axios from 'axios';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`);
            setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
    );
};

export default App;
