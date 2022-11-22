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
  const articleSelector = clickedElement.getAttribute(href);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

/*Nie rozumiem logiki js, i po kolei jak się tworzy stałe i zmienne odwołania do poszczególnych elementow html*/
/*potrzebuje wytlumaczenia jaka funkcja co robi co zwraca i jak sie czego uzywa*/
