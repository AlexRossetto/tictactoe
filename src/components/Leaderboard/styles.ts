import styled from 'styled-components';


export const Container = styled.div`
  h2 {
    text-align: center;
    padding-bottom: .5rem;
  }

  div {
    max-height: 400px;
    overflow-y: scroll;
    padding: 1rem;
  
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }
  
    ::-webkit-scrollbar {
      width: 12px;
      background-color: #F5F5F5;
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
  }
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`