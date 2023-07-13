window.addEventListener("resize", function() {
    myEle = document.getElementsByClassName("demo")[0];
    var text = 'hello world';
    myEle.innerHTML = `${text}`
});

var textEle = document.getElementsByClassName('clickable')[0];

textEle.addEventListener('click', function() {
    textEle.innerHTML = 'clicked'
});

