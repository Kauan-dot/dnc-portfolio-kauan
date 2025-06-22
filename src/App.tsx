import githubIcon from './assets/github.svg'
import linkedinIcon from './assets/linkedin.svg'

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
        </ul>
        <div>
          <a href="#">
            <img src={githubIcon} />
          </a>
          <a href="#">
            <img src={linkedinIcon} />
          </a>
        </div>
      </header>
    </>
  )
}

export default App
