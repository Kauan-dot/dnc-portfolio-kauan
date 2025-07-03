import styled from 'styled-components'
import type { DefaultTheme } from 'styled-components'
import type { StyledButtonProps } from '../types/styledButton'
import { pxToRem } from '@/utils'

export const StyledLink = styled.a<
  { theme?: DefaultTheme } & StyledButtonProps
>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => pxToRem(props.size || 30)};
  font-weight: ${(props) => props.weight || 500};

  &:hover {
    color: ${(props) => props.theme.buttons.primaryHover};
  }
`
export const Icon = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
`

export const StyledLinkButton = styled.a<
  { theme?: DefaultTheme } & StyledButtonProps
>`
  width: fit-content;
  background: ${(props) => props.theme.buttons.primary};
  color: ${(props) => props.theme.buttons.primaryColor};
  padding: ${(props) =>
    `${pxToRem(props.padding?.paddingY ?? 19)} ${pxToRem(props.padding?.paddingX ?? 55)}`};
  border-radius: ${(props) => pxToRem(props.borderRadius || 83)};
  font-weight: ${(props) => props.weight || 600};
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.buttons.primaryHover};
    transform: translateY(${pxToRem(5)});
  }
`

export const StyledLinkProject = styled.a<
  { theme?: DefaultTheme } & StyledButtonProps
>`
  width: fit-content;
  background: ${(props) => props.theme.buttons.primary};
  color: ${(props) => props.theme.buttons.primaryColor};
  padding: ${(props) =>
    `${pxToRem(props.padding?.paddingY ?? 15)} ${pxToRem(props.padding?.paddingX ?? 31)}`};
  border-radius: ${(props) => pxToRem(props.borderRadius || 83)};
  font-weight: ${(props) => props.weight || 600};
  align-self: flex-start;
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.buttons.primaryHover};
    transform: translateX(${pxToRem(5)});
  }
`
