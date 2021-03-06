import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import userSelector from "../../redux/user/userSelector";
import styles from "./DailyCaloriesIntake.module.scss";

class DailyCaloriesIntake extends Component {
  handleClickBtn = () => {
    const {history, isAuthorized} = this.props;
    if (isAuthorized) {
      history.push("/diary");
      return;
    }
    history.push("/login");
  }

  render() {
    const {summary: {notAllowedCategories, dayNormCalories}} = this.props;
    return (
      <div className={styles.section}>
        {notAllowedCategories && <section className={styles.dailySection}>
          <h2 className={styles.dailySectionTitle}>Ваша рекомендуемая суточная норма калорий составляет</h2>
          <div className={styles.dailySectionBlock}>
            <p className={styles.caloriesValue}>{dayNormCalories} <span className={styles.caloriesValueSpan}>ккал</span></p>
            <h3 className={styles.productsListTitle}>Продукты, которые вам не рекомендуется употреблять</h3>
            <ul>
              {notAllowedCategories.map((category, ind) => (
                <li key={category} className={styles.productsItem}>{ind + 1}. <span
                  className={styles.productsItemCategory}>{category}</span></li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonSubmitBlock}>
            <button className={styles.buttonSubmit} type="button" onClick={this.handleClickBtn}>Начать худеть</button>
          </div>
        </section>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: userSelector.getSummary(state),
  isAuthorized: userSelector.getToken(state),
});

export default connect(mapStateToProps)(withRouter(DailyCaloriesIntake));