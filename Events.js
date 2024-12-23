document.addEventListener("DOMContentLoaded", () => {
    var yevents = document.getElementById("YourEventsBtn");
    var cevents = document.getElementById("CreateEventsBtn");

    yevents.addEventListener("click", function(e){
        e.preventDefault;
        window.location = "ManageEvents.html";
    });

    cevents.addEventListener("click", function(e){
        e.preventDefault;
        window.location = "CreateEvents.html";
    });

});//end DOMContentLoaded event listener