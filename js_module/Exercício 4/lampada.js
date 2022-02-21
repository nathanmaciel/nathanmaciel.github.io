const btn = document.getElementsByClassName('acender')[0];

const lampada = document.getElementsByClassName('lampada')[0];

const body_bg = document.getElementsByClassName('body')[0]

const btn_txt = document.getElementsByTagName('span')[0];

btn.addEventListener('click', () => {

    if (lampada.classList.contains('acesa')){
        lampada.classList.remove('acesa');
        lampada.classList.add('apagada');
        body_bg.style.backgroundColor = 'rgb(206, 205, 212)';
        btn_txt.innerText = 'Acenda a lâmpada';
        btn.style.backgroundColor = 'rgb(255,227,127)'
        btn.style.color = 'black'
        
    } else{
        lampada.classList.remove('apagada');
        lampada.classList.add('acesa')
        body_bg.style.backgroundColor = 'rgb(255,250,233)'
        btn_txt.innerText = 'Apague a lâmpada'
        btn.style.backgroundColor = 'rgb(160,159,142)'
        btn.style.color = 'white';
        
    }

    console.log(body.classList)

})

