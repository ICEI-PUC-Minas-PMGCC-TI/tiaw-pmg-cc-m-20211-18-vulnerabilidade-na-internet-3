function testesenha() {
    var senha = document.getElementById('testsenha');

    var Num = /[0-9]/;
    var LeMaus = /[A-Z]/;
    var LeMin = /[a-z]/;
    var CaracEsp = /[Ç|ç|!|@|#|$|%|^|&|*|(|)|-|_]/;

    if (senha.value.length == 0) {
        alert('Coloque a senha que ira testar\nDica:\nNao use nomes conhecidos e datas');
    } else if (senha.value.length < 12) {
        alert('Senha Fraca!!!! \nDica:\nUma boa senha tem no minimo 12 caracteres');
    } else if (!senha.value.match(Num)) {
        alert('Senha Fraca!!!! \nDica:\nAdicione numerais');
    } else if (!senha.value.match(LeMaus)) {
        alert('Senha Fraca!!!! \nDica:\nAdicione letra maiuscula');
    } else if (!senha.value.match(LeMin)) {
        alert('Senha Mediana!!!! \nDica:\nAdicione letra minuscula');
    }else if (!senha.value.match(CaracEsp)) {
        alert('Senha Mediana!!!! \nDica:\nAdicione ao menos um caractere especial');
    } else {
        localStorage.setItem('db', senha.value);
        alert('Esta e uma senha Forte');
    }
}
document.getElementById ('btttest').addEventListener ('click', testesenha);
