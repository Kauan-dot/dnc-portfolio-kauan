import { Box, Container, Grid } from '@mui/material'
import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledH1, StyledH3, StyledP } from './Typographies'
import { StyledLinkProject } from './StyledLink'
import useProjectsRepos from '@/hooks/useProjectsRepos'

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
    object-fit: contain;
    border-radius: ${pxToRem(8)};
  }
`

const getTechImage = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'javascript':
      return '/js.png'
    case 'html':
      return '/html.png'
    case 'css':
      return '/css.png'
    case 'typescript':
      return '/ts.png'
    case 'react':
      return '/react.png'
    default:
      return '/default.png'
  }
}

function Projects() {
  const { repos, loading } = useProjectsRepos('Kauan-dot')

  if (loading) return <p>Carregando...</p>

  return (
    <Box
      id="projetos"
      component="section"
      sx={{
        mb: { xs: 8, md: 16 },
        display: 'flex',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box display="flex" flexDirection="column" gap={10}>
          <StyledH1>Projetos</StyledH1>
          <Grid
            container
            ml={10}
            spacing={10}
            columns={{ xs: 2, sm: 4, md: 8 }}
          >
            {repos
              .filter((repo) => repo.homepage)
              .slice(0, 4)
              .map((repo) => (
                <Grid key={repo.id} size={{ xs: 2, sm: 4, md: 4 }}>
                  <StyledCard>
                    <img
                      src={getTechImage(repo.language)}
                      alt="Preview do projeto"
                    />
                    <StyledH3>{repo.name}</StyledH3>
                    <Box
                      mb={2}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      flex={1}
                      width="100%"
                    >
                      <StyledP>
                        {repo.description || 'Sem descrição disponível.'}
                      </StyledP>
                      <StyledLinkProject href={repo.homepage} target="_blank">
                        Clique aqui
                      </StyledLinkProject>
                    </Box>
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
