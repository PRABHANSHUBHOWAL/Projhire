import React,{useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/userSlice";
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import LogoIcon from '../Images/Logo.png';
import { openSignin } from '../redux/setSigninSlice';

const MenuContainer = styled.div`
  flex: 2;
  margin-right: 20px;
  flex-direction: column;
  height: 85vh;
  width: 80%;
  border-radius: 6px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px){
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    transition: 0.1s ease-in-out;
  }
`;
const Elements = styled.div`
padding: 4px 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: flex-start;
align-items: center;
gap: 12px;
cursor: pointer;
color:  ${({ theme }) => theme.text_secondary};
width: 100%;
&:hover{
    background-color: ${({ theme }) => theme.text_secondary + 50};
}
`;
const NavText = styled.div`
padding: 5px 0px;
`;
const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary + 50};
margin: 4px 0px;
`;
const Flex = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
padding: 0px 16px;
width: 86%;
`;
const Close = styled.div`
display: none;
@media (max-width: 1100px) {
  display: block;

}
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: cursive;
  font-weight: bold;
  font-size: 24px;
  margin: 16px 0px;
`;
const Image = styled.img`
  height: 30px;
`;
const Topic = styled.div`
  padding: 6px 16px; 
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Chatname = styled.div`
//   padding: 3px 0px; 
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid  ${({ theme }) => theme.text_secondary + 20};
`;
export const ChatNames = ({ user, setMenuOpen }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);
    const logoutUser = () => {
        dispatch(logout());
        navigate(`/`);
    };
    
    return (
        <>
        <MenuContainer setMenuOpen={setMenuOpen}>
            <>
                <Topic>Messages</Topic>
                <Close>
                    <CloseRounded onClick={() => setMenuOpen(false)} style={{ cursor: "pointer" }} />
                </Close>
            </>
            <HR/>

                
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                    {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                <Chatname to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                    <Elements>
                    <Avatar
                    src={currentUser.img} style={{ width: '26px', height: '26px' }}>{currentUser.name?.charAt(0).toUpperCase()}
                    </Avatar>
                        {currentUser.name}
                    </Elements>
                </Chatname>
                
            
            {/* <Link to='/search' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <SearchRoundedIcon />
                    <NavText>Search</NavText>
                </Elements>
            </Link>
            {
                currentUser ?
                    <Link to='/favourites' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <FavoriteRoundedIcon />
                            <NavText>Favourites</NavText>
                        </Elements>
                    </Link >
                    :
                    <Link onClick={() =>
                        dispatch(
                            openSignin()
                        )
                    } style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <FavoriteRoundedIcon />
                            <NavText>Favourites</NavText>
                        </Elements>
                    </Link >
            }
            <Link onClick={() => {
                if (currentUser) {
                    setUploadOpen(true)
                } else {
                    dispatch(
                        openSignin()
                    )
                }
            }} style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <BackupRoundedIcon />
                    <NavText>Upload</NavText>
                </Elements>
            </Link>

            {
                currentUser ?
                    <Link to='/messages' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <ChatIcon />
                            <NavText>Messages</NavText>
                        </Elements>
                    </Link >
                    :
                    <Link onClick={() =>
                        dispatch(
                            openSignin()
                        )
                    } style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                        <Elements>
                            <ChatIcon />
                            <NavText>Messages</NavText>
                        </Elements>
                    </Link >
            }
 */}

        </MenuContainer >
        </>
    )
}

