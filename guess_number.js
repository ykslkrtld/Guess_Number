const number = Math.round(Math.random() * 100);
let right = 5;
let low = 0;
let high = 100;
console.log(number);


guess = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
while(right > 0){
    right--
    if(isNaN(guess) && right !== 0){
        alert(`Geçersiz değer. ${right} hakkınız kaldı. Lütfen 0-100 arasıdna geçerli bir sayı değeri giriniz`)
    } else {
        if (guess == number){
            alert(`Tebrikler doğru tahmin, sayi : ${number}`)
            break 
        } else if(right == 0){
            alert(`Oyun bitti maalesef başka hakkınız kalmadı doğru sayi ${number} idi`)
            break
        } else if(guess > number){
            alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha küçük bir sayı giriniz:`)
            high = guess
        } else if(guess < number){
            alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha büyük bir sayı giriniz:`)
            low = guess
        } 
    }
    guess = Number(prompt(`Lütfen ${low} ile ${high} arasında bir sayı tahmin ediniz:`));
}