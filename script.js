'use strict'

const heroDivs = document.querySelectorAll('.hero-div');
const asideDivs = document.querySelector('aside').children;
const missionStatementDivs = document.querySelector('.mission-statement-div').children;
const businessPartnersDivs = document.querySelector('.business-partners-div').children;
const featuresH2 = document.querySelector('.features-h2')
const featuresDivs = document.querySelector('.features-container-div').children;
const servicesH2 = document.querySelector('.services-h2');
const servicesBtn = document.querySelector('.services-btn')
const servicesListDivs = document.querySelector('.services-list').children
const servicesImg = document.querySelector('.services-img')
const footerDivs = document.querySelector('.main-footer-div').children
const footerNavLinkDiv = document.querySelector('.nav-links-div')
const hr = document.querySelector('hr')
const copyrightDiv = document.querySelector('.copyright-div')
console.log(footerDivs)

// Animating hero section
const revealDiv = function (entries, observer) {
  entries.forEach(entry => {
    // Guard clause
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('div--hidden')

    observer.unobserve(entry.target)
  });
}

// Function to loop over the htmlcollection and observe elements
const revealObserver = new IntersectionObserver(revealDiv, {
  root: null,
  threshold: 0,
  // rootMargin: "100px"
})

const observerRevealFtn = function (elementArr) {
  const arr = [...elementArr]
  arr.forEach((el, i) => {
    setTimeout(() => {
      revealObserver.observe(el)
    }, i * 500);
  })
}

// Hero section animation code
heroDivs.forEach(div => {
  revealObserver.observe(div)
  div.classList.add('div--hidden')
})

observerRevealFtn(asideDivs)
observerRevealFtn(missionStatementDivs)
observerRevealFtn(businessPartnersDivs)

// Features section animation code
revealObserver.observe(featuresH2);
observerRevealFtn(featuresDivs)

//  Services section animation
revealObserver.observe(servicesH2)
revealObserver.observe(servicesBtn)
revealObserver.observe(servicesImg)
observerRevealFtn(servicesListDivs)

// Footer animation code
observerRevealFtn(footerDivs)
revealObserver.observe(footerNavLinkDiv)
revealObserver.observe(hr)
revealObserver.observe(copyrightDiv)