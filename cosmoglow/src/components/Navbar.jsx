import React from 'react' ;
import Logo2 from "../../Public/imgs/Logo2.png";
import { Link } from 'react-router-dom';
import {ShoppingCartOutlined} from "@mui/icons-material";
import { IconButton } from '@mui/material';
import StyledBadge from "@material-ui/core/Badge";
import { MdPerson, MdPersonOutline } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';




const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo2} alt=""/>
            </div>
            <div className='links'>
                <Link className='link' to="/Home"><h6>Home</h6></Link>
                <Link className='link' to="/Ourprod"><h6>Our Products</h6></Link>
                <Link className='link' to="/Login"><h6>Login</h6></Link>
                <Link className='link' to="/Register"><h6>Register</h6></Link>
                {/*hna mazal andir f blast fatimzahra icon ta3 main acc w nzid icon ta3 panier */}
                <span><Link className='link' to="/Cart">
                   <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </StyledBadge>
                   </IconButton>    
                </Link></span>
                <span><Link className='link' to="/Myacc">
                   <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="../../Public/imgs/f1.jpeg" />
                   </Stack>    
                </Link></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar