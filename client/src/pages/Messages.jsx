import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { getUsers } from '../api/index';
import { PodcastCard } from '../components/PodcastCard.jsx'
import { ChatNames } from '../components/ChatNames.jsx'

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
${({ box, theme }) => box && `
background-color: ${theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`}
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  &:hover{
    transition: 0.2s ease-in-out;
  }
`;
const Podcasts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
@media (max-width: 550px){
  justify-content: center;
}
`;
const Chat = styled.div`
flex: 5;
padding: 5px 20px;
padding-bottom: 200px;
height: 100%;
// width: 70%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`;
const UserDetails = styled.div`
display flex;
gap: 120px;
@media (max-width: 768px) {
    width: fit-content;
    flex-direction: column; 
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ButtonContainer = styled.div`
font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  width: 100%;
  max-width: 70px;
  padding: 8px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const ChatWrapper = styled.div`

padding: 20px 0px;
height: 100%;
// overflow-y: scroll;
display: flex;
flex-direction: row;
gap: 20px;
`;

const Messages = () => {
    const [user, setUser] = useState();
    const { currentUser } = useSelector(state => state.user);
    const [name, setName] = useState("");

    const token = localStorage.getItem("podstreamtoken");
    const getUser = async () => {
        await getUsers(token).then((res) => {
            setUser(res.data)
            setName(res.data.name);
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        if (currentUser) {
            getUser();
        }
    }, [currentUser])


    return (
        <ChatWrapper>
            <Chat>
                {currentUser &&
                    <FilterContainer box={true}>
                        <Topic>Your Uploads
                        </Topic>
                        <Podcasts>
                            {user?.podcasts.map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} />
                            ))}
                        </Podcasts>
                    </FilterContainer>

                }
                {/*             
                {currentUser && user?.podcasts.length === 0 &&
                    <FilterContainer box={true} >
                        <Topic>Your Uploads
                        </Topic>
                        <Container>
                            <ButtonContainer>Upload</ButtonContainer>
                        </Container> 
                    </FilterContainer>
                } 
                */}

                <FilterContainer box={true}>
                    <Topic>Your Favourites
                    </Topic>
                    <Podcasts>
                        {user && user?.favorits.map((podcast) => (
                            <PodcastCard podcast={podcast} user={user} />
                        ))}
                    </Podcasts>
                </FilterContainer>
                
            </Chat>

            <ChatNames user={user} >
            </ChatNames>
            
            
        </ChatWrapper>
    );
}

export default Messages;