import React, { Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{height:'100vh', backgroundColor:'pink'}}>
                <div className='h2'>QR Gift</div>
                <div className=''>You have Received a QR Gift! Choose one of the following methods to redeem your gift.</div>
            </div>
         );
    }
}
 
export default Welcome;