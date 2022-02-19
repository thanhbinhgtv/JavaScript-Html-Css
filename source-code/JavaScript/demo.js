console.log(false || 456);

//Get Ip
function getIPFromAmazon() {
    fetch('https://api.ipify.org?format=jsonp&callback=getIP')
    .then(response => response.json())
}