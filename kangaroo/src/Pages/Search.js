import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav';
import API from '../utils/API';
import {FormBtn} from '../Components/FormBtn';
import Parallax from '../Components/Parallax'

class Search extends React.Component{
    state = {
        listings: [],
        filters: [],
        location: "",
        price: "",
        rooms: "",
        moveIn: "",
        negotiable:"",
        pets:"",
        address: "",
        lease: "",
        sqft: "",
};

componentDidMount() {
     this.loadListings();
}

loadListings = () => {
    return API.getListings()
    .then(res => {
        this.setState({ 
            listings: res.data,
            filters: res.data.filter((thing, index, self) =>
                index === self.findIndex((t) => ( t.location === thing.location
                ))
          )
        })
    })
    .catch(err => console.log(err));
    }

  
filter = (location) => {
    API.getListing(location)
    .then(res => { 
        this.setState({ listings: res.data });
    })
    .catch(err => console.log(err));
};

render () {
    return (
        <div>
            <Parallax>
            <Nav />
            <Container>
                <Row>
                    <Column>              
                    <SearchForm
                        handleChange={(e) => this.filter(e.target.value)}
                    >
                    {this.state.filters.map(listing => <option>{listing.location}</option>)};
                    </SearchForm>               
                    </Column>
                    <Column>
                    {this.state.listings.map(listing => {
                        return (
                            <SearchResults 
                                location= {listing.location}
                                price= {listing.price}
                                rooms= {listing.rooms}
                                negotiable= {listing.toString()}
                                pets = {listing.petFriendly.toString()}
                                sqft = {listing.sqft}
                                lease = {listing.minLeaseByMonth}
                                address = {listing.address}
                                moveIn = {listing.dateAvailable}
                                link = {"/api/listings/" + listing._id}
                            />
                            );
                        })}
                    </Column>
                </Row>
            </Container>   
            </Parallax>    
        </div>
    );
};


}

export default Search;