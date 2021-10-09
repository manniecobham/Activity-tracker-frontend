import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/" style={{textDecoration:'none', backgroundColor: 'black',color:'gold'}}> <BiArrowBack style={{verticalAlign:'center'}}/> Back</Link>
        </div>
    )
}

export default About
