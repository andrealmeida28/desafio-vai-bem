import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            textAlign: "left",
            paddingLeft: "10px",
            '&:hover': {
                cursor: "pointer",
            },
        },
        titleLogedOut: {
            flexGrow: 1,
            textAlign: "left",
            paddingLeft: "10px",
            '&:hover': {
                cursor: "pointer",
            },
        },
        menu: {
            flexGrow: 1,
            textAlign: "left",
            paddingLeft: "50px",
            fontSize: "14px"
        },
        menuItem: {
            paddingLeft: "20px",
            '&:hover': {
                color: "white",
            },
            color: "white"
        },
        logo: {
            width: "7%",
            height: "auto",
            '&:hover': {
                cursor: "pointer",
            },
        },
    }),
);

export default useStyles;