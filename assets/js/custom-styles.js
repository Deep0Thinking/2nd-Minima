/**
 * archive.md
 */

// Toggle Display (none <-> block)

var x = document.getElementsByClassName("Text");
var y = document.getElementsByClassName("Selection");
var z = document.getElementsByClassName("Single-Container");

for (var i = 0, len = x.length; i < len; i++) {
    (function (index) {
        z[i].onclick = function () {

            if (x[index].style.display === "none") {
                x[index].style.display = "flex";
                y[index].style.display = "none";
            }

            else {
                x[index].style.display = "none";
                y[index].style.display = "flex";
            }

        }

    })(i);

}

/**
 * default.md
 */

// Dynamic visibility for sticky header based on scroll direction

let lastScrollTop = 0; // This variable will hold the last scroll position

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector('.site-header').classList.add('hide-site-header');
    } else {
        // Scrolling up
        document.querySelector('.site-header').classList.remove('hide-site-header');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);