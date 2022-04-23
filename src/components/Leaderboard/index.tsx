import { Container } from "./styles"

export const Leaderboard = ({ leaderboard }: any) => {

  return (
    <Container>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Result</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((round : any , idx : any) => (
            <tr key={idx}>
              <td>{round.result}</td>
              <td>
                {round.winner}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}