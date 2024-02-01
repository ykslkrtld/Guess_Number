const number = Math.round(Math.random() * 101);
let right = 5;

while(right > 0){
    guess = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
    right--
    console.log(number);

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
        } else if(guess < number){
            alert(`Yanlış tahmin. ${right} hakkınız kaldı. Daha büyük bir sayı giriniz:`)
        } 
    }
}