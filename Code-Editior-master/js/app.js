const left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      bar = document.querySelector('.bar'),
      editor = document.querySelector('.editor'),
      run = document.querySelector('.btn-run'),
      iframe = document.querySelector('.iframe'),
      darkMode = document.querySelector('.btn-dark'),
      lightMode = document.querySelector('.btn-light');

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3)+ "px";
    editor.resize();
}

bar.addEventListener("mousedown", () =>{
    document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup", ()=> {
    document.removeEventListener("mousemove", drag);
})

//Run Btn Event Listener
run.addEventListener("click", ()=>{
    const html = editor.textContent; 
    iframe.src = "data:text/html;charset-utf-8," + encodeURI (html);
})

// set Dark Mode
darkMode.addEventListener('click', ()=>  {
    editor.style.backgroundColor = "#363836";
    editor.style.Color = "#eee";
})

// set Light Mode
lightMode.addEventListener('click', ()=>  {
    editor.style.backgroundColor = "";
    editor.style.Color = "";
})

//live code
document.getElementById('live').onclick = function(){
    if(this.checked){
        editor.addEventListener("keydown", ()=>{
            const html = editor.textContent;
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        })
    }
}
