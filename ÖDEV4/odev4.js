var kullaniciAdi = "admin";
var parola = "123";

var girilenkullaniciAdi;
var girilenParola;

var x;

function kontrolEt(){

girilenkullaniciAdi = document.getElementById("kullaniciAdi1").value;
girilenParola = document.getElementById("parola1").value;




    if((kullaniciAdi == girilenkullaniciAdi) && (parola == girilenParola)){

    window.open("yon.html");
    }else{
        alert("Hatalı Kullanıcı Adı veya Parola");
    }
}



function girisOnayi(){

    kontrolEt();



}