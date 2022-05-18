import { Authenticator, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';




const SecurityCheck = () => {
    return (
        <Authenticator>
            {({ signOut }) =>(
                <div className='App'>
                <div className="content">
                    <h1>Automated Security Checks</h1>
                    <h3>please insert your AWS credentials</h3>
                    <form noValidate autoComplete='off'>
                        <TextField 
                            label="AWS Access Key Id"
                            variant="outlined"
                            required
                        />
                       <TextField
                            label="AWS Secret access key"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="AWS session token"
                            variant="outlined"
                            required
                        />
                        <div className='content'>
                            <br></br>
                        <button>Submit</button>
                        </div>
                    </form>
                    <br></br>
                    <button onClick={signOut}>Sign Out</button>
                </div>
                </div>
            )}
        </Authenticator>
    );
};


export default SecurityCheck;