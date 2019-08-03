import React, { Component } from 'react';
import Navi from './components/Navbar'
import Jumbo from './components/Jumbotron';
import Info from './components/Info';
import Card from './components/Card'


class Home extends Component {

    render() {
        return(
            <React.Fragment>
                <Navi />
                <Jumbo />
                <Card />
                <Info />
            </React.Fragment>
        )
    }

}

export default Home;