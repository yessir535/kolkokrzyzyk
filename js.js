var licznik = 1
var znak = "O"
var stan = 0
function generuj(id){



    if(id == "d1"){

if(stan == 1){
    return
}
        
        if(document.getElementById("d1").innerHTML == znak){
            return
        }
        
        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }
        
        document.getElementById("d1").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d2"){
if(stan == 1){
    return
}

        if(document.getElementById("d2").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d2").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d3"){
if(stan == 1){
    return
}
        if(document.getElementById("d3").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d3").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d4"){
if(stan == 1){
    return
}   
        if(document.getElementById("d4").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d4").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d5"){
            if(stan == 1){
                return
            }
        if(document.getElementById("d5").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d5").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d6"){
if(stan == 1){
    return
}
        if(document.getElementById("d6").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d6").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d7"){
if(stan == 1){
    return
}
        if(document.getElementById("d7").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d7").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d8"){
if(stan == 1){
    return
}
        if(document.getElementById("d8").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d8").innerHTML = znak

        licznik++
        wygrana()
    }

    if(id == "d9"){
if(stan == 1){
    return
}
        if(document.getElementById("d9").innerHTML == znak){
            return
        }

        if(licznik % 2 === 0){
            znak = "X"
        } else {
            znak = "O"
        }

        document.getElementById("d9").innerHTML = znak

        licznik++
        wygrana()
    }

}

function wygrana(){

    var d1 = document.getElementById("d1").innerHTML
    var d2 = document.getElementById("d2").innerHTML
    var d3 = document.getElementById("d3").innerHTML
    var d4 = document.getElementById("d4").innerHTML
    var d5 = document.getElementById("d5").innerHTML
    var d6 = document.getElementById("d6").innerHTML
    var d7 = document.getElementById("d7").innerHTML
    var d8 = document.getElementById("d8").innerHTML
    var d9 = document.getElementById("d9").innerHTML

    if(d1 != "" && d1 == d2 && d2 == d3){
        document.querySelector(".win").innerHTML = "Wygrywa " + d1
        document.getElementById("d1").style.color = "green"
        document.getElementById("d2").style.color = "green"
        document.getElementById("d3").style.color = "green"
            stan = 1
        return
    }

    if(d4 != "" && d4 == d5 && d5 == d6){
        document.querySelector(".win").innerHTML = "Wygrywa " + d4
        document.getElementById("d4").style.color = "green"
        document.getElementById("d5").style.color = "green"
        document.getElementById("d6").style.color = "green"
        stan = 1
        return
        
    }

    if(d7 != "" && d7 == d8 && d8 == d9){
        document.querySelector(".win").innerHTML = "Wygrywa " + d7
        document.getElementById("d7").style.color = "green"
        document.getElementById("d8").style.color = "green"
        document.getElementById("d9").style.color = "green"
        stan = 1
        return
    }

    if(d1 != "" && d1 == d4 && d4 == d7){
        document.querySelector(".win").innerHTML = "Wygrywa " + d1
        document.getElementById("d1").style.color = "green"
        document.getElementById("d4").style.color = "green"
        document.getElementById("d7").style.color = "green"
        stan = 1
        return
    }

    if(d2 != "" && d2 == d5 && d5 == d8){
        document.querySelector(".win").innerHTML = "Wygrywa " + d2
        document.getElementById("d2").style.color = "green"
        document.getElementById("d5").style.color = "green"
        document.getElementById("d8").style.color = "green"
        stan = 1
        return
    }

    if(d3 != "" && d3 == d6 && d6 == d9){
        document.querySelector(".win").innerHTML = "Wygrywa " + d3
        document.getElementById("d3").style.color = "green"
        document.getElementById("d6").style.color = "green"
        document.getElementById("d9").style.color = "green"
        stan = 1
        return
    }

    if(d1 != "" && d1 == d5 && d5 == d9){
        document.querySelector(".win").innerHTML = "Wygrywa " + d1
        document.getElementById("d1").style.color = "green"
        document.getElementById("d5").style.color = "green"
        document.getElementById("d9").style.color = "green"
        stan = 1
        return
    }

    if(d3 != "" && d3 == d5 && d5 == d7){
        document.querySelector(".win").innerHTML = "Wygrywa " + d3
        document.getElementById("d3").style.color = "green"
        document.getElementById("d5").style.color = "green"
        document.getElementById("d7").style.color = "green"
        stan = 1
        return
    }
   
}
