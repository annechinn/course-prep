function getHTMLForArticleSummary(article, topic) {
  
  const author = authorsData.find(x=>x.id===article.authorId);

  return `
    <article>
      <img src="${article.imageURL}" alt="" />
      <span class="category category-${topic.name}">${topic.title}</span>
      <h3><a href="">${article.title}</a></h3>
      <div class="profile">Written by ${author.firstName} ${author.lastName}</div>
      <p>${article.abstract}</p>
    </article>
  `;
}

function getHTMLForArticleGrid(topic) {
  return articlesData
            .filter(x=>x.topicId===topic.id)
            .map(x=>getHTMLForArticleSummary(x, topic))
            .join("");
}

function getHTMLForShowcaseArticleSummary(topic) {
  
  let article = articlesData.find(x=>x.id===topic.showcaseArticleId);

  return `
    <section style="background:url(${article.imageURL}) center/cover" class="showcase ${topic.name}">
        <span class="category category-${topic.name}">${capitalize(topic.name)}</span>
        <h1>${article.title}</h1>
        <p>
          ${article.abstract}
        </p>
        <a href="" class="btn">Learn More</a>
    </section>`;
}

function showTopic(topic) {
  let element = document.getElementById("showcase");
  element.innerHTML = getHTMLForShowcaseArticleSummary(topic);
    
  element = document.getElementById("article-grid");
  element.innerHTML = getHTMLForArticleGrid(topic);
}

function initTopic(topic) {
  let button = document.getElementById(`${topic.name}-link`);

  button.addEventListener("click", (event)=>{
    event.preventDefault();
    showTopic(topic);
  });
}

function initTopics() {
  topicsData.forEach(x=>initTopic(x));
}

initTopics();