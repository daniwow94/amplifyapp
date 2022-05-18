import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Results = () => {
    return (
        <Authenticator>
            {({ signOut }) =>(
                <div>
                    <h1>Home page v2</h1>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};


/*const Home = () => {
    return <h1>Home page v2</h1>
};*/

export default Results;