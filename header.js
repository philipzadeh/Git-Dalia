function showSubMenu(){
    const mobileMenu02 = document.getElementById('mobileMenu02');
        mobileMenu02.classList.add('transform-show');
}

function hideSubMenu(){
    const mobileMenu02 = document.getElementById('mobileMenu02');
    mobileMenu02.classList.remove('transform-show');
}

function toggleX() {
    var hamburger = document.getElementById("hamburger");
    var cross = document.getElementById("cross");

    if (hamburger.classList.contains("hide")) {
        hamburger.classList.remove("hide");
        cross.classList.add("hide");
    } else {
        hamburger.classList.add("hide");
        cross.classList.remove("hide");

        const mobileMenu02 = document.getElementById('mobileMenu02');
        mobileMenu02.classList.remove('transform-show');

    }
}


