import { Container } from "./styles"
import { LeaderboardProps, LeaderboardType } from './interface';

export const Leaderboard = ({ leaderboard } : LeaderboardProps) => (
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
            <tr key={round.round}>
              <td>{round.result}</td>
              <td id="winner">
                {round.winner}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Container>
)