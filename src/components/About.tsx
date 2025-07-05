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
        textAlign: { xs: 'center', md: 'start' },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box display="flex" flexDirection="column" gap={10}>
          <StyledH1>Sobre mim</StyledH1>
          <StyledP>
            Atualmente estou iniciando minha trajetória no desenvolvimento web,
            estudando tecnologias como <strong>HTML</strong>,{' '}
            <strong>CSS</strong>, <strong>JavaScript</strong> e{' '}
            <strong>React</strong>. Tenho aplicado meus aprendizados em projetos
            práticos, sempre buscando evoluir e me preparar para o mercado de
            trabalho. <br />
            Tenho facilidade para aprender, gosto de resolver problemas e estou
            em busca da minha primeira oportunidade profissional como
            desenvolvedor.
          </StyledP>
        </Box>
      </Container>
    </Box>
  )
}

export default About
