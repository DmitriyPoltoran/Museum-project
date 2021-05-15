import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class TimeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { timetable: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.timetable({ date: '' });
    this.setState({ timetable: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <ul>
        <h1>Name</h1>
        {this.state.timetable.map((event) => <li>{event.name} </li>)}
        <h1>Data</h1>
        {this.state.timetable.map((event) => <li>  {event.date}</li>)}
        <h1>Price</h1>
        {this.state.timetable.map((event) => <li> {event.price}</li>)}
        <h1>Image</h1>
        {this.state.timetable.map((event) => <li> <img src={event.img} alt="" /></li>)} 
      </ul>
    </div>
  }
}

export default TimeTable;