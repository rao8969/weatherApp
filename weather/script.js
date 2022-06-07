
function getData(){
  let city = document.getElementById("city").value;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4145bb890a51b2048900bc692f0801ea`;

       fetch(url)
              .then (function (res) {

                 return res.json();
        })
              .then (function (res){
                 append(res);
               console.log(res);
          })
             .catch(function (err){
            console.log(err);
       });
}

function append(data){
   let container=document.getElementById('container');
   let map=document.getElementById('gmap_canvas');
   container.innerHTML=null;

   let city=document.createElement('p');

   city.innerText= `City: ${data.name}`;

   let min=document.createElement('p');
   min.innerText= `Min temp: ${data.main.temp_min}`;

   let max=document.createElement('p');
   max.innerText=`Max temp:${data.main.temp_max}`;

   let speed=document.createElement('p');
   speed.innerText= `Speed: ${data.wind.speed}`;

   let clouds=document.createElement('p');
   clouds.innerText= `Clouds:${data.clouds.all}`;

   let sunrise=document.createElement('p')
   sunrise.innerText= `Sunrise:${data.sys.sunrise}`;

   let sunset=document.createElement('p');
   sunset.innerText=`Sunset:${data.sys.sunset}`;

   container.append(city,min,max,speed,clouds,sunrise,sunset);

   map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`




}