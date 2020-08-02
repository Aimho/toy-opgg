import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background-color: #eaeaea;
`;

export const HeaderContainer = styled.header`
  padding: 12px calc((100% - 1000px) / 2);
  padding-top: 53px;
  background-color: #1ea1f7;
  .search-summoner {
    margin-left: auto;
  }
`;

export const BasicContainer = styled.section`
  padding: 12px calc((100% - 1000px + 42px) / 2);
  padding-top: 15px;
  border-bottom: solid 1px #d8d8d8;
`;

export const PreviousTierContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PreviousTier = styled.span`
  display: block;
  margin: 0 6px;
  padding: 4px 5px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  color: #657070;
  font-size: 11px;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileImgContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ProfileBorderImg = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ProfileLevel = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  width: 44px;
  height: 24px;
  color: #eabd56;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background: url(${require('../../assets/icons/bg-levelbox.png')}) no-repeat;
`;

export const ProfileInfoContainer = styled.div`
  padding: 8px 18px;
  h1 {
    color: #242929;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4px;
  }
  p {
    color: #657070;
    font-size: 11px;
  }
`;

export const DetailContainer = styled.section`
  max-width: 1000px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

export const MostContainer = styled.aside`
  width: 100%;
  max-width: 300px;
`;

export const RankCardContainer = styled.div`
  padding: 10px 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
`;

export const RankImg = styled.span`
  display: block;
  width: 104px;
  height: 104px;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center;
  &.solo {
    background-size: contain;
  }
  &.team {
    background-size: 64px 64px;
  }
`;

export const RankInfo = styled.span`
  display: block;
  font-size: 12px;
  color: #879292;
  p {
    color: inherit;
    margin-bottom: 4px;
    line-height: 1.43;
    &.title {
      font-size: 11px;
    }
    b {
      color: #353a3a;
    }
  }
  h5 {
    color: #1f8ecd;
    font-size: 15px;
    margin-bottom: 6px;
  }
`;

export const MatchesContainer = styled.div`
  max-width: 690px;
`;
