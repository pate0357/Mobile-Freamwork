var img1;
function getlocation()
{

  
    
    if (navigator.geolocation) {
        
        
        //code goes here to find position

        img1 = document.createElement("div");
         img1.id = "img1";
        var warpper=document.querySelector("#warpper");  
         warpper.appendChild(img1);
        
    

        
        var params = {
            enableHighAccuracy: false,
            timeout: 3600,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);




    } else {
        //what if browser does not support geolocation api
        var div = document.createElement("div");
        div.setAttribute("id", "Error");
        div.querySelector("Error").innerHTML = "Browser does not support location based service"
        img1.appendChild(div);

    }
 }



function reportPosition(position) {
    //create output div for logitude and latitude

    //create variable for latitude and longitude    
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    drawimage(lat, lon);
}

function drawimage(lat, lon) {


        //create canvas element
        var createcanvas = document.createElement("canvas");
        createcanvas.id = "myCanvas";
       createcanvas.width = "400";
        createcanvas.height = "400";
        img1.appendChild(createcanvas);



        //append image tag to canvas
        var canvas = document.querySelector("#myCanvas");
        var context = canvas.getContext('2d');
        var img = document.createElement("img");

        img.onload = function () {
            context.drawImage(img, 0, 0);

        };

        img.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=10&markers=' + lat + ',' + lon + '&size=400x400&sensor=TRUE_OR_FALSE;'






    }
    //what  if gps shows error


function gpsError(error) {
    var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    };
}

//    alert("Error: " + errors[error.code]);

