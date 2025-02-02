document.addEventListener('DOMContentLoaded', function() {
    //Adicionando os conteudos às constantes criadas para recuperar os valores de acordo. 

    const avatarContent = document.querySelector('#avatar');
    const nameContent = document.querySelector('#name');
    const usernameContent = document.querySelector('#username');
    const reposContent = document.querySelector('#repos');
    const followersContent = document.querySelector('#followers');
    const followingContent = document.querySelector('#following');
    const linkContent = document.querySelector('#link')

    //recuperando os valores das informarções necessárias.
    try{
        fetch('https://api.github.com/users/guilhermBM')
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(json) {
                avatarContent.src = json.avatar_url;
                nameContent.innerHTML = json.name;
                usernameContent.innerHTML = json.login;
                reposContent.innerHTML = json.public_repos;
                followersContent.innerHTML = json.followers;
                followingContent.innerHTML = json.following;
                linkContent.href = json.html_url;
            })
    } catch{
        console.error('Erro ao carregar informações');
    }
})