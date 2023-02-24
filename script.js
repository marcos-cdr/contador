let counter = document.getElementById('counter');
let historicoBtn = document.getElementById('historic')
let historicoBtnCheck = false;
let x = 0;
let count = 0;
let highest = 0;
let i = 0;
let historico = [];

function increase(){
    count += 1;
    counter.innerHTML = count;
    if(count > highest){
        highest = count;
        document.getElementById('highest').innerHTML = `Maior número já contado: ${highest}`;
    }
    if(count > 0){
        document.getElementById('decrease').disabled = false;
    }
}

function reset(){
    if(count != 0){
        historico[i] = count;
        i++;
        count = 0;
        counter.innerHTML = count;
        let tag = document.createElement("p");
        let text = document.createTextNode(`${x+1}° número: ${historico[x]}`);
        tag.appendChild(text);
        let element = document.getElementById('historico');
        element.appendChild(tag);
        x++;
    }
    else{
        window.alert('O valor 0 não será salvo no histórico')
    }
}

function decrease(){
    count -= 1;
    counter.innerHTML = count;
    if(count == 0){
        document.getElementById('decrease').disabled = true;
    }
}

function historic(){
    if(historico[0] == undefined){
        window.alert("O histórico está vazio");
    }
    else{
    if(historicoBtnCheck){
        document.getElementById('historico').style.display = "none";
        historicoBtnCheck = false;
    }
    else{
        document.getElementById('historico').style.display = "block";
        historicoBtnCheck = true
    }
}
}