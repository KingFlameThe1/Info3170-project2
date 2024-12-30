document.addEventListener("DOMContentLoaded", () => {
    var yevents = document.getElementById("YourEventsBtn");
    var cevents = document.getElementById("CreateEventsBtn");
    var register = document.getElementById("registerbutton");
    var registered = document.getElementById("amount");

    registered.innerHTML = "Number Registered: 3"



    yevents.addEventListener("click", function(e){
        e.preventDefault;
        window.location = "ManageEvents.html";
    });

    cevents.addEventListener("click", function(e){
        e.preventDefault;
        window.location = "CreateEvents.html";
    });

    register.addEventListener("click", function(e){
        e.preventDefault;
        registered.innerHTML = "Number Registered: 4"
        alert("Your have registered for the event successfully.");
    });

});//end DOMContentLoaded event listener