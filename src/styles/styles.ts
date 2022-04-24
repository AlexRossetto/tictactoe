import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px; 
  height: 70vh;
`

export const BoardContainer = styled.section`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;

  div.results {
    margin-top: 2rem;
    width: 100%;

    p{
      text-align: center;
    }

    button {
      width: 100%;
      padding: 1 0.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: .25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: filter .2s;
      font-weight: 600;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }
`

export const LeaderboardContainer = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`



// margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   max-width: 300px; 
//   height: 100vh;
//   flex-direction: column;