let slider = document.getElementById("range");

let dollar = document.getElementById("dollar");

let page = document.getElementById("page");

let checkbox = document.getElementById("check");

slider.addEventListener("input", function(){
    update();
});

slider.addEventListener("input", function(){
    update();
});

checkbox.addEventListener("click", function(){
    if(checkbox.checked == true){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
    }
    else{
        update();
    }
});

function update()
{
    var x = slider.value;

   switch (x) {
        case '1':
           page.innerText ="10K";
           dollar.innerText = "$8.00";           
           break;
        case '2':
            page.innerText ="50K";
            dollar.innerText = "$12.00";
            break;
        case '3':
            page.innerText ="100K";
            dollar.innerText = "$16.00";
            break;
        case '4':
            page.innerText ="500K";
            dollar.innerText = "$24.00";
            break;
        case '5':
            page.innerText = "1M";
            dollar.innerText = "$36.00";
            break;
       default:
           break;
   }

   if(checkbox.checked){
        if(x == 1){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
        }
        else if(x == 2){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
        }

        else if(x == 3){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
        }

        else if(x == 4){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
        }

        else if(x == 5){
        var dollarValue = dollar.innerText;
        var onlyDollar = dollarValue.substr(1);
        var output = parseInt(onlyDollar) - (25/100) * (parseInt(onlyDollar));
        dollar.innerText = "$" + output + ".00";
        }
    }
}

slider.addEventListener("input", function(){
    var x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 );
    var color = 'linear-gradient(90deg, hsl(174,77%,80%)' + x + '%, hsl(0,0%,100%)' + x + '%)';
    slider.style.background = color;
})