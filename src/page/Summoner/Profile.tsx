import React from 'react';

import { ILadderRank } from '../../modules/summoner/types';

import {
  ProfileContainer,
  ProfileImgContainer,
  ProfileImg,
  ProfileBorderImg,
  ProfileLevel,
  ProfileInfoContainer
} from './style';

interface ProfileProps {
  name: string;
  level: number;
  ladderRank: ILadderRank;
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
}

const Profile = (props: ProfileProps) => {
  const profileUrl = props.profileImageUrl
    ? props.profileImageUrl
    : props.profileBackgroundImageUrl;
  const ladderRank = props.ladderRank;

  return (
    <ProfileContainer>
      <ProfileImgContainer>
        <ProfileImg src={profileUrl} alt="프로필" />
        <ProfileBorderImg src={props.profileBorderImageUrl} alt="테두리" />
        <ProfileLevel>{props.level}</ProfileLevel>
      </ProfileImgContainer>
      <ProfileInfoContainer>
        <h1>{props.name}</h1>
        <p>
          레더 랭킹 {ladderRank.rank}위 (상위 {ladderRank.rankPercentOfTop}%)
        </p>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
