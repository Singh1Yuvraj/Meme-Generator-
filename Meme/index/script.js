const memeButten=document.querySelector(".meme .meme-butt");
const memeImg=document.querySelector(".meme img");
const memeTitle=document.getElementById("meme-title");
const memeAuther=document.getElementById("meme-auther");

const updateDetails =(url,title,auther) => {
    memeImg.setAttribute("src",url) 
    memeTitle.innerHTML=title;
    memeAuther.innerHTML=auther;
}
const ganerateMeme=async()=>{
    await fetch("https://meme-api.com/gimme/wholesomememes/2")
    .then((response) =>response.json())
    .then((data) =>{
          console.log(data);
        data.memes.map((ele)=>{
            console.log(ele.author);
            updateDetails(ele.url,ele.title,ele.author)
        })
       
     } );
}

memeButten.addEventListener("click",ganerateMeme);