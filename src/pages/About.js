import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const About = () => {
    return (
        <Authenticator>
            {({ signOut }) =>(
                <div>
                    <h1>This is the About Page</h1>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};


/*const About = () => {
    return <h1>This is the About Page</h1>
};*/

export default About;