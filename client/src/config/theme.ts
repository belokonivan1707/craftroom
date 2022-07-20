import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

// Converted rgba to rgb on white background
const palette = {
    primary: {
        light: '#FFAB91', // rgba(255, 87, 34, 0.5)
        main: '#FF5722',
        dark: '#FF8159',
        contrastText: '#FFF'
    },
    secondary: {
        light: '#4f5b62',
        main: blueGrey[900],
        dark: '#000a12',
        contrastText: '#ffffff'
    },
    background: {
        default: '#fafbfc',
        dark: 'rgb(38, 50, 56)',
        transparent: 'rgba(194, 224, 255, 0.08)',
        border: 'rgba(194, 224, 255, 0.08);'
    },
    text: {
        primary: '#5C5C5C',
        secondary: '#8C8C8C'
    },
    action: {
        disabled: '#DDDD'
    },
    common: {
        white: '#FFF'
    },
    custom: {
        divider: 'rgb(0, 0, 0, 0.12)'
    },
    divider: 'rgba(0, 0, 0, 0.1)'
};

// A theme with custom primary and secondary color.
// It's optional.
export const MuiTheme = createTheme({
    palette,
    typography: {
        fontSize: 14,
        htmlFontSize: 16,
        // fontFamily: 'Ubuntu, Railway, Helvetica Neue',
        body1: {
            fontWeight: 'normal'
        },
        h6: {
            fontWeight: 'normal',
            fontSize: 18
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'standard'
            }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&.Mui-disabled': {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 20
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                paddingCheckbox: {
                    padding: '0 12px'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: palette.text.primary
                }
            }
        }
    }
});
