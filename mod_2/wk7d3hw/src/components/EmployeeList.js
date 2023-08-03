import EmployeeListItem from "./EmployeeListItem"
import styles from "./EmployeeList.module.css"
function EmployeeList(props) {
  const { employeeListData } = props
  console.log(employeeListData)
  return employeeListData.map((employeeListData) => (
    <div className={styles.content}>
      <EmployeeListItem employeeListData={employeeListData} />
    </div>
  ))
}

export default EmployeeList
