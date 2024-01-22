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
let isTocClicked = false; // Flag to track if a toc-entry link was clicked

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (isTocClicked) {
        // If a toc-entry was clicked, hide the site header
        document.querySelector('.site-header').classList.add('hide-site-header');
        isTocClicked = false; // Reset the flag
    } else {
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            document.querySelector('.site-header').classList.add('hide-site-header');
        } else if (currentScroll < lastScrollTop) {
            // Scrolling up
            document.querySelector('.site-header').classList.remove('hide-site-header');
        }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// Modify event listener for toc-entry hyperlinks
document.querySelectorAll('.toc-entry').forEach(function (element) {
    element.addEventListener('click', function () {
        // Set the flag when a toc-entry is clicked
        isTocClicked = true;
    });
});
