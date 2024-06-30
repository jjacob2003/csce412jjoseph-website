function toggleStyleSheet(styleName) {
    var element = document.getElementById("mainStyleSheet");
    element.setAttribute("href", styleName);
    localStorage.setItem("temp", styleName);
}
window.onload = function () {
    var localStyle = localStorage.getItem("temp");
    var styleElement = document.getElementById("mainStyleSheet");
    styleElement.setAttribute("href", localStyle);
}

function toggleCircle(element) {
    document.querySelectorAll('.service-entry').forEach((circle) => {
        circle.classList.remove('active');
    });

    element.classList.toggle('active');
}

function toggleStyles() {
    var styleName = "style.css"; 
    var toggleSwitch = document.getElementById("toggleSwitch");
    
    if (toggleSwitch.checked) {
        styleName = "newStyle.css"; 
    }
    
    toggleStyleSheet(styleName); 
}

window.onload = function () {
    var localStyle = localStorage.getItem("temp");
    var toggleSwitch = document.getElementById("toggleSwitch");
    var styleElement = document.getElementById("mainStyleSheet");
    
    styleElement.setAttribute("href", localStyle);
    if (localStyle === "newStyle.css") {
        toggleSwitch.checked = true;
    }
}

// For the Cursor
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(e) {
        var cursor = document.querySelector(".custom-cursor");
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
});

