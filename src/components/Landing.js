import React, { Component } from 'react'
import axios from 'axios';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Landing extends Component {

    state = {
        laptops: []
    }

    componentDidMount() {
        //View all products
        axios.get('https://cors-everywhere.herokuapp.com/https://v78n3a4r2b.execute-api.us-east-1.amazonaws.com/production/laptop-microservice')
        .then(res => {
            const laptops = res.data;
            this.setState( { laptops });
        })
    }

    render() {

        const client = {
            sandbox:    'AZIz87LMgYwwVzmWvfuX55FkbGksr0DCRMNEE66f1t0chYjs2Bja2v735iAPC2h9D31b91mhYCea6GqH'
        }

        return(
            <>
            {/* NavBar */}
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Kb HiFi
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
    
                    <ul className="navbar-nav ml-auto">

                    </ul>
                </div>
            </div>
        </nav>
            </div>
            {/* Navbar */}
            <div className="container">
            <div class="row">
            <h3><center>Presenting all of our laptops</center></h3><br></br>
            {this.state.laptops.map(laptop=> 
                        <>
                        <div className="card" style={{width : "18rem"}}>
                        <div className="card-body">
                            <img src={laptop.image} style={{width : "123px", height: "120px"}}/>
                            <p className="card-text"><strong>Model:</strong> {laptop.modelName}</p>
                            <p className="card-text"><strong>Price:</strong> AUD {laptop.price}</p>
                            <p className="card-text"><strong>Seller:</strong> {laptop.seller}</p>
                            <PaypalExpressBtn client={client} currency={'AUD'} total={laptop.price}/>
                        </div>
                        </div>
                        </>)}
            </div>
            </div>
            </>
        );
    }
}

export default Landing;
