const navs = document.querySelectorAll('.nav');
const sections = document.querySelectorAll('section');
const container = document.querySelector('.container');

container.addEventListener("scroll", function () {
    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    let found = false; // birinchi active nav topilganmi

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;



        if (
            !found &&
            sectionTop <= containerTop + containerHeight / 2 &&
            sectionTop + sectionHeight > containerTop + containerHeight / 2
        ) {

            if (index == 0) section.classList.add('active');
            if (index == 1) section.classList.add('active');
             


            navs.forEach(nav => nav.classList.remove('active'));
            if (navs[index]) {
                navs[index].classList.add('active');
            }
            found = true;
        }
    });
});
// Sahifa yuklanganda nav holatini aniqlash
window.addEventListener("load", () => {
    container.dispatchEvent(new Event("scroll"));
});
