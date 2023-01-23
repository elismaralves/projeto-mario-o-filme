const modal = document.querySelector('.modal'); /*atribui a constante modal o objeto da modal*/
const botaoTrailer = document.querySelector('.botao-trailer'); /*atribui a constante botaoTrailer o elemento botao-trailer*/
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

function alternarModal() {
	modal.classList.toggle('aberto');
}

//identifica quando o usuário clica no botão
botaoTrailer.addEventListener('click', () => {
	video.setAttribute('src', linkDoVideo);
	alternarModal();
});

//identifica quando o usuário clica no botão
botaoFecharModal.addEventListener('click', () => {
	video.setAttribute('src', '');
	alternarModal();
});
