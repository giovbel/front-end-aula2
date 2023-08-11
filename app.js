'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const fundo = document.getElementById('fundo')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('amarelo')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function mudarImagem(){
    forma3.classList.toggle('melanie')
}

function desaparecer(){
    forma4.classList.toggle('desaparecer')
}

function girando(){
    forma5.classList.toggle('round')
}

function mudarFundo(){
    fundo.classList.toggle('corDeFundo')
}

function mudarTexto(){

    if(surprise.textContent === 'surprise'){
        surprise.textContent = 'OLAAAA !!'
    }else{
        surprise.textContent = 'surprise'
    }
}

function movimento(){
    forma8.classList.toggle('movendo')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', desaparecer)
forma5.addEventListener('click', girando)
forma6.addEventListener('click', mudarFundo)
forma7.addEventListener('click', mudarTexto)
forma8.addEventListener('click', movimento)