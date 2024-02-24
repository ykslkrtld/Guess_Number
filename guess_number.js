const input = document.getElementById("tahmin")
const kontrol = document.getElementById("kontrol")
const sonuc = document.getElementById("sonuc")
const tekrar = document.getElementById("tekrar")
let right = 5
let low = 0
let high = 100
let number = Math.round(Math.random() * 100);
console.log(number);

window.onload = () =>{
    input.focus()
}

kontrol.addEventListener("click", () =>{
    let guess = input.value
    sonuc.style.visibility = "visible"
    input.focus()

    if(!input.value){
        sonuc.textContent = "Tahmin ediniz."
        return
    }

    if ((guess > 100 || guess < 0) && right > 1) {
        right--
        sonuc.textContent = `Lütfen 0-100 arasında geçerli bir sayı giriniz! ${right} hakkınız kaldı.`;
        input.value = ''
        input.focus()
        return
    }
    if(right > 0){
        right--
        if (guess == number){
            sonuc.textContent =`Tebrikler doğru tahmin 👏 sayi : ${number}`
            document.querySelector(".container").style.backgroundImage = "url('https://3.bp.blogspot.com/-ZM1e0sINCYs/Vjj9ynwZ4OI/AAAAAAAAPIU/ZhRlCy82c5A/s1600/fireworks-gif-animated-firework.gif')"
            document.querySelector(".container").style.backgroundSize = "cover"
            document.querySelector(".container").style.backgroundPosition = "center"
            document.querySelector("header").style.color = "white"
            input.focus()
            tekrar.style.visibility = "visible"
            kontrol.disabled = true
            return
        } else if(right == 0){
            sonuc.textContent = `Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`
            document.querySelector(".container").style.backgroundColor = "greenyellow"
            tekrar.style.visibility = "visible"
            kontrol.disabled = true
            input.focus()
            input.value = ""
            return
        } else if(guess > number){
            high = guess
            input.focus()
            input.value = ""
            sonuc.textContent =`Yanlış tahmin. ${right} hakkınız kaldı. Lütfen ${low} ile ${high} arasında bir sayı tahmin ediniz:`;
        } else if(guess < number){
            low = guess
            input.focus()
            input.value = ""
            sonuc.textContent =`Yanlış tahmin. ${right} hakkınız kaldı. Lütfen ${low} ile ${high} arasında bir sayı tahmin ediniz:`;
        } 
    }
}
)

tahmin.onkeydown = function (e) {
    //   console.log(e.code)
    if (e.key === "Enter") {
      kontrol.click()
    }
}

tekrar.onclick = () => {
    document.querySelector(".container").style.backgroundColor = "aqua"
    document.querySelector(".container").style.backgroundImage = ""
    number = Math.round(Math.random() * 100);
    right = 5;
    low = 0
    high = 100
    input.value = ''
    sonuc.style.visibility = "hidden"
    tekrar.style.visibility = "hidden"
    input.focus()
    kontrol.disabled = false
    document.querySelector("header").style.color = "black"
    console.log(number);
}