import styles from "./EmployeePage.module.css"
import Header from "./Header"
function EmployeePage() {
  return (
    <section className={styles.content}>
      <Header headerText="Employee" />
      <div>
        <ul>
          <li>
            <div>
              <h3>Julie Taylor</h3>
              <h5>VP of Marketing</h5>
            </div>
          </li>
          <li>
            <p>Call Office</p>
            <p>781-000-0002</p>
          </li>
          <li>
            <p>Call Mobile</p>
            <p>617-000-0002</p>
          </li>
          <li>
            <p>SMS</p>
            <p>617-000-0002</p>
          </li>
          <li>
            <p>Email</p>
            <p>jtaylor@fakemail.com</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default EmployeePage
