import { Container } from "./styles"
import { LeaderboardProps, LeaderboardType } from './interface';

export const Leaderboard = ({ leaderboard } : LeaderboardProps) => {

  return (
    <Container>
      <h2>Leaderboard</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Result</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((round : LeaderboardType , idx : number) => (
              <tr key={idx}>
                <td>{round.result}</td>
                <td>
                  {round.winner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}