import styled from 'styled-components'
import type { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 64)};
  font-weight: ${(props) => props.weight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineheight || 64)};

  @media (max-width: 1200px) {
    font-size: ${(props) => pxToRem((props.size || 64) * 0.8)};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => pxToRem((props.size || 64) * 0.6)};
  }
`
export const StyledH2 = styled.h2<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 42)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 50)};

  @media (max-width: 1400px) {
    font-size: ${(props) => pxToRem((props.size || 42) * 0.8)};
  }
`
export const StyledH3 = styled.h3<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 36)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 50)};

  @media (max-width: 1200px) {
    font-size: ${(props) => pxToRem((props.size || 36) * 0.8)};
    line-height: ${(props) => pxToRem((props.lineheight || 50) * 0.8)};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => pxToRem((props.size || 36) * 0.6)};
    line-height: ${(props) => pxToRem((props.lineheight || 50) * 0.6)};
  }
`

export const StyledP = styled.p<TypographiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 28)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineheight || 40)};
`
