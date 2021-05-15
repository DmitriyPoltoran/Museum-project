import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class PhotoTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { photo: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.photo({ date: '' });
    this.setState({ photo: response });
  }


  render() {
  return <div>
    <div class="container">
      <div class="AppPhoto">
      {this.state.photo.map((event) => <p> <img src={event.img1} alt="" /></p>)} 
      {this.state.photo.map((event) => <p>{event.date}</p>)}
      {this.state.photo.map((event) => <p> <b>{event.name1}</b></p>)}
      <button className="btn" onClick={this.handleReload}>Reload</button>
      </div>
      <div class="AppPhoto">
      {this.state.photo.map((event) => <p> <img src={event.img2} alt="" /></p>)} 
      {this.state.photo.map((event) => <p>{event.date}</p>)}
      {this.state.photo.map((event) => <p> <b>{event.name2}</b></p>)}
      <button className="btn" onClick={this.handleReload}>Reload</button>
      </div>
      <div class="AppPhoto">
      {this.state.photo.map((event) => <p> <img src={event.img3} alt="" /></p>)} 
      {this.state.photo.map((event) => <p>{event.date}</p>)}
      {this.state.photo.map((event) => <p> <b>{event.name3}</b></p>)}
      <button className="btn" onClick={this.handleReload}>Reload</button>
      </div>
      <div class="AppPhoto">
      {this.state.photo.map((event) => <p> <img src={event.img4} alt="" /></p>)} 
      {this.state.photo.map((event) => <p>{event.date}</p>)}
      {this.state.photo.map((event) => <p> <b>{event.name4}</b></p>)}
      <button className="btn" onClick={this.handleReload}>Reload</button>
      </div>
      <div class="AppPhoto">
      {this.state.photo.map((event) => <p> <img src={event.img5} alt="" /></p>)} 
      {this.state.photo.map((event) => <p>{event.date}</p>)}
      {this.state.photo.map((event) => <p> <b>{event.name5}</b></p>)}
      <button className="btn" onClick={this.handleReload}>Reload</button>
      </div>
      </div>
    </div>
  }
}
export default PhotoTable;