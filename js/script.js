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

function generateTitleLinks(customSelektor = '') {
  const articles = document.querySelectorAll('.post'+ customSelektor);
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

/*Modul 7 */

/* zad 1*/

generateTitleLinks();

function generateTags(){


  /* find all articles */
  const articles = document.querySelectorAll('.post');
 
  /* START LOOP: for every article: */
  
  for(const article of articles) {
    const articleTags = article.getAttribute('data-tags');
    const tagsArray = articleTags.split(' ');
    let html = '';
    for(const tag of tagsArray) {
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      html = html + linkHTML;
    }

    const tagsWrapper = article.querySelector('.post-tags .list');
    tagsWrapper.innerHTML = html;
  }

}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');                                /* a.active[href^="'+tag+'"] */

  /* START LOOP: for each active tag link */
  for(const tag of activeTags){
    tag.classList.remove('active');

  }
  

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  const relatedTags = document.querySelectorAll('a[href="'+href+'"]')

  /* START LOOP: for each found tag link */
    for(const tag of relatedTags) {
      tag.classList.add('active');
    }
    /* add class active*/

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="'+tag+'"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagsLink = document.querySelectorAll('a[href^="#tag-"')
  /* START LOOP: for each link */
    for(const link of tagsLink){
      link.addEventListener ('click', tagClickHandler);
    }
  
}

addClickListenersToTags();

