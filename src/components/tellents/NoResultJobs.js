import React from 'react';
import '../../App.css';

class NoResultJobs extends React.Component {
  render() { 
    return (
      <div class="noresults noresults--jobs">
        <img src="images/jobs@2x.png" />
        <h2 class="blue-color">We didn’t find any job</h2>
        <p>Please try modifying your search to get more results.</p>
      </div>
    );
  }
}

export default NoResultJobs;