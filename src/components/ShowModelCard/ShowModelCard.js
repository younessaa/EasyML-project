import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import styles from './ShowModelCard.module.css';
import { BsFillArrowDownCircleFill as IconDown} from "react-icons/bs";
import { BsFillArrowUpCircleFill as IconUp} from "react-icons/bs";
import { BsFillArrowRightCircleFill as IconRight} from "react-icons/bs";
import { Link } from 'react-router-dom';
import rfrImage from '../../assets/images/rfr-daigramme.png';

 
export default class ShowModelCard extends Component {

  state = {
    height: 800,
    iconDown: true,
  };
 
  toggle = () => {
    const { height, iconDown } = this.state;
 
    this.setState({
      height: height === 800 ? 'auto' : 800,
      iconDown: !iconDown,
    });
  };
 
  render() {
    const { height, iconDown } = this.state;
 
    return (
      <div className='text-center position-relative mb-4'>
        <AnimateHeight
          id='example-panel'
          duration={ 500 }
          height={ height } // see props documentation below
        >
            <div className='container-md p-2'>
                <div className={styles.modelDetails}>
                    <h2 className={styles.modelTitle}>Random Forest Regression</h2>
                    <p className={styles.modelDesc}>
                        <br /><strong>Random Forest Regression</strong><br /> is a supervised learning algorithm that uses ensemble learning method for regression. Ensemble learning method is a technique that combines predictions from multiple machine learning algorithms to make a more accurate prediction than a single model.
                    </p>
                    <img className={styles.modelImg} src={rfrImage}/>
                    <p className={styles.modelDesc}>
                        The diagram above shows the structure of a Random Forest. You can notice that the trees run in parallel with no interaction amongst them. A Random Forest operates by constructing several decision trees during training time and outputting the mean of the classes as the prediction of all the trees. To get a better understanding of the Random Forest algorithm, let’s walk through the steps:
                        <ol>
                            <li>Pick at random k data points from the training set</li>
                            <li>Build a decision tree associated to these k data points.</li>
                            <li>Choose the number N of trees you want to build and repeat steps 1 and 2.</li>
                            <li>For a new data point, make each one of your N-tree trees predict the value of y for the data point in question and assign the new data point to the average across all of the predicted y values.</li>

                        </ol>
                        A Random Forest Regression model is powerful and accurate. It usually performs great on many problems, including features with non-linear relationships. Disadvantages, however, include the following: there is no interpretability, overfitting may easily occur, we must choose the number of trees to include in the model.
                    </p>
                </div>
            </div>
        </AnimateHeight>
        <button className={styles.readMore} onClick={this.toggle}>{iconDown ? "Read more" : "Close"} {iconDown ? <IconDown /> : <IconUp />}</button>
        <Link className={styles.exploitNow} to={`/models`}>Exploit now <IconRight /></Link>
      </div>
    );
  }
}