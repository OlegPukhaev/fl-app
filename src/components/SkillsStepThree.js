import React from 'react';
import {connect} from 'react-redux';
import { render , component} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';
import '../../node_modules/toastr/build/toastr.css';

class SkillsStepThree extends React.Component {
	constructor (props) {
		super(props);

		// console.log(this.props.data);
	}

  render() { 
    return (
        <div class="step-3">
            <div class="skill-subcat skill-subcat--item">
                <div class="flexbox justify-space-between">
                    <div class="skill-block">
                        <div class="skill-block-title">Math &amp; Science</div>
                        <div class="skill-block-list">
                            <form>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="math-1" checked />
                                    <label for="math-1">
                                        <span class="checkbox-circle">
                                            <span class="icon icon-check-mark"></span>
                                        </span>
                                        <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                                    </label>
                                </div>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="math-2" checked />
                                    <label for="math-2">
                                        <span class="checkbox-circle">
                                            <span class="icon icon-check-mark"></span>
                                        </span>
                                        <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                                    </label>
                                </div>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="math-3" checked />
                                    <label for="math-3">
                                        <span class="checkbox-circle">
                                            <span class="icon icon-check-mark"></span>
                                        </span>
                                        <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                                    </label>
                                </div>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="math-4" checked />
                                    <label for="math-4">
                                        <span class="checkbox-circle">
                                            <span class="icon icon-check-mark"></span>
                                        </span>
                                        <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                                    </label>
                                </div>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="math-5" checked />
                                    <label for="math-5">
                                        <span class="checkbox-circle">
                                            <span class="icon icon-check-mark"></span>
                                        </span>
                                        <span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
										Дата: {this.props.data}
                    <div class="skill-sub-block">
                        <div class="skill-block-title">Skills</div>
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
                <div class="skill-block-footer">
                    <a href="#">View More</a>
                    <a href="#">Edit</a>
                </div>
            </div>
            <div class="skill-subcat skill-subcat--item">
                <div class="flexbox justify-space-between">
                    <div class="skill-block">
                        <div class="skill-block-title">Biology</div>
                        <div class="skill-block-list">
                            <form>
                                <div class="checkbox-block">
                                    <input type="checkbox" id="biol-6" checked />
                                    <label for="biol-6">
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
                        <div class="skill-block-title">Skills</div>
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
                <div class="skill-block-footer">
                    <a href="#">View More</a>
                    <a href="#">Edit</a>
                </div>
            </div>

            <div class="skill-subcat skill-subcat--new">
                <div class="skill-block-title">New Skill Category</div>
                <div class="flexbox justify-space-between">
                    <div class="skill-block">
                        <form>
                            <div class="input-block">
                                Category
                                <input type="text" placeholder="Insert your new category here.." />
                            </div>
                        </form>
                    </div>
                    <div class="skill-block">
                        <form>
                            <div class="input-block">
                                Subcategory
                                <input type="text" placeholder="Insert your new subcategory here.." />
                            </div>
                        </form>
                    </div>
                    <div class="skill-sub-block">
                        <div class="skill-block-title">Skills</div>
                        <form class="form-group">
                            <input type="text" class="form-control" placeholder="Write new skill" />
                            <button class="add-btn btn btn-blue">
                                <span class="icon icon-add"></span>
                            </button>
                        </form>
                        <div class="skill-tags-block clearfix">
                            <div class="skill-tag">Math</div>
                            <div class="skill-tag">Trigonometry</div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-blue add-skill-btn">Add Skill Category</button>
            </div>

    </div>  
    );
  }
}

export default SkillsStepThree;