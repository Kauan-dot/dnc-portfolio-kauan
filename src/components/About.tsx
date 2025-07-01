import { Box, Container } from '@mui/material'
import { StyledH1, StyledP } from './Typographies'

function About() {
  return (
    <Box
      id="sobre"
      component={'section'}
      sx={{
        mb: { xs: 8, md: 16 },
        height: '100%',
        display: 'flex',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledH1>Sobre mim</StyledH1>
          <StyledP>
            Olá, meu nome é <strong>Kauan</strong>, sou um desenvolvedor
            front-end apaixonado por criar experiências digitais incríveis. Com
            uma sólida formação em desenvolvimento web, estou sempre em busca de
            novos desafios e oportunidades para aprimorar minhas habilidades.
          </StyledP>
        </Box>
      </Container>
    </Box>
  )
}

export default About
