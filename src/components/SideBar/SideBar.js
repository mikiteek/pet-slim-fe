import React, {Component} from "react";
import UserInfo from "../UserInfo";
import styles from "./SideBar.module.scss";

class SideBar extends Component {
  render() {
    const summaryRowHeaderStyles = [styles.summaryRowHeader, styles.summaryContent].join(" ");
    const summaryRowValueStyles = [styles.summaryValue, styles.summaryContent].join(" ");
    return (
      <div className={styles.sideBarBlock}>
        <div className={styles.sideBar}>
          <div className={styles.userInfoBlock}>
            <UserInfo/>
          </div>
          <div className={styles.summaryBlock}>
            <section className={styles.summaryDay}>
              <h3 className={styles.summaryDayTitle}>Сводка за 20.12.2020</h3>
              <table className={styles.summaryTable}>
                <tbody>
                <tr className={styles.summaryRow}>
                  <th className={summaryRowHeaderStyles}>Осталось</th>
                  <td className={summaryRowValueStyles}>120</td>
                </tr>
                <tr className={styles.summaryRow}>
                  <th className={summaryRowHeaderStyles}>Употреблено</th>
                  <td className={summaryRowValueStyles}>2250</td>
                </tr>
                <tr className={styles.summaryRow}>
                  <th className={summaryRowHeaderStyles}>Дневная норма</th>
                  <td className={summaryRowValueStyles}>2800</td>
                </tr>
                <tr className={styles.summaryRow}>
                  <th className={summaryRowHeaderStyles}>n% от нормы</th>
                  <td className={summaryRowValueStyles}>2800</td>
                </tr>
                </tbody>
              </table>
            </section>
            <section>
              <h3 className={styles.notAllowedProductsTitle}>Нерекомендуемые продукты</h3>
              <ul className={styles.notAllowedList}>
                <li className={styles.notAllowedListItem}>все бульены</li>
                <li className={styles.notAllowedListItem}>жирная рыба</li>
                <li className={styles.notAllowedListItem}>икра и мясо</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;