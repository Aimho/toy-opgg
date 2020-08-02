import styled, { StyledProps } from 'styled-components';

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
  margin: auto;
  padding-top: 10px;
  padding-bottom: 300px;
  display: flex;
  justify-content: space-between;
`;

export const MostContainer = styled.aside`
  width: 100%;
  max-width: 300px;
  > div + div {
    margin-top: 8px;
  }
`;

export const RankCardContainer = styled.div`
  padding: 10px 8px;
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

export const WinRateContainer = styled.div`
  border: solid 1px #cdd2d2;
`;

export const WinRateTabContainer = styled.span`
  display: flex;
  button {
    width: 50%;
    padding: 15px 24px;
    color: #879292;
    font-size: 12px;
    background-color: #f2f2f2;
    border-bottom: solid 1px #cdd2d2;
    &.active {
      color: #5e5e5e;
      font-weight: bold;
      background-color: transparent;
      border-bottom: 0px;
    }
    & + button {
      border-left: solid 1px #cdd2d2;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 17px;
  &:not(:last-child) {
    border-bottom: solid 1px #cdd2d2;
  }
  .champion-img {
    border-radius: 50%;
    margin-right: 10px;
  }
  h5 {
    text-align: inherit;
    color: inherit;
    font-size: 13px;
  }
`;
export const ChampionsCardContainer = styled(CardContainer)`
  padding: 4px 15px;
  .champion-img {
    width: 45px;
    height: 45px;
  }
  .name {
    max-width: 65px;
    color: #5e5e5e;
    margin-right: auto;
  }
  .kda {
    text-align: center;
  }
  .rate {
    margin-left: 24px;
    text-align: center;
    color: #5e5e5e;
    &.max {
      color: #c6443e;
    }
  }
  h5 {
    margin-bottom: 3px;
  }
  p {
    font-size: 11px;
    color: #879292;
  }
`;
export const RecentWinRateCardContainer = styled(CardContainer).attrs(
  (props: StyledProps<{ winRate: number }>) => ({
    winRate: props.winRate ? props.winRate : 100
  })
)`
  padding: 8px 15px;
  .champion-img {
    width: 32px;
    height: 32px;
  }
  h5 {
    &.name {
      color: #5e5e5e;
      margin-right: auto;
      max-width: 65px;
    }
    &.rate {
      color: #879292;
      margin-right: 12px;
    }
  }
  .rate-bar {
    min-width: 120px;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    border-radius: 4px;
    background: ${(props) => `linear-gradient(to right,
            #1f8ecd ${props.winRate}%, #ee5a52 ${props.winRate}%);
          }`};
  }
`;

export const MatchesContainer = styled.div``;
