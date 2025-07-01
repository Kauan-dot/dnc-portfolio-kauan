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
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Box display="flex" flexDirection="column" gap={5} maxWidth="1000px">
          <StyledH1>Lorem ipsum dolor sit amet</StyledH1>
          <StyledH3 color="#BCBCBC">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </StyledH3>
          <StyledLinkButton href="#" target="_blank">
            Saber mais
          </StyledLinkButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
