// External Dependencies
import React, { Component } from 'react';
import Slider from './components/slider.jsx'
// Internal Dependencies
import "./style.css";

const thisIsGoingToBeAPIData = {
  "reviews": [
    {
      Profile_image: "",
      Profile_name: "HM7",
      Profile_location: "London, United Kingdom",
      Profile_contributions: 49,
      Profile_helpFullVotes: 19,
      Review_date: "Feb 2020",
      Review_rating: 5,
      Review_title: "A tour with character",
      Review_ofWhatService: "3h Private walking tour, Copenhagen",
      Review_Text: "We had a wonderful time walking around the known and not so touristy places in Copenhagen. It was nice to not have a commercial style tour and we found it friendly, funny and knowledgeable. We would even like to try the biking tour too.",
      Review_date_of_experience: "February 2020"
    }, {
      Profile_image: "",
      Profile_name: "Krissu",
      Profile_location: "London, United Kingdom",
      Profile_contributions: 16,
      Profile_helpFullVotes: 3,
      Review_date: "Feb 2020",
      Review_rating: 5,
      Review_title: "An Absolute Must Do!!!",
      Review_ofWhatService: "3h walking tour, small group max 10 people Copenhagen",
      Review_Text: "I cannot say enough amazing things about this walking tour with Amitylux. Our guide was incredible and had so much local knowledge. She made it so outstanding. Our group was small so we were constantly asking questions and learned so much about Copenhagen, hygge, and the amazing people of this beautiful country. Thank you! :)",
      Review_date_of_experience: "February 2020"
    }, {
      Profile_image: "",
      Profile_name: "Kim Lykke Sommer",
      Profile_location: "Havdrup, Denmark",
      Profile_contributions: 13,
      Profile_helpFullVotes: 1,
      Review_date: "Feb 2020",
      Review_rating: 5,
      Review_title: "Great Tour Experience",
      Review_ofWhatService: "3h walking tour, small group max 10 people Copenhagen",
      Review_Text: "Had a great tour with our guide Mary today. It was a very small group which made it very personal and relaxed. We saw things that were off the usual touristy routes which was great and our guide had an excellent knowledge of Danish history and culture. I think this tour is excellent value for money and would highly recommend it!",
      Review_date_of_experience: "February 2020"
    }, {
      Profile_image: "",
      Profile_name: "SalMal",
      Profile_location: "",
      Profile_contributions: 11,
      Profile_helpFullVotes: 2,
      Review_date: "Nov 2019",
      Review_rating: 5,
      Review_title: "A really fascinating and friendly tour of Copenhagen!",
      Review_ofWhatService: "3h Private walking tour, Copenhagen",
      Review_text: "What a great tour we had!! Our guide was very friendly and knowledgeable and we enjoyed walking and chatting about the many different aspects of Copenhagen, including of course the famous Hygge We visited several places that are off the usual tourist trail and we also enjoyed tasting some typical Danish food and drink. I wish we had done the whole day tour as there is so much more to see. I would recommend this tour to anyone looking to learn about this capital city, its culture and traditions.",
      Review_date_of_experience: "February 2020"
    }, {
      Profile_image: "",
      Profile_name: "Egram1",
      Profile_location: "London, United Kingdom",
      Profile_contributions: 6,
      Profile_helpFullVotes: 2,
      Review_date: "Nov 2019",
      Review_rating: 5,
      Review_title: "Alex From Amitylux Gave Us a Great Tour",
      Review_ofWhatService: "3h Private walking tour, Copenhagen",
      Review_Text: "We had a wonderful walking tour of Copenhagen with Alex. He was very knowledgeable and kept us entertained with fun facts while guiding us to many of the city’s sites. We learned so much about the area and the country in this short but very expertly conducted tour. Thanks, Amitylux! 😊",
      Review_date_of_experience: "October 2019"
    }
  ]
}


class TripAdvisor_Slider extends Component {
  static slug = 'tripAdvisor_slider';
  render() {
    return (
      <Slider content={thisIsGoingToBeAPIData}></Slider>
    );
  }
}

export default TripAdvisor_Slider;