document.addEventListener('DOMContentLoaded', function () {

    // hamburger
    hamburgerMenu();

    // slideshow
    setInterval('slideShow()', 7000);

    // carousel indicator
    indicator();

    // tab menu
    tabMenu();

    // faq accordion
    accordion();
});

// hamburger
function hamburgerMenu() {
    const menuBtn = document.getElementById('hamburger');
    const menuLine = document.getElementsByClassName('hamburgerLine');
    const menu = document.getElementById('hammenu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('is-active');

        for (let i = 0; i < menuLine.length; i++) {
            menuLine[i].classList.toggle('is-active');

            if (menuLine[i].classList.contains('is-active')) {
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    menu.addEventListener('click', function () {
        menu.classList.remove('is-active');

        for (let i = 0; i < menuLine.length; i++) {
            menuLine[i].classList.toggle('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    })
}

// slideshow and indicator
const companyImg = ['./img/slide1.jpg', './img/slide2.jpg', './img/slide3.jpg'];
const companyItems = document.getElementsByClassName('companyItems')[0];
const dots = document.querySelectorAll('.dot');
let counter = 0;

function slideShow() {
    if (counter >= (companyImg.length)) {
        counter = 0;
    }

    companyItems.style.backgroundImage = "url(" + companyImg[counter] + ")";
    counter++;

    let dotActive = document.getElementsByClassName('is-current')[0];

    // manipulate indicator
    if (counter === 1) {
        dots[0].classList.add('is-current');
        dotActive.classList.remove('is-current');
    } else if (counter === 2) {
        dots[1].classList.add('is-current');
        dotActive.classList.remove('is-current');
    } else if (counter === 3) {
        dots[2].classList.add('is-current');
        dotActive.classList.remove('is-current');
    }
}

function indicator() {
    const dotFirst = document.getElementsByClassName('dot')[0];
    const dotSecond = document.getElementsByClassName('dot')[1];
    const dotDefault = document.getElementsByClassName('dot')[2];

    dots.forEach(function (el, i) {
        el.addEventListener('click', function () {

            let dotCurrent = document.getElementsByClassName('is-current')[0];

            // dotDefault clicked
            if (el === dotDefault) {
                counter = "3";
            }

            if (el === dotDefault && dotFirst.classList.contains('is-current') || dotSecond.classList.contains('is-current')) {
                dotCurrent.classList.remove('is-current');
                dotDefault.classList.add('is-current');

                companyItems.style.backgroundImage = "url(." + companyImg[i] + ")";
                counter = "3";
            }

            // dotFirst clicked
            if (el === dotFirst) {
                dotDefault.classList.remove('is-current');
                el.classList.add('is-current');

                companyItems.style.backgroundImage = "url(." + companyImg[i] + ")";
                counter = "1";
            }

            if (el === dotFirst && dotDefault.classList.contains('is-current') || dotSecond.classList.contains('is-current')) {
                dotCurrent.classList.remove('is-current');
                el.classList.add('is-current');

                companyItems.style.backgroundImage = "url(." + companyImg[i] + ")";
                counter = "1";
            }

            // dotSecond clicked
            if (el === dotSecond) {
                dotDefault.classList.remove('is-current');
                el.classList.add('is-current');

                companyItems.style.backgroundImage = "url(." + companyImg[i] + ")";
                counter = "2";
            }

            if (el === dotSecond && dotDefault.classList.contains('is-current') || dotFirst.classList.contains('is-current')) {
                dotCurrent.classList.remove('is-current');
                el.classList.add('is-current');

                companyItems.style.backgroundImage = "url(." + companyImg[i] + ")";
                counter = "2";
            }
        });
    });
}

// tabmenu
function tabMenu() {
    const tabBox = document.getElementsByClassName('tabBox');
    const tabTitle = document.getElementsByClassName('tabTitle');
    // change tabTitle into array
    const arrayTabTitle = [].slice.call(tabTitle);

    for (let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch() {
        const tabtitleDefault = document.getElementsByClassName('is-active')[0];
        const tabboxDefault = document.getElementsByClassName('is-shown')[0];

        // activate tab title
        tabtitleDefault.classList.remove('is-active');
        this.classList.add('is-active');

        // activate tab box
        tabboxDefault.classList.remove('is-shown');

        // クリックされたタブタイトルのindexを取得し、タブコンテンツ[同index]にis-shownクラスを付与する
        let index = arrayTabTitle.indexOf(this);
        tabBox[index].classList.add('is-shown');
    };
}

// accordion
function accordion() {
    const faqQuestion = document.querySelectorAll('.faqList:nth-child(odd)');

    for (let i = 0; i < faqQuestion.length; i++) {
        let questionEach = faqQuestion[i];

        // faqAnswer
        let faqAnswer = questionEach.nextElementSibling;

        // faqIcon
        let faqIcon = questionEach.firstElementChild;

        // faqLine
        let faqBtn2 = questionEach.lastElementChild.firstElementChild.lastElementChild;

        questionEach.addEventListener('click', () => {
            faqAnswer.classList.toggle('is-visible');
            // faqList, faqIcon, faqBtnの背景色と文字色を反転させる
            questionEach.classList.toggle('is-active');
            faqIcon.classList.toggle('is-active');
            faqBtn2.classList.toggle('is-active');
        });
    }
}
