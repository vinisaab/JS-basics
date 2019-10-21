axios.get('https://api.github.com/users/vinisaab')
    .then(function(resopnse){
        console.log(resopnse);
    })
    .catch(function(error){
        console.warn(error);
    });
