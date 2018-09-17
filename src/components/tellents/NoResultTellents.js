import React from 'react';
import '../../App.css';

class NoResultTellents extends React.Component {
  render() { 
    return (
      <div class="noresults noresults--tallents">
        <img src="images/tallents@2x.png" />
        <h2 class="blue-color">We didn’t find anybody</h2>
        <p>Please try modifying your search to get more results.</p>
      </div>
    );
  }
}

export default NoResultTellents;