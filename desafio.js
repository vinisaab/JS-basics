

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve,reject){
        if (idade >= 18) {
            resolve('Maior que 18')
        } else {
            reject('Menor que 18')
        }
    })
   }

checaIdade(10)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });