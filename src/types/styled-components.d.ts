// styled-components.d.ts
import 'styled-components'
import type { Theme } from './theme'

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
