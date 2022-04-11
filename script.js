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
document.addEventListener('keydown', (event)=>
{
    if(event.key==1||event.key==2||event.key==3||event.key==4||event.key==5||event.key==6||event.key==7||event.key==8||event.key==9||event.key==0){
        const result=document.getElementById("result").value;
        document.getElementById("result").value=result+event.key;
    }
    else if(event.key=="=")
    {
        calculate();
    }
    else if(event.key=="+"||event.key=="-"||event.key=="*"||event.key=="/"||event.key==".")
    {
        const result=document.getElementById("result").value;
        document.getElementById("result").value=result+event.key;
    }
    else if(event.key=="Backspace")
    {
        clearScreen();
    }
    

});

