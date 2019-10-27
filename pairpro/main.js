'use strict';
{
  const bt=document.getElementById('bt');
  const table=document.getElementById('table');
  const member=['芦刈','木村','小林','佐野','長沢','山田'];
  if(member.length %2 !=0){
    member.push('先生');
  }
  function shuffle(){
    let i=member.length;
    while(i){
      let index=Math.floor(Math.random()*i--);
      let temp=member[index];
      member[index]=member[i];
      member[i]=temp;
    }
  }

  bt.addEventListener("click",function(){
    table.textContent=null;
    let count=0;
    shuffle();
    let row=parseInt(member.length/2)+1;
    for(let i=0;i<row;i++){
      let tr=document.createElement('tr');
      for(let j=0;j<3;j++){
        let td=document.createElement('td');
        let str;
        if(i===0){
          if(j===0){
            str="";
          }else if(j===1){
            str="D";
          }else{
            str="N";
          }
        }else{
          if(j===0){
            str=i;
          }else{
            str=member[count++];
          }
        }
        td.textContent=str;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  });
}
