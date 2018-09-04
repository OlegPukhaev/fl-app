import React from 'react';
// import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepOne extends React.Component {
  render() { 
    return (
<div class="step-1">
        <div class="skill-block skill-cat">
          <div class="skill-block-title">Choose  Your Skill Category</div>
          <div class="skill-block-list">
            <form>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-1" />
                <label for="cat-1">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-2" />
                <label for="cat-2">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-3" />
                <label for="cat-3">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-4" />
                <label for="cat-4">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-5" />
                <label for="cat-5">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-6" />
                <label for="cat-6">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-7" />
                <label for="cat-7">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-8" />
                <label for="cat-8">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-9" />
                <label for="cat-9">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div class="checkbox-block">
                <input type="checkbox" id="cat-10" />
                <label for="cat-10">
                  <span class="checkbox-circle">
                    <span class="icon icon-check-mark"></span>
                  </span>
                  <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
            </form>
          </div>
          <button type="button" class="btn btn-blue btn-bold step-2-toggler step-toggler">Next</button>
        </div>
      </div>        
    );
  }
}

export default SkillsStepOne;