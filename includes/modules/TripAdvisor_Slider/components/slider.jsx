import React, { Component } from 'react';
import Review from './singleReview'
import Logo from './logo'
import Forwards from './forwards'
import Backwards from './backwards'
class Slider extends Component {
    // export default function Slider(props) {
    constructor(props) {
        super(props);
        this.state = { position: 0 };
        this.onClick = this.onClick.bind(this);
        this.backwardsStyle = { display: 'none' }
        this.forwardsStyle = { display: 'block' }
    }

    onClick(e) {
        // check if buttons should be visible
        if (this.state.position === 0) {
            this.setState({ backwardsStyle: { display: 'none' } });
        } else {
            this.setState({ backwardsStyle: { display: 'block' } });
        }



        /// move Forwards or backwards
        if (e.target.classList.contains("Forwards")) {
            // reveal backwards button when sliding forwards for the first time
            if (this.state.position === 0) {
                this.setState({ backwardsStyle: { display: 'block' } });
            }
            if (this.state.position === 3) {
                this.setState({ forwardsStyle: { display: 'none' } });
            }
            if (this.state.position < 4) {
                this.setState({ position: this.state.position + 1 });
            }
        } else {
            // hide back button if it's the previous review is the first one.
            if (this.state.position === 1) {
                this.setState({ backwardsStyle: { display: 'none' } });
            }
            if (this.state.position !== 0) {
                this.setState({ position: this.state.position - 1 });
                // always show forwards button when going backwards
                this.setState({ forwardsStyle: { display: 'block' } });
            }
        }

    }

    componentWillMount() {
        if (this.state.position === 0) {
            this.setState({ backwardsStyle: { display: 'none' } });
        }
    }

    render() {
        const forwards = [">"]
        const back = ["<"]

        const SliderPosition = {
            transform: `translateX(-${32 * this.state.position}vw)`
        }

        const reviews = this.props.content.reviews.map((e, index) => { return <Review key={index} reviewInfo={e}></Review> })
        return (

            <div className="SliderMainContainer" >

                <Backwards
                    style={this.state.backwardsStyle}
                    onClick={this.onClick.bind(this)}
                    className="Backwards">{back}
                </Backwards>

                <div
                    style={SliderPosition}
                    className="SliderSlidingContainer">
                    {reviews}
                </div>

                <Forwards
                    style={this.state.forwardsStyle}
                    onClick={this.onClick.bind(this)}
                    className="Forwards">{forwards}
                </Forwards>

                <Logo className="logo"></Logo>

            </div>
        )
    }
}
export default Slider;