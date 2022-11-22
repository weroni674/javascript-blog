const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
  /* add class 'active' to the correct article */
}

function generateTitleLinks() {
  const articles = document.querySelectorAll('.post');
  const titleList = document.querySelector('.list.titles');
  titleList.innerHTML = '';

  let html = '';

  for(const article of articles) {
    const articleId = article.getAttribute('id'); //article-1
    const articleTitle = article.querySelector('.post-title').innerHTML; //Article 1

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }  
}

generateTitleLinks();

/*Nie rozumiem logiki js, i po kolei jak się tworzy stałe i zmienne odwołania do poszczególnych elementow html*/
/*potrzebuje wytlumaczenia jaka funkcja co robi co zwraca i jak sie czego uzywa*/
