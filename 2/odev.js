let kullanici = prompt("Lütfen İsminizi Giriniz")

let merhaba = document.querySelector("#merhaba")

merhaba.innerHTML = `${merhaba.innerHTML} <small>${kullanici}<small>`
