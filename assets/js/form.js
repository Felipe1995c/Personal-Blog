//This will create the objects array and place them in the local storage
document.getElementById("submit").addEventListener("click", function(e){
   e.preventDefault();
  
   const username = document.getElementById("username").value;
   const title = document.getElementById("title").value;
   const content = document.getElementById("content").value;
//alerts if there is a missing username, title, and content
   if(!username || !title || !content){
    alert("please enter all values");
    return;
   }

   const userData = {
    username: username,
    title: title,
    content: content
   }
//gets stored items from blogs or empty array. Then sets new entries into strings to store in local storage
   const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
   blogs.push(userData);
   localStorage.setItem("blogs", JSON.stringify(blogs));

   location.href = './blog.html';
});