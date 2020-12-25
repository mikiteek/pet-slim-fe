import React, {Component} from "react";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import styles from "./DailyCaloriesIntake.module.scss";

class DailyCaloriesIntake extends Component {
  render() {
    const {summary: {notAllowedCategories, dayNormCalories}} = this.props;
    return (
      <div className={styles.section}>
        <section className={styles.dailySection}>
          <h2 className={styles.dailySectionTitle}>Ваша рекомендуемая суточная норма калорий составляет</h2>
          <div className={styles.dailySectionBlock}>
            {dayNormCalories &&
            <p className={styles.caloriesValue}>{dayNormCalories} <span className={styles.caloriesValueSpan}>ккал</span></p>
            }
            <h3 className={styles.productsListTitle}>Продукты, которые вам не рекомендуется употреблять</h3>
            {notAllowedCategories &&
            <ul>
              {notAllowedCategories.map((category, ind) => (
                <li key={category} className={styles.productsItem}>{ind + 1}. <span className={styles.productsItemCategory}>{category}</span></li>
              ))}
            </ul>
            }
          </div>
          <div className={styles.buttonSubmitBlock}>
            <button className={styles.buttonSubmit} type="button">Начать худеть</button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: userSelector.getSummary(state),
});

export default connect(mapStateToProps)(DailyCaloriesIntake);