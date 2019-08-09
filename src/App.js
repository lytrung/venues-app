import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      venues:[
        {
          id: "4bc992e7b6c49c7401a28e91", 
          name: "Ken Yakitori", 
          address: Array(3), 
          category: "Japanese"
        },
        {
          id: "4b4d4133f964a52070cf26e3", 
          name: "Real Groovy", 
          address: Array(3), 
          category: "Record Shop"
        },
        {
          id: "4b53a56bf964a52013a627e3", 
          name: "Revel! Cafe", 
          address: Array(3), 
          category: "Café"
        }
      ]
    }
  }
  render(){
    return (
      <div className="app">
        <div className="container">
          <div className="venues">

            <div className="card venue">
              <div className="card-body">
                <h1 className="venue-name" data-toggle="modal" data-target="#venue-modal">The Store</h1>
                <p>5B Gore St</p>
                <p>Auckland</p>
                <p><span className="badge venue-type">Café</span></p>
              </div>
            </div>
            <div className="card venue">
              <div className="card-body">
                <h1 className="venue-name">The Store</h1>
                <p>5B Gore St</p>
                <p>Auckland</p>
                <p><span className="badge venue-type">Café</span></p>
              </div>
            </div>
            <div className="card venue">
              <div className="card-body">
                <h1 className="venue-name">The Store</h1>
                <p>5B Gore St</p>
                <p>Auckland</p>
                <p><span className="badge venue-type">Café</span></p>
              </div>
            </div> 
          </div> 

          <div className="venue-filters">
            
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <div role="group" className="btn-group btn-group-toggle">
                <label className="venue-filter btn active btn-primary">
                  <input name="venue-filter" type="radio" autoComplete="off" value="all"/>All
                </label>
                <label className="venue-filter btn btn-primary">
                  <input name="venue-filter" type="radio" autoComplete="off" value="food"/>Food
                </label>
                <label className="venue-filter btn btn-primary">
                  <input name="venue-filter" type="radio" autoComplete="off" value="drinks"/>Drinks
                </label>
                <label className="venue-filter btn btn-primary">
                  <input name="venue-filter" type="radio" autoComplete="off" value="others"/>Others
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="venue-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
       
              <div className="modal-body">

                <div className="venue-popup-body row">
                  <div className="col-6">
                    <h1 className="venue-name">The Store</h1>
                    <p>5B Gore St</p>
                    <p>Auckland</p>
                    <p><span className="badge venue-type">Café</span></p>
                  </div>
                  <div className="col-6">
                    <img src="https://fastly.4sqi.net/img/general/200x200/194220_nI7vTqtIFQncbe7Zgn_XLymzqM78Cx-aZ_gySunjz-M.jpg" className="img-fluid" alt="Responsive image"/>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
