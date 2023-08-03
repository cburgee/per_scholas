import styles from "./HomePage.module.css"
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
function HomePage(props) {
  const { employeeListData } = props
  return (
    <section className={styles.content}>
      <Header headerText={props.headerText} />
      <SearchBar />
      <EmployeeList employeeListData={employeeListData} />
    </section>
  )
}

export default HomePage
