import { Link } from "react-router-dom";

const OtherPage = () => {
    return (
        <div>
            I'm an other page ! 
            <Link to="/">Go back to the Homescreen</Link>
        </div>
    );
};

export default OtherPage;