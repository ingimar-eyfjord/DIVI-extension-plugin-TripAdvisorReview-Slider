import React from 'react';
import Review from './singleReview'
export default function Slider(props) {
    console.log(props)
    const reviews = props.content.reviews.map((e, index) => { return <Review key={index} reviewInfo={e}></Review> })

    const forwards = [">"]
    const back = ["<"]

    // const [position, setPosition] = React.useState(0)
    function moveBackwards() {
        // if (position === 0) {
        //     const number = position
        //     setPosition(number + 1)
        // }
    }
    function MoveForwards() {
        // if (position === 0) {
        //     const number = position
        //     setPosition(number + 1)
        // }
    }

    const SliderPosition = {
        // transform: `translateX(${33.3 * position}vw)`
    }

    return (
        <div className="SliderMainContainer">
            <h2 onClick={moveBackwards} className="Backwards">{back}</h2>
            <div style={SliderPosition} className="SliderSlidingContainer">
                {reviews}
            </div>
            <h2 onClick={MoveForwards} className="Forwards">{forwards}</h2>
        </div>
    )
}