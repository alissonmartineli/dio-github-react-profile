import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: #333;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -10px;

  > * {
    margin: 0 10px;
  }
`

export const Name = styled.h2`
  font-size: 1.2em;
  margin-bottom: 5px;
`

export const Url = styled.a`
  color: blue;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-bottom: 1px solid #666;
`

export const Stats = styled.ul`
  list-style: none;

  > li {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    > span:last-child {
      font-size: 1.2em;
      color: #999;
    }
  }
`

export const Joined = styled.div`
  > p:first-child {
    font-size: 0.8em;
    margin-bottom: 5px;
  }

  > p:last-child {
    color: #999;
    margin-bottom: 20px;
  }
`

export const Location = styled.div`
  > p:first-child {
    font-size: 0.8em;
    margin-bottom: 5px;
  }

  > p:last-child {
    color: #999;
    margin-bottom: 20px;
  }
`

export const Updated = styled.div`
  color: #999;
`

export const Link = styled.a`
  color: blue;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;

  :after {
    content: '';
    display: block;
    transition: width 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
`
