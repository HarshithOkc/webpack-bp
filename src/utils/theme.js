import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c873b',
            contrastText: '#fff'
        },
        action: {
            disabled: '#fff',
            disabledBackground: '#e0e0e0',
        },
    },
    shape: {
        borderRadius: '24px'
    },
    typography: {
        button: {
            textTransform: 'none',
            fontSize: '16px',
        },
        fontFamily: 'sans-serif'
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: '#616161',
                '&$focused': {
                    color: '#333333'
                },
            },
            asterisk: {
                color: 'red'
            }
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: `1px solid #cdcdcd`
                },
                '&:after': {
                    borderBottom: `1px solid #333333`
                },
            }
        },
        MuiInputBase: {
            root: {
                paddingBottom: '7px'
            }
        },
        MuiButton: {
            root: {
                height: '48px',
                width: '100%'
            }
        },
        MuiFormLabel: {
            asterisk: {
                color: 'red'
            }
        },
        MuiPaper: {
            root: {
                margin: '0 !important',
                width: '100% !important',
                borderRadius: '10px !important'
            }
        }
    }
})