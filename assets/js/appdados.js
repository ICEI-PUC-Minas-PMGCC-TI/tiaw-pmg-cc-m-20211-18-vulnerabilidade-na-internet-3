function lelogin (){
    let strlogin = localStorage.getItem('db');
    let objsite = {};

    if (strlogin) {
        objsite = JSON.parse (strlogin);
    }
    else {
        objsite = { 
            logins: [
                         {site:"", user:"", senha:""}
            ]
        }

        }
        return objsite; 
}

function salvalogin (login) {
    localStorage.setItem ('db' , JSON.stringify (login));
}
function imprimirlogin (){
    let tela = document.getElementById('tela');
    let tela1 = document.getElementById('tela1');
    let tela2 = document.getElementById('tela2');
    let strHtml1 = '';
    let strHtml2 = '';
    let strHtml3 = '';
    let objsite = lelogin ();

    for (i=0; i < objsite.logins.length; i++){
        strHtml1 = strHtml1 +  `<p> ${objsite.logins[i].site} </p>`
        strHtml2 = strHtml2 +  `<p> ${objsite.logins[i].user} </p>`
        strHtml3 = strHtml3 +  `<p> ${objsite.logins[i].senha} </p>`
    }
    tela.innerHTML = strHtml1;
    tela1.innerHTML = strHtml2;
    tela2.innerHTML = strHtml3;
}
function incluirlogin (){
    let objsite = lelogin();
    let nsite = document.getElementById("bdsite").value;
    let nuser = document.getElementById("bduser").value;
    let nsenha = document.getElementById("bdsenha").value;
    let novasenha = {
        site: nsite,
        user: nuser,
        senha: nsenha
    };
    objsite.logins.push (novasenha);
    salvalogin (objsite);

 imprimirlogin();   
}
document.getElementById ('bdbsalvar').addEventListener ('click', incluirlogin);
document.getElementById ('bdbutton').addEventListener ('click', imprimirlogin);
