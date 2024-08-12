// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the current date and time
    const currentTime = new Date().toLocaleString();
   
    document.getElementById('current-time').innerText = currentTime;
    function sampele(){
        console.log("insde the sample function");
    }
    sampele()
    function loadProducts() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load',()=>{
            products = JSON.parse(xhr.response).map((productDetails)=>{
                if(productDetails.tyoe=== 'clothing'){
                    return new Clothing(productDetails)
                }
                return new Product(productDetails)

            });
        });


});
