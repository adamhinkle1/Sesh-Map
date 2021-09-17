import React from 'react';
import ImageCard from './ImageCard';
import Cards from './Cards';
import './PlaceToVisit.css'

export default function PlaceToVisit() {

  return (
    <div className="place-to-visit">
      <div className="places_section1">
        <div className="places_section1_text">
          <h1>Explore Your Area</h1>
          <p> Discover new locations to play your favorite sports.
            Wherever you go, Sesh Map is here to help make sure you find all
            the best spots. 
            <br /><br />
            Don't see your favorite spot on the map? 
            <br /><br />
            Upload it for others to find out about it. Sesh Map allows users to 
            crowdsource information about their favorite sports locations.
          </p>
        </div>
        <div className="places_section1_images">
          <ImageCard place={Cards[0]} />
          <br /><br />
          <ImageCard place={Cards[1]} />
        </div>
      </div>
      <div className="places_section2">
        <div className="places_section2_text">
          <h1>Play Harder</h1>
          <p>
            Headed to a different city, but you don't know any good skateboard spots?
            <br /><br />
            Head to our discover page to find new locations, see pictures, and even read reviews left by 
            other users.
            <br /><br />
            Before you go, check out our sports specific blog --&gt; The Board. 
            Interact with the community to share tips and tricks or just some banter.

          </p>
        </div>
        <div className="places_section2_images">
          <ImageCard place={Cards[2]} />
          <br /><br />
          <ImageCard place={Cards[3]} />
        </div>

      </div>
    </div>
  );
}
