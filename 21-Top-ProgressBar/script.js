window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = window.scrollY;
    console.log("scrollHeight", document.documentElement.scrollHeight, "window.innerHeight", window.innerHeight )

    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;

    console.log(windowHeight)
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});