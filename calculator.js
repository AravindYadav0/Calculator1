

const display = document.getElementById('display');
const res = document.createElement('p');
const his = document.createElement('p');
let justCalculated = false;


function append(input){
    if(justCalculated){
        display.textContent = "";
        justCalculated = false;
    }
    display.textContent += input;

}

function Allclear(){
    display.textContent = "";
}

function calculate()
{
    try{
        const question = display.textContent;
        const result = eval(display.textContent);
        // display.textContent = result;
        res.textContent = result;
        display.appendChild(res);
        his.textContent = `${question} = ${result}`;
        display.appendChild(his);
        display.removeChild(res);
        justCalculated = true;
    }
    catch{
        display.textContent = "Error";
        justCalculated = true;

    }
}

function oneClear(){
    display.textContent = display.textContent.slice(0, -1);
}
