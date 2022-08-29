// import original module declarations
import 'styled-components';
import theme, { ThemeInterface } from './index';

// Extend all theme object keys
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
