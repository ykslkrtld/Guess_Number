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
    input.focus()
    if (guess > 100 || guess < 0) {
        sonuc.textContent = 'Lütfen 0-100 arasında geçerli bir sayı giriniz!';
        input.value = ''
        input.focus()
        return
    }
    if(right > 0){
        right--
        if (guess == number){
            sonuc.textContent =`Tebrikler doğru tahmin, sayi : ${number}`
            document.querySelector(".container").style.backgroundColor = "green"
            return
        } else if(right == 0){
            sonuc.textContent = `Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`
            document.querySelector(".container").style.backgroundColor = "red"
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










// guess = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
// while(right > 0){
//     right--
//     if(isNaN(guess) && right !== 0){
//         alert(`Geçersiz değer. ${right} hakkınız kaldı. Lütfen 0-100 arasıdna geçerli bir sayı değeri giriniz`)
//     } else {
//         if (guess == number){
//             alert(`Tebrikler doğru tahmin, sayi : ${number}`)
//             break 
//         } else if(right == 0){
//             alert(`Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`)
//             break
//         } else if(guess > number){
//             alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha küçük bir sayı giriniz:`)
//             high = guess
//         } else if(guess < number){
//             alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha büyük bir sayı giriniz:`)
//             low = guess
//         } 
//     }
//     guess = Number(prompt(`Lütfen ${low} ile ${high} arasında bir sayı tahmin ediniz:`));
// }