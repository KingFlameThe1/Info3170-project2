document.addEventListener("DOMContentLoaded", () => {
    var save = document.getElementById("save");

    save.addEventListener("click", function(e){
        e.preventDefault;

        var EName = document.getElementById("ename").value;
        var descr = document.getElementById("desc").value;
        var location = document.getElementById("location").value;
        var eventDate = document.getElementById("date").value;

        //console.log(EName);
        //console.log(descr);
        //console.log(location);
        //console.log(eventDate);

        if(EName == ""){
            alert("Please fill out all fields.");
        }
        else if(descr == ""){
            alert("Please fill out all fields.");
        }
        else if(location == ""){
            alert("Please fill out all fields.");
        }
        else if(eventDate == ""){
            alert("Please fill out all fields.");
        }
        else{
            alert("Saved succesfully.");
        }

    });

});//end DOMContentLoaded event listener