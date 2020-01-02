import React, { Component } from 'react';
import Members from '../../containers/Members';
import Head from '../../containers/Head';
import Newsbar from '../../containers/Newsbar';
import Footer from '../../containers/Footer';
class Tab extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <Head />
                <Newsbar />
                <Members />
                <Footer />
            </div>
        );
    }
}

export default Tab;