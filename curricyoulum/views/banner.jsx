import React from 'react';
import {render} from 'react-dom';

/**
 * The banner for the home page of the site
 */
class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = "banner_image">
                <img src="img/cornell_background_offset_cropped.jpg" />
                <div id = "inner_logo">
                    <img src="img/final_logo.png" />
                </div>
            </div>
        );
    }
}

export default Banner;