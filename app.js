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

        // Faqatgina container ichida ko‘rinadigan birinchi sectionga active nav beramiz
        if (
            !found &&
            sectionTop <= containerTop + containerHeight / 2 &&
            sectionTop + sectionHeight > containerTop + containerHeight / 2
        ) {
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
