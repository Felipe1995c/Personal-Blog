document.getElementById("submit").addEventListener("click", function(e){
   e.preventDefault();
  
   const username = document.getElementById("username").value;
   const title = document.getElementById("title").value;
   const content = document.getElementById("content").value;

   if(!username || !title || !content){
    alert("please enter all values");
    return;
   }

   const userData = {
    username: username,
    title: title,
    content: content
   }

   const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
   blogs.push(userData);
   localStorage.setItem("blogs", JSON.stringify(blogs));

   location.href = './blog.html';
});