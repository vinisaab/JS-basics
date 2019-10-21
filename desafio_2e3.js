var divElement = document.querySelector('div#app');
var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button');

buttonElement.setAttribute('onclick','buscaGit()')


function buscaGit() {
    axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
    .then(function(resopnse){
        var listElement = document.createElement('ul');
        divElement.appendChild(listElement);
        for (repo of resopnse.data){
            console.log(repo.name)
            var repoElement = document.createElement('li')
            listElement.appendChild(repoElement);
            repoElement.innerHTML += repo.name
            
        }
        
    })
    .catch(function(error){
        console.warn(error);
    });
}

