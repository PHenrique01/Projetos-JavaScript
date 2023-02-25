function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gereno = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imgs/criança-m.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imgs/jovem-m.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imgs/adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imgs/idoso-m.png')
            }
        }else if (fsex[1].checked){
            gereno = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imgs/criança-f.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imgs/jovem-f.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imgs/adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imgs/idoso-f.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}