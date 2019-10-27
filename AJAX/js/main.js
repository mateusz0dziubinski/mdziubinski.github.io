document.getElementById("button").addEventListener("click", getData);
let user = document.createElement('p');
let textUser = document.createTextNode("User");
let display = document.getElementById("display");

user.appendChild(textUser);
display.appendChild(user);

console.log(user);


function getData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {

            let pUserId = document.createElement('p');
            let pUserName = document.createElement('p');
            let pUserURL = document.createElement('p');

            pUserId.innerHTML = "User ID: " + response[i].id;
            pUserName.innerHTML = "User Name: " + response[i].name;
            pUserURL.innerHTML = "User URL: http://" + response[i].website + "<br>--------";

            document.body.appendChild(pUserId);
            document.body.appendChild(pUserName);
            document.body.appendChild(pUserURL);


            let konieclicznika = 0;

            window.onscroll = function () {
                let d = document.documentElement;

                let innerHeight = window.innerHeight;

                let offsetHeight = d.offsetHeight;

                let scrollTop = d.scrollTop;

                let sumScrollTopInnerHeight = Math.ceil(scrollTop + innerHeight);

                console.log(`offset: ${offsetHeight}`)

                console.log("scrollTop + innerHeight: " + sumScrollTopInnerHeight);

                if (sumScrollTopInnerHeight >= offsetHeight) {
                    konieclicznika += 1;

                    console.log("Dojdziono doo końca razy: " + konieclicznika);
                }
            };
        });

    };






/* Zadanie 2 dziala
$(function () {
    let btn = $("#button");
    btn.click(function () {
        console.log("działa klik")
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/1",
            function (data) {
                console.log(data);

                $("#display").append("<p>" + data.id + " " + data.name
                + " " + data.email + " " + "</p>")
            }
        );
    })

});
*/




/* Zadanie 1 dziala
document.getElementById("button").addEventListener("click", getData);
let user = document.createElement('p');
let textUser = document.createTextNode("User");
let display = document.getElementById("display");

user.appendChild(textUser);
display.appendChild(user);

console.log(user);


function getData(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(response=>{

    console.log(response);
    let printGetData = response;

    document.getElementById("display").innerHTML = printGetData.name + " " + printGetData.username +
    " " + printGetData.email;

    });
}
*/
