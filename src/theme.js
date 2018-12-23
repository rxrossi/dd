import { css } from 'reakit'
import defaultTheme from 'reakit-theme-default'

const spacing = ['0.2rem', '0.4rem', '0.6rem', '0.8rem']

const theme = {
  ...defaultTheme,
  spacing,

  Button: css`
    ${defaultTheme.Button};
    margin: ${spacing[2]} ${spacing[1]};
  `,

  Field: css`
    ${defaultTheme.Field};
    margin: ${spacing[3]};
  `,

  Label: css`
    ${defaultTheme.Label};
    margin: ${spacing[2]} 0 0;
  `,

  Input: css`
    ${defaultTheme.Input};
    border: 2px solid ${defaultTheme.palette.primary[4]};
  `,

  Table: css`
    ${defaultTheme.Table};
    width: calc(calc(100% - ${spacing[3]}) - ${spacing[3]});
    margin: ${spacing[3]};
  `,
}

export default theme
