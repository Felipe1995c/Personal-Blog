const blogs = JSON.parse(localStorage.getItem("blogs"));

for(i=0; i<blogs.length; i++){
  let article = document.createElement("article");
  article.classList.add("blog-content");

  let h2 = document.createElement("h2");
  h2.textContent = blogs[i].title;

  let p = document.createElement("p");
  p.textContent = blogs[i].content;

  let puname = document.createElement("p");
  puname.textContent = "Posted by: "+blogs[i].username;

  article.append(h2, p, puname);

  document.getElementById("section").append(article);
}
