const mobileMenuOverlay = document.querySelector('.mobileMenu');
const openMenuButton = document.querySelector('.mobileMenuIcon');
const closeMenuButton = document.querySelector('.closeMenuIcon');

function toggleMenu() {
  mobileMenuOverlay.style.display = 'block';

  closeMenuButton.style.display = 'block';
  openMenuButton.style.display = 'none';
}

function closeMenu() {
  mobileMenuOverlay.style.display = 'none';
  openMenuButton.style.display = 'block';
  closeMenuButton.style.display = 'none';
}

openMenuButton.addEventListener('click', () => toggleMenu());
closeMenuButton.addEventListener('click', () => closeMenu());

const speakerCard = document.querySelector('.SpeakerSection');

const speakersinfo = [
  {
    Name: 'Mwiya Musokotwane',
    Picture: './img/Mwiya1.jpg',
    ImageAlt: 'Mwiya Musokotwane',
    speakerTitle: 'CEO Thebe Investment',
    Bio: 'Mwiya Musokotwane is the CEO of Zambia-based investment firm Thebe Investment Management.',
  },
  {
    Name: 'Nolan Myers',
    Picture: './img/nolan mayers.jpg',
    ImageAlt: 'Nolan Myers',
    speakerTitle: 'CEO DOUBLE GDP',
    Bio: 'Nolan is a versatile leader with experience running customer success, professional services, operations, partnerships, and product.',
  },
  {
    Name: 'Doreen Okiri',
    Picture: './img/Doreen.jpg',
    ImageAlt: 'Doreen Okiri',
    speakerTitle: 'Head of customer Success DOUBLE GDP',
    Bio: 'Doreen is Specialised in Project management, software implementation and has extensive experience in SaaS customer success.',
  },
  {
    Name: 'Silumesii Maboshe',
    Picture: './img/silumesii.jpg',
    ImageAlt: 'Silumesii Maboshe',
    speakerTitle: 'Co-Founder and Director',
    Bio: 'Silumesii is a software developer, project manager, connector, researcher and has provided solutions to various customer  tech challenges.',
  },
  {
    Name: 'Ariel Camus',
    Picture: './img/Ariel.jpg',
    ImageAlt: 'Ariel Camus',
    speakerTitle: 'Founder & CEO at Microverse',
    Bio: 'Ariel believes that the place where you are born should not determine your opportunities in life.',
  },
  {
    Name: 'Butler Shimaluwani',
    Picture: './img/Butler.jpg',
    ImageAlt: 'Butler Shimaluwani',
    speakerTitle: 'Student at Microverse',
    Bio: 'Butler is a full time student at Microverse, learning Full Stack Web Development.',
  },
];

function createSpeakerSection(cardData) {
  speakerCard.innerHTML = ' ';

  cardData.forEach((card) => {
    const cardMaster = `
  <div class="speaker1">
  <div class="speakerGridCard">
  <img src="${card.Picture}" alt="${card.ImageAlt}">
  </div>  
  <div class="speakerCardContent">
  <h3 class="speakerName">${card.Name}</h3>
  <h4 class="speakerTitle"><i>${card.speakerTitle}</i></h4>
  <hr class="speakerTitleLine">
  <p class="speakerText">${card.Bio}</p>
  </div>
  </div>
  </div>
  `;
    speakerCard.insertAdjacentHTML('beforeend', cardMaster);
  });
}

createSpeakerSection(speakersinfo);
