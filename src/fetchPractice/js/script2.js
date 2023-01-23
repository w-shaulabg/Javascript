fetch("../js/test.json")

    .then(response => {
        return response.json();
    })


    .then(data => {
        console.log(data);
    })

    .catch(data => {
        return response.json();
    })
