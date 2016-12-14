/**
 * Created by auto2 on 12/13/2016.
 */
    //selects all the keys
var keys = document.querySelectorAll("#calculator span");

//add onclick event to all keys and perform

for(var i = 0; i<keys.length; i++){
    keys[i].onclick = function(e){
        //her the input button values
        var input = document.querySelector(".display");
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;

        //append keys values to input string

        //clear button
        if(btnValue == "C") {
            input.innerHTML = "";

        }else{
        //append keys if not C or =
            input.innerHTML += btnValue;
    }
        //if equal = key pressed
        if(btnValue == "=") {
            var equation = inputValue;
            if (equation) {
                input.innerHTML = eval(equation);
            }
        }
        }
}