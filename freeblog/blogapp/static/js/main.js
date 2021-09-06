function filterBlog(){
    str = document.getElementById('bs').value;
    // console.log(str)
    blog = document.getElementsByClassName('blog-style');
    // console.log(blog);
    for(b of blog){
        title = b.getElementsByClassName('heading')[0].innerHTML
        if(title.toLowerCase().includes(str.toLowerCase()) || str===""){
            b.classList.remove('hide');
        }
        else{
            b.classList.add("hide");
        }
    }
    document.getElementById('bs').value="";
}