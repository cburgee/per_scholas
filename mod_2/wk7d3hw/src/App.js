import "./App.css"
import HomePage from "./components/HomePage"
import EmployeePage from "./components/EmployeePage"
const employeeListData = [
  {
    name: "James King",
    job: "President and CEO",
  },
  {
    name: "Julie Taylor",
    job: "VP of Marketing",
  },
  {
    name: "Eugene Lee",
    job: "CFO",
  },
  {
    name: "John Williams",
    job: "VP of Engineering",
  },
  {
    name: "Ray Moore",
    job: "VP of Sales",
  },
  {
    name: "Paul Jones",
    job: "QA Manager",
  },
]

const headerTextLeft = "Employee List"
const headerTextRight = "Employee"

function App() {
  return (
    <main className="App">
      <HomePage
        employeeListData={employeeListData}
        headerText={headerTextLeft}
      />
      <EmployeePage headerText={headerTextLeft} />
    </main>
  )
}

export default App
