import { Box, Container } from '@mui/material'
import { StyledH1, StyledH3 } from './Typographies'
import { StyledLinkButton } from './StyledLink'

function Hero() {
  return (
    <Box
      component={'section'}
      sx={{
        mb: { xs: 8, md: 19 },
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'start' },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box
          display="flex"
          flexDirection="column"
          gap={5}
          maxWidth="1000px"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <StyledH1>Olá, eu sou Kauan — desenvolvedor Front-end</StyledH1>
          <StyledH3 color="#BCBCBC">
            Veja alguns dos meus projetos desenvolvidos com foco em performance,
            responsividade e boas práticas de código.
          </StyledH3>
          <StyledLinkButton href="#sobre">Saber mais</StyledLinkButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
