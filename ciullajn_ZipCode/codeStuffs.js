var zcodeGoButton = document.getElementById('zcodeGoButton');

zcodeGoButton.onclick = function (){
    var ZipCode = document.getElementById('zcode');
    var zip = ZipCode.value;
    var websiteURL = "http://api.zippopotam.us/us/" + zip;
    var XMLRequest = new XMLHttpRequest();

    XMLRequest.onreadystatechange = function(){
        if (XMLRequest.readyState == 4){
            var theResult = XMLRequest.responseText;
            var zippo = JSON.parse(theResult);
            var resultHTML = document.getElementById('results');
            resultHTML.innerHTML = zippo.places[0]["place name"] + ", " + zippo.places[0].state;
        }
    };
    XMLRequest.open('GET', websiteURL, true);
    XMLRequest.send(null);

}