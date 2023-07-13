// Method 1  onload property of the window object:

// window.onload = function event() {
//     window.alert("window event load performed")
// };

// Method 2 To handle the load event, you register an event listener using the addEventListener() method


window.onload = (event) => {
    var headerEle = document.getElementsByClassName('head')[0];
    headerEle.innerHTML = 'hello world'
};


  
 