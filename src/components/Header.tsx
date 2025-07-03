import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import { StyledLink, Icon } from './StyledLink'

function Header() {
  return (
    <Box
      component="header"
      sx={{
        mb: { xs: 8, md: 19 },
        height: '137px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 4, md: 4 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 25 }}
        >
          <StyledLink href="#projetos">Projetos</StyledLink>
          <StyledLink href="#sobre">Sobre mim</StyledLink>
        </Box>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={githubIcon} alt="GitHub" size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={linkedinIcon} alt="Linkedin" size={32} />
          </a>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
