import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop : "14%",
        },
        textField: {
            width : "90%",
        },
    }),
);

export default useStyles;