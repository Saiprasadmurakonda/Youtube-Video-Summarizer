chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == "Posted") {
        fetch('http://127.0.0.1:5000/receive_url',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'mode': 'cors',
                'User-agent': 'learning app',
            }
        }
        ).then(response=>response.json())
        .then(data=>{console.log(data.result)})
        .catch(error=>{console.log(error)})  
    }
})