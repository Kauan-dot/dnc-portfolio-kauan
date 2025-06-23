import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

function Header() {
  return (
    <Box
      component="header"
      sx={{
        height: '137px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 25 }}
        >
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre mim</a>
        </Box>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
