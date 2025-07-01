import { Box, Container, Grid } from '@mui/material'
import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledH1, StyledH3, StyledP } from './Typographies'
import { StyledLinkProject } from './StyledLink'

const StyledCard = styled.div`
  width: ${pxToRem(550)};
  height: ${pxToRem(700)};
  border-radius: 40px 0 40px 0;
  padding: ${pxToRem(25)};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 12px rgba(255, 255, 255, 1);
  gap: ${pxToRem(20)};

  img {
    width: ${pxToRem(500)};
    height: ${pxToRem(266)};
    border: 1px solid white;
    border-radius: ${pxToRem(8)};
  }
`

function Projects() {
  return (
    <Box
      id="projetos"
      component={'section'}
      sx={{
        mb: { xs: 8, md: 16 },
        height: '100%',
        display: 'flex',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box display="flex" flexDirection="column" gap={10}>
          <StyledH1>Projetos</StyledH1>
          <Grid
            container
            spacing={{ xs: 12, md: 15 }}
            columns={{ xs: 2, sm: 4, md: 8 }}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <StyledCard>
                  <img src="" alt="" />
                  <StyledH3>Projeto {index + 1}</StyledH3>
                  <StyledP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </StyledP>
                  <StyledLinkProject href="#" target="_blank">
                    Clique aqui
                  </StyledLinkProject>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Projects
