import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
 

function AddPlacePopup(props) {
  const { isOpen, onClose, onUpdateCard } = props;
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [year, setYear] = React.useState("");
  const [otdel, setOtdel] = React.useState("");

  const [postFcapelvh, setPostFcapelVh] = React.useState("");
  const [postFcapelEc, setPostFcapelEc] = React.useState("");
  const [postFcapelPh, setPostFcapelPh] = React.useState("");
  const [postFdrenvh, setPostFdrenVh] = React.useState("");
  const [postFdrenEc, setPostFdrenEc] = React.useState("");
  const [postFdrenPh, setPostFdrenPh] = React.useState("");
  const [postFmatvh, setPostFmatVh] = React.useState("");
  const [postFmatEc, setPostFmatEc] = React.useState("");
  const [postFmatPh, setPostFmatPh] = React.useState("");

  const [postScapelvh, setPostScapelVh] = React.useState("");
  const [postScapelEc, setPostScapelEc] = React.useState("");
  const [postScapelPh, setPostScapelPh] = React.useState("");
  const [postSdrenvh, setPostSdrenVh] = React.useState("");
  const [postSdrenEc, setPostSdrenEc] = React.useState("");
  const [postSdrenPh, setPostSdrenPh] = React.useState("");
  const [postSmatvh, setPostSmatVh] = React.useState("");
  const [postSmatEc, setPostSmatEc] = React.useState("");
  const [postSmatPh, setPostSmatPh] = React.useState("");

  const [postTcapelvh, setPostTcapelVh] = React.useState("");
  const [postTcapelEc, setPostTcapelEc] = React.useState("");
  const [postTcapelPh, setPostTcapelPh] = React.useState("");
  const [postTdrenvh, setPostTdrenVh] = React.useState("");
  const [postTdrenEc, setPostTdrenEc] = React.useState("");
  const [postTdrenPh, setPostTdrenPh] = React.useState("");
  const [postTmatvh, setPostTmatVh] = React.useState("");
  const [postTmatEc, setPostTmatEc] = React.useState("");
  const [postTmatPh, setPostTmatPh] = React.useState("");
  
   

  function nameChange(e) {
    setName(e.target.value);
  }
  function dateChange(e) {
     
    setDate(e.target.value);
  }
  function otdelChange(e) {
    setOtdel(e.target.value);
  }
  function yearsChange(e) {
    setYear(e.target.value);
  }

  function postFcapelvhChange(e) {
    setPostFcapelVh(e.target.value);
  }
  function postFcapelEcChange(e) {
    setPostFcapelEc(e.target.value);
  }
  function postFcapelPhChange(e) {
    setPostFcapelPh(e.target.value);
  }
  function postFdrenvhChange(e) {
    setPostFdrenVh(e.target.value);
  }
  function postFdrenEcChange(e) {
    setPostFdrenEc(e.target.value);
  }
  function postFdrenPhChange(e) {
    setPostFdrenPh(e.target.value);
  }
  function postFmatvhChange(e) {
    setPostFmatVh(e.target.value);
  }
  function postFmatEcChange(e) {
    setPostFmatEc(e.target.value);
  }
  function postFmatPhChange(e) {
    setPostFmatPh(e.target.value);
  }



  function postScapelvhChange(e) {
    setPostScapelVh(e.target.value);
  }
  function postScapelEcChange(e) {
    setPostScapelEc(e.target.value);
  }
  function postScapelPhChange(e) {
    setPostScapelPh(e.target.value);
  }
  function postSdrenvhChange(e) {
    setPostSdrenVh(e.target.value);
  }
  function postSdrenEcChange(e) {
    setPostSdrenEc(e.target.value);
  }
  function postSdrenPhChange(e) {
    setPostSdrenPh(e.target.value);
  }
  function postSmatvhChange(e) {
    setPostSmatVh(e.target.value);
  }
  function postSmatEcChange(e) {
    setPostSmatEc(e.target.value);
  }
  function postSmatPhChange(e) {
    setPostSmatPh(e.target.value);
  }


  function postTcapelvhChange(e) {
    setPostTcapelVh(e.target.value);
  }
  function postTcapelEcChange(e) {
    setPostTcapelEc(e.target.value);
  }
  function postTcapelPhChange(e) {
    setPostTcapelPh(e.target.value);
  }
  function postTdrenvhChange(e) {
    setPostTdrenVh(e.target.value);
  }
  function postTdrenEcChange(e) {
    setPostTdrenEc(e.target.value);
  }
  function postTdrenPhChange(e) {
    setPostTdrenPh(e.target.value);
  }
  function postTmatvhChange(e) {
    setPostTmatVh(e.target.value);
  }
  function postTmatEcChange(e) {
    setPostTmatEc(e.target.value);
  }
  function postTmatPhChange(e) {
    setPostTmatPh(e.target.value);
  }


  


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onUpdateCard({
      name,
      date, 
      otdel,
      year,
      postFcapelvh,
      postFcapelEc,
      postFcapelPh,
      postFdrenvh,
      postFdrenEc,
      postFdrenPh,
      postFmatvh,
      postFmatEc,
      postFmatPh,
      postScapelvh,
      postScapelEc,
      postScapelPh,
      postSdrenvh,
      postSdrenEc,
      postSdrenPh,
      postSmatvh,
      postSmatEc,
      postSmatPh,
      postTcapelvh,
      postTcapelEc,
      postTcapelPh,
      postTdrenvh,
      postTdrenEc,
      postTdrenPh,
      postTmatvh,
      postTmatEc,
      postTmatPh,
    });
    setName("");
    setDate("");
    setOtdel("");
    setYear("");
    setPostFcapelVh("");
    setPostFcapelEc("");
    setPostFcapelPh("");
    setPostFdrenVh("");
    setPostFdrenEc("");
    setPostFdrenPh("");
    setPostFmatVh("");
    setPostFmatEc("");
    setPostFmatPh("");
    setPostScapelVh("");
    setPostScapelEc("");
    setPostScapelPh("");
    setPostSdrenVh("");
    setPostSdrenEc("");
    setPostSdrenPh("");
    setPostSmatVh("");
    setPostSmatEc("");
    setPostSmatPh("");
    setPostTcapelVh("");
    setPostTcapelEc("");
    setPostTcapelPh("");
    setPostTdrenVh("");
    setPostTdrenEc("");
    setPostTdrenPh("");
    setPostTmatVh("");
    setPostTmatEc("");
    setPostTmatPh("");
  }

  const [time, setTime] = useState(new Date());
     
  function refreshClock() {
  setTime(new Date());
  }
  useEffect(() => {
  const timerId = setInterval(refreshClock, 1000);
  return function cleanup() {
  clearInterval(timerId);
  };
  }, []);

   
    return(
    <PopupWithForm
        name="add"
        title="Новая карта"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText="Сохранить"
      >
        <h2 className="popup__title">Новая карта</h2>
        <div className="photo-container__date">
        <input
          className="popup__input-date"
          id="card-input"
          name="inputFormName"
          type="text"
          maxLength="30"
          minLength="2"
          placeholder="Доктор"
          onChange={nameChange}
          value={name}
          
          required
        />
        <span className="popup__error" id="card-input-error"></span>

        <input
          className="popup__input-date"
          id="card-input"
          name="inputFormName"
          type="Text"           
          placeholder={time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          onChange={dateChange}
          value={date}
          defaultValue={time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          required
        />
        <span className="popup__error" id="card-input-error"></span>
        <select  className="popup__input-date" value={otdel} onChange={otdelChange}>
            <option value="">Ваш отдел</option>
            <option value="1.1">1.1</option>
            <option value="1.2">1.2</option>
            <option value="1.3">1.3</option>
            <option value="1.4">1.4</option>
          </select>
         
        <input
          className="popup__input-date"
          id="card-input"
          name="inputFormName"
          type="Date"
          placeholder="Укажите дату"
          onChange={yearsChange}
          value={year}
          required
        />
        <span className="popup__error" id="card-input-error"></span>
        </div>
        <div className="photo-container__table">
        <div className="photo-container__clapan">
        <div className="photo-container__clapan-name"> Клапаны</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
        </div>

        <div className="photo-container__capel">Капельницы
  <div className="photo-container__capel-table">

<div className="photo-container__norm">Объем
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFcapelvhChange} value={postFcapelvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postScapelvhChange} value={postScapelvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTcapelvhChange} value={postTcapelvh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">ЕС
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFcapelEcChange} value={postFcapelEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postScapelEcChange} value={postScapelEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTcapelEcChange} value={postTcapelEc} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">pH
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFcapelPhChange} value={postFcapelPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postScapelPhChange} value={postScapelPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTcapelPhChange} value={postTcapelPh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

</div>
  </div>
  <div className="photo-container__capel">Дренаж
  <div className="photo-container__capel-table">

<div className="photo-container__norm">Объем
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFdrenvhChange} value={postFdrenvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSdrenvhChange} value={postSdrenvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTdrenvhChange} value={postTdrenvh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">ЕС
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFdrenEcChange} value={postFdrenEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSdrenEcChange} value={postSdrenEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTdrenEcChange} value={postTdrenEc} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">pH
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFdrenPhChange} value={postFdrenPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSdrenPhChange} value={postSdrenPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTdrenPhChange} value={postTdrenPh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

</div>
  </div>
  <div className="photo-container__capel">Мат
  <div className="photo-container__capel-table">

<div className="photo-container__norm">Объем
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFmatvhChange} value={postFmatvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSmatvhChange} value={postSmatvh} required />
      <span className="popup__error" id="card-input-error"></span>
      <input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTmatvhChange} value={postTmatvh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">ЕС
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFmatEcChange} value={postFmatEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSmatEcChange} value={postSmatEc} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTmatEcChange} value={postTmatEc} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

<div className="photo-container__norm">pH
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postFmatPhChange} value={postFmatPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postSmatPhChange} value={postSmatPh} required />
      <span className="popup__error" id="card-input-error"></span>
<input className="popup__input" id="card-input" name="inputFormName" type="number" placeholder="0" onChange={postTmatPhChange} value={postTmatPh} required />
      <span className="popup__error" id="card-input-error"></span>
</div>

</div>
  </div>
  </div>
 
      </PopupWithForm>)
}
export default AddPlacePopup;