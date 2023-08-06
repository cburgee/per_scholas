export default function ScoresItem(props) {
  const { score } = props
  return (
    <div>
      <h4>Date: {score.date}</h4>
      <h3>Score: {score.score}</h3>
    </div>
  )
}
