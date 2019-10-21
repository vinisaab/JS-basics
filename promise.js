var minhaPromise = function () {
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET','https://api.github.com/users/vinisaab');
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisicao');
                }
            }
        }
    })
}

minhaPromise()
    .then(function(resopnse){
        console.log(resopnse);
    })
    .catch(function(error){
        console.warn(error);
    });
