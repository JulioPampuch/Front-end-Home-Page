
const slides = document.querySelectorAll('.radio')
const imagens = document.querySelectorAll('.slide')
const slide1 = document.querySelector('.s1')
slide1.classList.remove('slide-hide')

const bars = document.querySelectorAll('.bar')

function criaSlideCompleto(){

    for(i = 0; i < slides.length; i++){
        let slide = slides[i];
        let imagem = imagens[i]
        let imagem0 = imagens[0];
        let imagem1 = imagens[1];
        let imagem2 = imagens[2];
        let imagem3 = imagens[3];
        slide.addEventListener('click', function() {
            // console.log(slide, imagem)
            imagem0.classList.add('slide-hide')
            imagem1.classList.add('slide-hide')
            imagem2.classList.add('slide-hide')
            imagem3.classList.add('slide-hide')
            imagem.classList.remove('slide-hide')

            return imagem;
        })       
    }
}

criaSlideCompleto();
