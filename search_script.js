document.querySelector("#elastic").oninput = function(){
    let val = this.value.trim();
    let elascticItems = document.querySelectorAll(".elastic h2");

    if (val != ""){
        elascticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.closest("div").classList.add('hide');
            }
            else{
                elem.closest("div").classList.remove('hide');
            }
        });
    }
    else {
        elascticItems.forEach(function(elem){
            elem.closest("div").classList.remove('hide');
    });
    }
}