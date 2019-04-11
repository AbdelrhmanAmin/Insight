import React, { Component } from 'react';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Content from '../../containers/Content';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Article from '../../containers/Article';
import Pillars from '../../containers/Pillars';
import Innercontent from '../../containers/Innercontent';
import Footer from '../../containers/Footer';
class Video extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <Head />
                <Newsbar />
                <Innercontent />
                <Footer />
            </div>
        );
    }
}

export default Video;