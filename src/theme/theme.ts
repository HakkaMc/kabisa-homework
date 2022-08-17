import { blue, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

import { SxTheme } from '../types/mix'

export const WHITE_COLOR = '#fff'
const STRONG_DARK_BLUE_COLOR = '#081627'

export const DRAWER_WIDTH = 256

export const FOOTER_BG_COLOR = grey[400]
export const APP_CONTENT_BG_COLOR = grey[300]

const basicTheme = createTheme({
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  palette: {
    primary: {
      dark: blue[600],
      light: blue[400],
      main: blue[500],
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h5: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: 0.5,
    },
  },
})

const componentsTheme = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        height: 32,
        width: 32,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        '&:active': {
          boxShadow: 'none',
        },
        boxShadow: 'none',
      },
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgb(255,255,255,0.15)',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: STRONG_DARK_BLUE_COLOR,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: basicTheme.spacing(1),
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: '#4fc3f7',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        '& svg': {
          fontSize: 20,
        },
        color: 'inherit',
        marginRight: basicTheme.spacing(2),
        minWidth: 'auto',
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: 14,
        fontWeight: basicTheme.typography.fontWeightMedium,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        textTransform: 'none',
        [basicTheme.breakpoints.up('md')]: {
          minWidth: 0,
          padding: 0,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: basicTheme.palette.common.white,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        height: 3,
      },
      root: {
        marginLeft: basicTheme.spacing(1),
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 4,
      },
    },
  },
}

export const theme = {
  ...basicTheme,
  components: componentsTheme,
}

export const leftPanel: Record<string, SxTheme> = {
  navLink: {
    '&:hover, &:focus': {
      bgcolor: `rgba(255, 255, 255, 0.08)`,
    },
    color: `rgba(255, 255, 255, 0.7)`,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    px: 3,
    py: 1.5,
  },
}
