import styled from 'styled-components'

const Header = styled.div`
  background-color: #0f1624;
  padding: 20px;
  color: white;

  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      margin: 0 10px;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

function App() {
  return (
    <>
      <Header>
        <ul>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
        </ul>
      </Header>
    </>
  )
}

export default App
