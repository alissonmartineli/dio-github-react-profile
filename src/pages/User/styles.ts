import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  > * {
    margin: 30px 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  > section {
    flex: 1;
  }
`

export const Content = styled.div`
  background: #333;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const NotFound = styled.h2`
  font-size: 1.2em;
  font-weight: medium;
`
