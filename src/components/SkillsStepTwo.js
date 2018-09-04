import React from 'react';
// import {connect} from 'react-redux';
// import { render , component} from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepTwo extends React.Component {
  render() { 
    return (
<div class="step-2">
<div class="skill-subcat">
    <div class="flexbox justify-space-between">
        <div class="skill-block">
            <div class="skill-block-title">Math &amp; Science</div>
            <div class="skill-block-list">
                <form>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-1" />
                        <label for="math-1">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-2" />
                        <label for="math-2">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-3" />
                        <label for="math-3">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-4" />
                        <label for="math-4">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-5" />
                        <label for="math-5">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-6" />
                        <label for="math-6">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-7" />
                        <label for="math-7">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-8" />
                        <label for="math-8">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-9" />
                        <label for="math-9">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="math-10" />
                        <label for="math-10">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div class="skill-sub-block">
            <form class="form-group">
                <input type="text" class="form-control" placeholder="Write new skill" />
                <button class="add-btn btn btn-blue">
                    <span class="icon icon-add"></span>
                </button>
            </form>
            <div class="skill-tags-block clearfix">
                <div class="skill-tag">Math</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Math</div>
            </div>
        </div>
    </div>
</div>
<div class="skill-subcat">
    <div class="flexbox justify-space-between">
        <div class="skill-block">
            <div class="skill-block-title">Biology</div>
            <div class="skill-block-list">
                <form>
                    <div class="checkbox-block">
                        <input type="checkbox" id="biol-6" />
                        <label for="biol-6">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                    <div class="checkbox-block">
                        <input type="checkbox" id="biol-7" />
                        <label for="biol-7">
                            <span class="checkbox-circle">
                                <span class="icon icon-check-mark"></span>
                            </span>
                            <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div class="skill-sub-block">
            <form class="form-group">
                <input type="text" class="form-control" placeholder="Write new skill" />
                <button class="add-btn btn btn-blue">
                    <span class="icon icon-add"></span>
                </button>
            </form>
            <div class="skill-tags-block clearfix">
                <div class="skill-tag">Math</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Trigonometry</div>
                <div class="skill-tag">Calculus</div>
                <div class="skill-tag">Math</div>
            </div>
        </div>
    </div>
</div>
</div>       
    );
  }
}

export default SkillsStepTwo;
