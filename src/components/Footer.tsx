import { Box, Container } from '@mui/material'
import { StyledH2 } from './Typographies'
import { Icon } from './StyledLink'
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
        maxWidth="xl"
        sx={{
          mb: { xs: 8, md: 17 },
          px: { xs: 2, sm: 4, md: 8 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledH2>Meu contato:</StyledH2>
          <StyledH2>11 933647997</StyledH2>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledH2>Email:</StyledH2>
          <StyledH2>kauanaffonso115@gmail.com</StyledH2>
        </Box>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={githubIcon} alt="GitHub" size={72} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={linkedinIcon} alt="Linkedin" size={72} />
          </a>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
