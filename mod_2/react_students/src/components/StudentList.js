import styles from "./StudentList.module.css"
import StudentItem from "./StudentItem"
export default function StudentList(props) {
  const { studentList } = props
  return (
    <div>
      <ul className={styles.content}>
        {studentList.map((student) => (
          <StudentItem key={student.name} student={student} />
        ))}
      </ul>
    </div>
  )
}
