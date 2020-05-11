import React from "react";
import { UserCard, UserName, UserLogin, UserBio, UserLocation, FollowerHeading, FollowerCard, FollowerLogin, FollowerURL, AllCard } from './Styles';

const User = (props) => {
    console.log(props)
    return (
        <AllCard>
            <UserCard key={props.user.id}>
                <UserName>{props.user.name}</UserName>
                <img src={props.user.avatar_url} alt="User" />
                <UserLogin>{props.user.login}</UserLogin>
                <UserBio>{props.user.bio}</UserBio>
                <UserLocation>{props.user.location}</UserLocation>
            </UserCard>

            <div>
                <FollowerHeading>Followers</FollowerHeading> 
            </div>            

            {props.followers.map(follower => (                
                <FollowerCard key={follower.id}>                                      
                    <img src={follower.avatar_url} alt="Follower"/>
                    <FollowerLogin>{follower.login}</FollowerLogin>
                    <FollowerURL>{follower.url}</FollowerURL>
                </FollowerCard>
            ))}
            
            {/* <div>
                <FollowerHeading>Following</FollowerHeading> 
            </div>            

            {props.following.map(follow => (                
                <FollowerCard>                                      
                    <img src={follow.avatar_url} alt="Follower"/>
                    <FollowerLogin>{follow.login}</FollowerLogin>
                    <FollowerURL>{follow.url}</FollowerURL>
                </FollowerCard>
            ))} */}
        </AllCard>
    )
}

export default User;