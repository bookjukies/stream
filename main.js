let send = document.getElementById(`form`);


send.addEventListener(
    `submit`,function(event){
        event.preventDefault()

        const formData = new FormData(this)
        const seachParam = new URLSearchParams()

        for (const pair of formData){
            seachParam.append(pair[0],pair[1],pair[2],pair[3])
        }

        fetch('login.php',{
            method: 'post',
            body: seachParam
        }).then(function(response){return response.text}).
        then(function(text){return console.log(text)}).
        catch(function(error){return console.log(error)})
    }
)