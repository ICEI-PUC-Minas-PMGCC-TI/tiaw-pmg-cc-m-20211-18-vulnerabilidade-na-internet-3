function lelogin (){
    let strlogin = localStorage.getItem('bd');
    let objsite = {};

    if (strlogin) {
        objsite = JSON.parse (strlogin);
    }
    else {
        objsite = { logins: [
                         {site:"Google", user:"Leo", senha:"leo42"},
                         {site:"Googe", user:"Le", senha:"leo2"}
            ]}

        }
        return objsite; 
}

function salvalogin (login) {
    localStorage.setItem ('bd' , JSON.stringify (login));
}
function imprimirlogin (){
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objsite = lelogin ();

    for (i=0; i< objsite.logins.length; i++){
        strHtml = strHtml +  `<p> ${objsite.logins[i].site} - ${objsite.logins[i].user} - ${objsite.logins[i].senha} </p>`
    }
    tela.innerHTML = strHtml;
}

function incluirlogin (){
    let nsite = document.getElementById("bdsite").value;
    let nuser = document.getElementById("bduser").value;
    let nsenha = document.getElementById("bdsenha").value;
    let novasenha = {
        site: nsite,
        user:nuser,
        senha:nsenha
    };
    objsite.login.push (novasenha);
    salvalogin (objsite);

    

}
document.getElementById ('bdbutton').addEventListener ('click', imprimirlogin, salvalogin);
