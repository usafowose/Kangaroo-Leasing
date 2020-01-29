import React from 'react';
import '../addresses.json';
import './components.css'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="location">Location?</label>
                    <select className="form-control form-control-sm">
                        <option>{props.option}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="price">Price?</label>
                    <input className="form-control form-control-sm"></input>
                </div>
                <div className="form-group">
                    <label for="rooms">Amount of Rooms?</label>
                    <input className="form-control form-control-sm"></input>
                </div>
                 <div className="form-group">
                    <label for="negotiable">Price Negotiable?</label>
                    <select className="form-control form-control-sm">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="pets">Pet Friendly?</label>
                    <select className="form-control form-control-sm">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <button type="button" class="btn btn-success">Filter</button>
            </form>
         </div>
    );
};

export default SearchForm;