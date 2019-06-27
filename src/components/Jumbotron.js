import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const jumbostyle = {
  backgroundImage: `url(${require('./images/biancologo.bmp')})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}

const Jumbo = () => {
    return(

      <div>
      <Jumbotron fluid style={jumbostyle}>
        <Container fluid>
          <h1 className="display-3"></h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
    )
}

export default Jumbo;