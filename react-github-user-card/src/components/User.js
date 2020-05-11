import React from "react";
import { UserCard, UserName, UserLogin, UserBio, UserLocation, FollowerHeading, FollowerCard, FollowerLogin, FollowerURL } from './Styles';

const User = (props) => {
    console.log(props)
    return (
        <>
            <UserCard>
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
                <FollowerCard className="followers">                                      
                    <img src={follower.avatar_url} alt="Follower"/>
                    <FollowerLogin>{follower.login}</FollowerLogin>
                    <FollowerURL>{follower.url}</FollowerURL>
                </FollowerCard>
            ))}
        </>
    )
}

export default User;