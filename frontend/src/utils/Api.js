class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/forms`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCard({
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
  })
   {
    return fetch(`${this._baseUrl}/forms`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
       name: name,
       date: date,
       otdel: otdel,
       year: year,
       postF: {
        clapan: 1,
        capel: { vh: postFcapelvh, Ec: postFcapelEc, pH: postFcapelPh },
        dren: { vh:postFdrenvh, Ec:postFdrenEc, pH: postFdrenPh },
        mat: { vh: postFmatvh, Ec: postFmatEc, pH: postFmatPh },
      },
      postS: {
        clapan: 2,
        capel: { vh: postScapelvh, Ec: postScapelEc, pH: postScapelPh },
        dren: { vh:postSdrenvh, Ec:postSdrenEc, pH: postSdrenPh },
        mat: { vh: postSmatvh, Ec: postSmatEc, pH: postSmatPh },
      },
      postT: {
        clapan: 3,
        capel: { vh: postTcapelvh, Ec: postTcapelEc, pH: postTcapelPh },
        dren: { vh:postTdrenvh, Ec:postTdrenEc, pH: postTdrenPh },
        mat: { vh: postTmatvh, Ec: postTmatEc, pH: postTmatPh },
      },
        
      }),
    }).then(this._checkResponse);
  }
  /* removeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers

        })
            .then(this._checkResponse)
    }
    
     */
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

export default api;
