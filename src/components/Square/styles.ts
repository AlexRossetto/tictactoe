import styled from 'styled-components';

export const Button = styled.button`
  background: var(--blue-light);
	border: .125rem solid black;
	font-size: 1.875rem;
	font-weight: 800;
	cursor: pointer;
	outline: none;

  span {
    opacity: 0;
    transition: opacity .5s;
  }

  span.selected {
    {
      opacity: 1;
    }
  }
`