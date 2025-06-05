const navs = document.querySelectorAll('.nav');
const sections = document.querySelectorAll('section');
const container = document.querySelector('.container');

container.addEventListener("scroll", function () {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if( index == 0 ) section.classList.add();
        if( index == 1 ) section.classList.add()

        // Faqat section container oynasida ko‘rinadigan holatda bo‘lsa
        if (rect.top >= containerRect.top && rect.top < containerRect.bottom) {
            // Avval barcha navlardan active olib tashlaymiz
            navs.forEach(nav => nav.classList.remove('active'));

            // Faol navga active class qo‘shamiz
            if (navs[index]) {
                navs[index].classList.add('active');
            }
        }
    });
});

// Sahifa yuklanganda birinchi nav faollashsin
container.dispatchEvent(new Event('scroll'));
