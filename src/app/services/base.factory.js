class BaseFactory {
  constructor(data) {
    // for (let [key, value] of Object.entries(data)) {
    //   this[key] = value;
    // }
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
         this[key] = data[key];
      }
    }
  }

  get id() { return this.recId; }

  postPayload() {
    throw Error('Method not implemented.');
  }

  putPayload() {
    throw Error('Method not implemented.');
  }

  getPayload(method = 'post') {
    return method === 'post' ? this.postPayload() : this.putPayload();
  }
}
