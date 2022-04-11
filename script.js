function display(number){
    const result=document.getElementById("result").value;
    document.getElementById("result").value=result+number;
}
function clearScreen()
{
    document.getElementById("result").value="";
}

function calculate()
{
    const expretion=document.getElementById("result").value;
    const solution=eval(expretion);
    document.getElementById("result").value=solution;
}