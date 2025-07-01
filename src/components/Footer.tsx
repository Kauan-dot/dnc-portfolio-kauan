import { Box, Container } from '@mui/material'
import { StyledH2 } from './Typographies'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

function Footer() {
  return (
    <Box
      component="header"
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mb: { xs: 8, md: 17 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledH2>Meu contato:</StyledH2>
          <StyledH2>12 988888888</StyledH2>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledH2>Email:</StyledH2>
          <StyledH2>xxx@xyz.com</StyledH2>
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

export default Footer
