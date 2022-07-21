import React from "react";
 

function Card(props) { 
 
 const date = props.card.createAt.slice(0,10) + " " +  props.card.createAt.slice(11,19);
  

  return (
    <li className="photo-container" key={props.index}>
      <div className="photo-container__info"> Карточка создана в базе данных {date}</div>
      <div className="photo-container__date">
       <div> Доктор {props.card.name}</div>
       <div>Процедуры были произведены {props.card.year}</div>
       <div>Время {props.card.date}</div>
       <div> Отдел {props.card.otdel}</div>
      </div> 
<div className="photo-container__table">
  <div className="photo-container__clapan">
    <div className="photo-container__clapan-name"> Клапаны</div>
    <div>{props.card.postF.clapan}</div>
    <div>{props.card.postS.clapan}</div>
    <div>{props.card.postT.clapan}</div>
  </div>
  <div className="photo-container__capel">Капельницы
  <div className="photo-container__capel-table">

<div className="photo-container__norm">Объем
<div>{props.card.postF.capel.vh}</div>
<div>{props.card.postS.capel.vh}</div>
<div>{props.card.postT.capel.vh}</div>
</div>
<div className="photo-container__norm">ЕС
<div>{props.card.postF.capel.Ec}</div>
<div>{props.card.postS.capel.Ec}</div>
<div>{props.card.postT.capel.Ec}</div>
</div>
<div className="photo-container__norm">pH
<div>{props.card.postF.capel.pH}</div>
<div>{props.card.postS.capel.pH}</div>
<div>{props.card.postT.capel.pH}</div>
</div>
  </div>
  </div>


  <div className="photo-container__capel">Дренаж
  <div className="photo-container__capel-table">
<div className="photo-container__norm">Объем
<div>{props.card.postF.dren.vh}</div>
<div>{props.card.postS.dren.vh}</div>
<div>{props.card.postT.dren.vh}</div>
</div>
<div className="photo-container__norm">ЕС
<div>{props.card.postF.dren.Ec}</div>
<div>{props.card.postS.dren.Ec}</div>
<div>{props.card.postT.dren.Ec}</div>
</div>
<div className="photo-container__norm">pH
<div>{props.card.postF.dren.pH}</div>
<div>{props.card.postS.dren.pH}</div>
<div>{props.card.postT.dren.pH}</div>
</div>
  </div></div>


  <div className="photo-container__capel">Мат
  <div className="photo-container__capel-table">
<div className="photo-container__norm">Объем
<div>{props.card.postF.mat.vh}</div>
<div>{props.card.postS.mat.vh}</div>
<div>{props.card.postT.mat.vh}</div>
</div>
<div className="photo-container__norm">ЕС
<div>{props.card.postF.mat.Ec}</div>
<div>{props.card.postS.mat.Ec}</div>
<div>{props.card.postT.mat.Ec}</div>
</div>
<div className="photo-container__norm">pH
<div>{props.card.postF.mat.pH}</div>
<div>{props.card.postS.mat.pH}</div>
<div>{props.card.postT.mat.pH}</div>
</div>
  </div>
  </div>
</div>
    
       
    </li> 
  );
}
export default Card;
