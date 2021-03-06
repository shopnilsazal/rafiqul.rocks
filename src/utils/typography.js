import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    boxShadow: 'none',
    backgroundImage: 'none',
    textShadow: 'none',
  },
})

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const rhythm = typography.rhythm

export default typography
