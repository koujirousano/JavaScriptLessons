'use strict';
window.onload=function(){
	const info=document.getElementById('info');
	let cardRest=52;
	let sec=0;
	showInfo();
	function Card(suit,num){
		this.suit=suit;
		this.num=num;
		this.front;
		this.setFront=function(){
			this.front=`${this.suit}${this.num<10?'0':''}${this.num}.gif`;
		}
	}
	const cards=[];
	const suits=['s','d','h','c'];
	for(let i=0;i<suits.length;i++){
		for(let j=1;j<=13;j++){
			let card=new Card(suits[i],j);
			card.setFront();
			cards.push(card);
		}
	}
	function shuffle(){
		let i=cards.length;
		while(i){
			let index=Math.floor(Math.random()*i--);
			var temp=cards[index];
			cards[index]=cards[i];
			cards[i]=temp;
		}
	}
	shuffle();
	const table=document.getElementById('table');
	for(let i=0;i<suits.length;i++){
		let tr=document.createElement('tr');
		for(let j=0;j<13;j++){
			let td=document.createElement('td');
			let tempCard=cards[i*13+j];
			td.classList.add('card','back');
			td.onclick=flip;
			td.num=tempCard.num;
			td.style.backgroundImage=`url(images/${tempCard.front})`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	let firstCard=null;
	let flipTimerId=NaN;
	let gameTimerId=NaN;
	function flip(e){
		if(!gameTimerId){
			startCount();
		}
		let td=e.target;
		//td.classList.toggle('back');
		if(!td.classList.contains('back') || flipTimerId){
			return;
		}
		td.classList.remove('back');
		if(firstCard===null){
			firstCard=td;
		}else{
			if(firstCard.num===td.num){
				cardRest-=2;
				firstCard.classList.add('fadeout');
				td.classList.add('fadeout');
				if(cardRest===0){
					clearInterval(gameTimerId);
				}
				showInfo();
				firstCard=null;
			}else{
				flipTimerId=setTimeout(function(){
					firstCard.classList.add('back');
					td.classList.add('back');
					flipTimerId=NaN;
					firstCard=null;
				},1200);
			}
		}
	}
	function showInfo(){
		
		info.textContent=`残り${cardRest}枚`;
	}
	function startCount(){
		gameTimerId=setInterval(function(){
			sec++;
			showInfo();
		},1000);	
	}
};
