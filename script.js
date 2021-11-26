const projectUl = document.querySelector('.projects');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');
const btnClose = document.querySelector('.menu-close');
const exhibSectionList = document.querySelector('.exhib-section-list');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnClose.classList.add('close-act');
  btn.classList.add('menu-btn-close');
});

btnClose.addEventListener('click', () => {
  menu.classList.remove('active');
  btnClose.classList.remove('close-act');
  btn.classList.remove('menu-btn-close');
});

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  btnClose.classList.remove('close-act');
  btn.classList.remove('menu-btn-close');
});

const exhibSections = [
  {
    name: 'Jhon Smith',
    image: './src/resources/king-tut.jpeg',
    brief: 'Team Lead',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals. ',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
  {
    name: 'Brad Doe',
    image: './src/resources/pyramids.jpeg',
    brief: 'Senior Ux',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
  {
    name: 'Anne Smith',
    image: './src/resources/temple-of-isis.jpg',
    brief: 'Deputy CTO',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
  {
    name: 'Joe Jons',
    image: './src/resources/ancient-egyptian-hieroglyphics.jpg',
    brief: 'Front-End',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
  {
    name: 'Jay Cox',
    image: './src/resources/the-empire.jpeg',
    brief: 'Full Stack',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
  {
    name: 'Nina Spears',
    image: './src/resources/afterlife.jpeg',
    brief: 'Software Developer',
    description:
      'If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.',
    alt: 'Master JS,CSS, Html, React, Ruby on rails, etc',
  },
];

const loadSections = (sections) => {
  sections.forEach((section) => {
    const textHTML = `
    <li class="exhib-section-item">
      <div class="exhib-section-img-div">
        <div class="pattern-div"></div>
        <img
          class="exhib-section-img"
          src="${section.image}"
          alt="${section.alt}"
        />
      </div>
      <div class="exhib-section-content-div">
        <h4 class="exhib-section-title">${section.name}</h4>
        <p class="exhib-section-brief">
        ${section.brief}
        </p>
        <hr class="line-cards">
        <p class="exhib-section-description">
        ${section.description}
        </p>
      </div>
    </li>`;
    exhibSectionList.insertAdjacentHTML('beforeend', textHTML);
  });
};

loadSections(exhibSections);