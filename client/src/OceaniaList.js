import React, { Component } from 'react';

import './App.css';

class OceaniaList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            cdata: [ ]
        };
    }
    //mounts function
    componentDidMount() {
        this.loadCountryData();
    }
    //fetches api data from url and saves it in json format
    loadCountryData = () => {
        fetch("https://restcountries.eu/rest/v2/region/americas")
            .then(cdata => cdata.json())
            .then(countryData => this.setState({cdata:countryData}))
    };
    //renders data onto webpage
    render() {
        //variable created to call in for loop
        var element;

        let countryList = this.state.cdata.map(
            (country) => {
                //variable created to help count languages
                var total=0;
                //for loop to loop through total number of languages for each country
                for(element in country.languages){
                    total++
                }
                return(
                    <div>
                        {/*returns sections from api model for each country to be rendered on the webpage*/}
                        <img className="imageSmaller" src={country.flag} alt={country.name + "'s Flag"}/>
                        <h3>Name: {country.name}({country.alpha2Code})</h3>
                        <p>Capital: {country.capital}</p>
                        <p>Total Langauges: {total}</p>

                    </div>
                )
            }
        );
        return(
            <div>
                <h1>Oceania</h1>
                {/*displays items in a grid format*/}
                <div className='grid'>
                    {/*calls countryList variable to display data map*/}
                    {countryList}
                </div>
            </div>
        );
    }
}

export default OceaniaList;