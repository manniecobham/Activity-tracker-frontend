import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/about' style={{textDecoration:'none', color:'white',backgroundColor:'GrayText',width:'100%', padding:'3px'}}>About</Link>
        </footer>
    )
}

export default footer
