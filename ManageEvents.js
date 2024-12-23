document.addEventListener("DOMContentLoaded", () => {
    var delEvents = document.getElementById("CancelBtn");
    var RegLst = document.getElementById("RegListBtn");

    RegLst.addEventListener("click", function(e){
        e.preventDefault;
        alert("The users registered are:\nfakeemail1@gmail.com\nfakeemail2@gmail.com\nfakeemail3@gmail.com\nfakeemail4@gmail.com")
    });

    delEvents.addEventListener("click", function(e){
        e.preventDefault;
        var eventInfo = document.getElementById("event1");
        eventInfo.style.borderWidth = 0;
        eventInfo.innerHTML = "";
    });
    
});//end DOMContentLoaded event listener