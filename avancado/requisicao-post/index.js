function renderArticlle(articleData){
   const article = document.createElement('article')
   article.classList.add('article')
   article.id = `article ${articleData.id}`

   const title = document.createElement('h2')
   title.innerText = articleData.title

   const content = document.createElement('div')
   content.innerText = articleData.content
   
   const author = document.createElement('div')
   author.textContent = articleData.author

   article.append(title,author,content)
   document.querySelector('#articles').append(article)

}

async function fetchArticles(){
   const articles = await fetch('http://localhost:3000/articles').then(res => res.json())
   articles.forEach(renderArticlle);
}

document.addEventListener('DOMContentLoaded', ()=>{
   fetchArticles()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev)=>{
   ev.preventDefault()

   const articleData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      content: document.getElementById('content').value
   }

   const response = await fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleData)
   })

   const savedArticle = await response.json()
   form.reset()
   renderArticlle(savedArticle)
})