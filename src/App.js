import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App content-pre-line">
      <h1>Jogging diary</h1>
      <hr/>
      <div className="row">
      <div className="r1"><AppRecord /></div>
      <div className="r2"><Results /></div>

      </div>
    </div>
  );
}

const AppRecord = () => {
  return (
    <div>
      <h2>Add record</h2>
      <form className="">
          <label for="">Jogging date:</label>
          <br/>
          <input type="text" placeholder="mm/dd/yyyy"/>
          <br/>
          <label for="">Distance (m)</label>
          <br/>
          <input type="text" placeholder="0"/>
          <br/>
          <label for="">Time (s)</label>
          <br/>
          <input type="text" placeholder="0"/>
          <br/>
          <input className="btn" type="submit" value="Save"/>
      </form>
    </div>
  );
}

const Results = () => {
  return (
    <div>
      <h2>My results</h2>
      <input className="btn" type="submit" value="New"/>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Distance in meters</th>
            <th>Time</th>
            <th>Average speed</th>
            <th>Options</th>
          </tr>
          <tr>
            <td>2018-04-11</td>
            <td>5,000.00</td>
            <td>42:40</td>
            <td>7.20</td>
            <td>Edit Delete</td>
          </tr>
          <tr>
            <td>2018-04-03</td>
            <td>3,000.00</td>
            <td>13:20</td>
            <td>13.50</td>
            <td>Edit Delete</td>
          </tr>
          <tr>
            <td>2018-04-02</td>
            <td>5,000.00</td>
            <td>35:00</td>
            <td>8.57</td>
            <td>Edit Delete</td>
          </tr>
          <tr>
            <td>2018-03-28</td>
            <td>1,000.00</td>
            <td>10:00</td>
            <td>6.00</td>
            <td>Edit Delete</td>
          </tr>
          <tr>
            <td>2018-03-27</td>
            <td>1,200.00</td>
            <td>12:00</td>
            <td>6.00</td>
            <td>Edit Delete</td>
          </tr>
          <tr>
            <td>2018-03-26</td>
            <td>1,300.00</td>
            <td>13:30</td>
            <td>6.24</td>
            <td>Edit Delete</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
