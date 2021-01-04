import React, {Component} from "react";
import {connect} from "react-redux";
import userOperations from "../../redux/user/userOperations";
import userSelector from "../../redux/user/userSelector";
import userActions from "../../redux/user/userActions";
import toggleComponentsActions from "../../redux/toggleComponents/toggleComponentsActions";
import styles from "./DailyCaloriesNorm.module.scss";

class DailyCaloriesNorm extends Component {
  state = {
    height: "170",
    age: "31",
    currentWeight: "70",
    targetWeight: "65",
    bloodType: "2"
  }

  componentWillUnmount() {
    this.resetState();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {state, props: {onGetSummary, onAddSelfSummary, onToggleModalWindow}} = this;
    onAddSelfSummary(state);
    onGetSummary(state);
    onToggleModalWindow();
  }

  resetState = () => {
    this.setState({
      height: "",
      age: "",
      currentWeight: "",
      targetWeight: "",
      bloodType: "",
    });
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  handleRadioBtnChange = (event) => {
    this.setState({bloodType: event.target.value});
  }

  render() {
    const {height, age, currentWeight, targetWeight, bloodType} = this.state;
    const dailyBlockStyles = ["container", styles.dailyCaloriesBlock].join(" ");
    return (
      <div className={dailyBlockStyles}>
        <h2 className={styles.titleForm}>{this.props.title}</h2>
        <form className={styles.form} type="post" onSubmit={this.handleSubmit}>
          <div className={styles.inputBlock}>
            <div className={styles.inputBlockSide}>
              <input className={styles.formInput} type="number" name="height"
                     onChange={this.handleChange} value={height}
                     placeholder="Рост *" required min="100"
              />
              <input className={styles.formInput} type="number" name="age"
                     onChange={this.handleChange} value={age}
                     placeholder="Возраст *" required min="12"
              />
              <input className={styles.formInput} type="number" name="currentWeight"
                     onChange={this.handleChange} value={currentWeight}
                     placeholder="Текущий вес *" required
              />
            </div>
            <div className={styles.inputBlockSide}>
              <input className={styles.formInput} type="number" name="targetWeight"
                     onChange={this.handleChange} value={targetWeight}
                     placeholder="Желаемый вес *" required
              />
              <span className={styles.groupBloodTitle}>Группа крови</span>
              <ul className={styles.radioBtnList}>
                <li>
                  <input className={styles.radioBtn} type="radio" id="group-1"
                         onChange={this.handleRadioBtnChange} value={1}
                         placeholder="Группа крови *" required checked={bloodType === "1"}
                  />
                  <label htmlFor="group-1" className={styles.radioBtnLabel}>1</label>
                </li>
                <li>
                  <input className={styles.radioBtn} type="radio" id="group-2"
                         onChange={this.handleRadioBtnChange} value={2}
                         placeholder="Группа крови *" required checked={bloodType === "2"}
                  />
                  <label htmlFor="group-2" className={styles.radioBtnLabel}>2</label>
                </li>
                <li>
                  <input className={styles.radioBtn} type="radio" id="group-3"
                         onChange={this.handleRadioBtnChange} value={3}
                         placeholder="Группа крови *" required checked={bloodType === "3"}
                  />
                  <label htmlFor="group-3" className={styles.radioBtnLabel}>3</label>
                </li>
                <li>
                  <input className={styles.radioBtn} type="radio" id="group-4"
                         onChange={this.handleRadioBtnChange} value={4}
                         placeholder="Группа крови *" required checked={bloodType === "4"}
                  />
                  <label htmlFor="group-4" className={styles.radioBtnLabel}>4</label>
                </li>
              </ul>
            </div>

          </div>
          <div className={styles.buttonSubmitBlock}>
            <button className={styles.buttonSubmit} type="submit">Похудеть</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: userSelector.getSummary(state),
});

const mapDispatchToProps = {
  onAddSelfSummary: userActions.addSelfSummary,
  onGetSummary: userOperations.getSummary,
  onToggleModalWindow: toggleComponentsActions.toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyCaloriesNorm);