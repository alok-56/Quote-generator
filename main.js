var btn = document.getElementById("btn");
var text = document.getElementById("text");
var author = document.getElementById("authorname");
var speech  = document.getElementById("speechimg");

btn.addEventListener("click",function(){
    btn.innerHTML="loading";
    fetch("http://api.quotable.io/random").then(function(res){
        return res.json();
    }).then(function(result){
       text.innerHTML=`"  ${result.content}  "`;
       author.innerHTML =` by   ${ result.author}`;
       btn.innerHTML = "New Quote";
       head.classList.add=(active);
    });
})
speech.addEventListener("click",function(){
    let utterance = new SpeechSynthesisUtterance(`${text.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance)
})
