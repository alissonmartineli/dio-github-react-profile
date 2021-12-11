import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`

export const Input = styled.input`
  display: flex;
  width: 300px;
  align-items: center;
  padding: 0 10px;
  background: transparent;
  color: #fff;
  border: 1px solid #666;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  box-sizing: border-box;
  height: 40px;
  transition: border-color 0.5s;
  margin-left: 3px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: blue;
  border: 0;
  padding: 0 30px;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  height: 40px;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
