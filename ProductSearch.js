document.addEventListener("DOMContentLoaded", () => {
    var srch = document.getElementById("ProdSearchBtn");

    srch.addEventListener("click", function(e){
        e.preventDefault;
        var crit = document.getElementById("ProductName").value;
        if(crit == null){
            window.location = "ProductDetails.html";
            //alert(Please enter product into search field);
        }
        else{
            window.location = "ProductDetails.html";
            //switch
        }

    });

});//end DOMContentLoaded event listener