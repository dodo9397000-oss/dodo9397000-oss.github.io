// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'poster',
    image: 'img/g20.png',
    description: '이 프로젝트는 포스터 디자인입니다. 자연적 감수성과 현대적인 디자인으로 구성하였습니다.'
  },
  project2: {
    title: 'leaflet design',
    image: 'img/g100.png',
    description: '리플렛 디자인 프로젝트로, 제품을 알기 쉽게 디자인하였습니다.'
  },
  project3: {
    title: 'Edit Design Project 3',
    image: 'img/g53.jpg',
    description: '복지관 사보 디자인입니다.'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/g53.jpg',
    description: '복지관 사보 디자인입니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/g53.jpg',
    description: '복지관 사보 디자인입니다.'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/g50.jpg',
    description: '제품을 설명하는 제품 상세 디자인입니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});