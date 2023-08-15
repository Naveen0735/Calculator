let result=document.getElementById("display");
let num = 0;


function cal(number) {

    if(result.innerText === '0'||num > 0) {
        result.innerText = '';
        num = 0;
    } 
    result.innerText += number;
}



function cle()
{
    result.innerText="0";

}

function dele()
{
    result.innerText=result.innerText.slice(0,-1);

}

function ans() {
    num++;
  try{
      result.innerText=eval(result.innerText);
  }
  catch(err)
  {
      alert("Enter a valid math calculation");
  }
}