import React from 'react';
import API from '../utils/API'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserListing extends React.Component{

state={
    createdlisting: [],
    location: "",
    price: "",
    rooms: "",
    sqft: "",
    negotiable: "",
    petFriendly: "",
    dateAvailable: "",
    minLeaseByMonth: 0,
    address: "",
    messages: [],
    propertyDetails: "",
    image: "",
    show: false,
    fullName: "",
    email: "",
    phoneNumber: "",
    id:"",
}

componentDidMount = () => {}

completeListing = () => {}

logOut = () => {}

postListing = (e) => {
    e.preventDefault();
    API.createListing({
        location: this.state.location,
        price: this.state.price,
        rooms: this.state.rooms,
        sqft: this.state.sqft,
        negotiable: this.state.negotiable,
        petFriendly: this.state.petFriendly,
        dateAvailable: this.state.dateAvailable,
        minLeaseByMonth: this.state.minLeaseByMonth,
        address: this.state.address,
        propertyDetails: this.state.propertyDetails,
        image: this.state.image,
    })
    .then(res => {
              this.setState({ createdlisting: res.data });
            })
    .catch(err => console.log(err));
    console.log("Listing added!!")  
}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value)
  };


render () {
    return (
        <div>
                 <Form>
                <Form.Group controlId="name">
                  <Form.Label>Listing Location:</Form.Label>
                    <Form.Control
                    type="text" 
                    name="location"
                    placeholder="Atlanta"  
                    onChange={this.handleInputChange} 
                    value={this.state.location}/>
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="price"
                    placeholder="750" 
                    onChange={this.handleInputChange} 
                    value={this.state.price}/>
                </Form.Group>
                <Form.Group controlId="rooms">
                    <Form.Label>Amount of rooms available:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="rooms"
                    placeholder="750" 
                    onChange={this.handleInputChange} 
                    value={this.state.rooms}/>
                </Form.Group>
                <Form.Group controlId="sqft">
                    <Form.Label>Square Feet:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="sqft"
                    placeholder="650"
                    onChange={this.handleInputChange} 
                    value={this.state.sqft} />
                </Form.Group>
                <Form.Group controlId="negotiable">
                    <Form.Label>Is this price negotiable?</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="negotiable"
                    placeholder="Yes"
                    onChange={this.handleInputChange} 
                    value={this.state.negotiable} />
                </Form.Group>
                <Form.Group controlId="petFriendly">
                    <Form.Label>Can the tenant have pets?</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="petFriendly"
                    placeholder="Yes"
                    onChange={this.handleInputChange} 
                    value={this.state.petFriendly} />
                </Form.Group>
                <Form.Group controlId="dateAvailable">
                    <Form.Label>Available Move in Date:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="dateAvailable"
                    placeholder="February 11th, 2020"
                    onChange={this.handleInputChange} 
                    value={this.state.dateAvailable} />
                </Form.Group>
                <Form.Group controlId="minLeaseByMonth">
                    <Form.Label>Minimum amount of months for lease:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="minLeaseByMonth"
                    placeholder="February 11th, 2020"
                    onChange={this.handleInputChange} 
                    value={this.state.minLeaseByMonth} />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="address"
                    placeholder="12345 Anywhere Ln Atlanta, GA 55555"
                    onChange={this.handleInputChange} 
                    value={this.state.address} />
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Image Url:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="image"
                    placeholder="https://...imageurl"
                    onChange={this.handleInputChange} 
                    value={this.state.image} />
                </Form.Group>
                <Form.Group controlId="propertyDetails">
                    <Form.Label>Property Details:</Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows="5" 
                    name="propertyDetails" 
                    onChange={this.handleInputChange} 
                    value={this.state.propertyDetails} />
                </Form.Group>
                    <Button variant="primary" type="submit"
                    disabled={!(this.state.location)}
                    onClick={this.postListing}>
                        Submit
                     </Button>
            </Form>
            
        </div>
    );
};

}

export default UserListing;