import EmployeeList from "./EmployeeList"
import styles from "./EmployeeListItem.module.css"
function EmployeeListItem(props) {
  const { employeeListData } = props
  return (
    <div className={styles.content}>
      <h3>{employeeListData.name}</h3>
      <h6>{employeeListData.job}</h6>
    </div>
  )
}

export default EmployeeListItem
