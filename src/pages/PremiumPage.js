import { Authenticator, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { TextField } from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function Create() {
    const classes = useStyles()


const PremiumPage = () => {
    return (
        <Authenticator>
            {({ signOut }) =>(
                <div>
                    <h1>Hello, welcome to my Website</h1>
                    <h3>You are authenticated!! This is the premium content page!!</h3>
                    <form noValidate autoComplete='off'>
                        <TextField 
                            className={classes.field}
                            label="AWS Access Key Id"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </form>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};
};

export default PremiumPage;