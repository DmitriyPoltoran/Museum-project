import React from 'react';
import * as Api from 'typescript-fetch-api'
const api = new Api.DefaultApi()
class SouvenirsTable extends React.Component {
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
      <div>
      <h1>Image of exibition</h1>
        <div class="items">
        {this.state.timetable.map((event) => <p> <img src={event.img} alt="" /></p>)}
        </div> 
        <h1>Name of exibition</h1>
        <div class="items">
        {this.state.timetable.map((event) => <p>{event.name} </p>)}
        </div>
        <h1>Data of exibition</h1>
        <div class="items">
        {this.state.timetable.map((event) => <p>  {event.date}</p>)}
        </div>
    </div>
    </div>
  }
}
export default SouvenirsTable;