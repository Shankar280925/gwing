const slides = [
  { image: 'bali.jpg', title: 'Slider 01', text: 'This is the first slide' },
  { image: 'japan.jpg', title: 'Slider 02', text: 'This is the second slide' },
  { image: 'maladivs.jpg', title: 'Slider 03', text: 'This is the third slide' },
  { image: 'Goa.jpg', title: 'Slider 04', text: 'This is the fourth slide' },
  { image: 'mahal.jpg', title: 'Slider 05', text: 'This is the fifth slide' },
];

let currentIndex = 0;
const slider = document.getElementById('slider');
const thumbnailsContainer = document.getElementById('thumbnails');

function renderSlides() {
  slider.innerHTML = '';
  slides.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
      <img src="${s.image}" alt="${s.title}">
      <div class="text-content">
        <h2>${s.title}</h2>
        <p>${s.text}</p>
      </div>
    `;
    slider.appendChild(slide);
  });
}

function renderThumbnails() {
  thumbnailsContainer.innerHTML = '';
  const natureCaptions = [
    "Bali",
    "Japan",
    "Maldives",
    "Goa",
    "Taj mahal"
  ];

  slides.forEach((s, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'thumbnail-wrapper';

    const img = document.createElement('img');
    img.src = s.image;
    img.alt = s.title;
    img.classList.toggle('active', i === currentIndex);
    img.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });

    const caption = document.createElement('p');
    caption.textContent = natureCaptions[i];

    wrapper.appendChild(img);
    wrapper.appendChild(caption);
    thumbnailsContainer.appendChild(wrapper);
  });
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  const thumbnails = document.querySelectorAll('.thumbnail-wrapper img');
  thumbnails.forEach((img, i) => {
    img.classList.toggle('active', i === currentIndex);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

renderSlides();
renderThumbnails();
updateSlider();

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 5000);
