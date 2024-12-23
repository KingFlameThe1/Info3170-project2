document.addEventListener("DOMContentLoaded", () => {
    var srch = document.getElementById("ProdSearchBtn");

    srch.addEventListener("click", function(e){
        e.preventDefault;
        var crit = document.getElementById("ProductName").value;
        if(crit == null){
            //window.location = "ProductDetails.html";
            alert("Please enter product into search field");
        }
        else{
            switch(crit){
                case "sample":
                    window.location = "ProductDetails.html";
                    break;
                case "Tropical Rhythm":
                    alert("it works")
                    break;
                default:
                    alert("There was an error in your search.\nPlease check your spelling.\nIt may also be that the product is not in our database.")
            }
        }

    });

});//end DOMContentLoaded event listener