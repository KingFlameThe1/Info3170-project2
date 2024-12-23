document.addEventListener("DOMContentLoaded", () => {
    var save = document.getElementById("save");

    save.addEventListener("click", function(e){
        e.preventDefault;

        var EName = document.getElementById("ename").value;
        var descr = document.getElementById("desc").value;
        var location = document.getElementById("location").value;
        var eventDate = document.getElementById("date").value;

        if(EName == null){
            alert("Please fill out all fields.");
        }
        else if(descr == null){
            alert("Please fill out all fields.");
        }
        else if(location == null){
            alert("Please fill out all fields.");
        }
        else if(eventDate == null){
            alert("Please fill out all fields.");
        }
        else{
            alert("Saved succesfully.");
        }

    });

});//end DOMContentLoaded event listener