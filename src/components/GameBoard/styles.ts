import styled from 'styled-components';

export const Container = styled.div`
  border: 4px solid black;
	border-radius: 10px;
	width: 15rem;
	height: 15rem;
	margin: 0 auto;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`