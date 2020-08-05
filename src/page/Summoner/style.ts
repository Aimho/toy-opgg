import styled, { StyledProps, css } from 'styled-components';

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
  border-radius: 2px;
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
  width: 1000px;
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
  border-radius: 2px;
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
  border-radius: 2px;
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
  }
  .kda {
    margin-left: auto;
    margin-right: 24px;
    width: 75px;
    text-align: center;
  }
  .rate {
    width: 34px;
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

export const MatchesContainer = styled.div`
  max-width: 690px;
  width: 100%;
`;

export const SummaryContainer = styled.section`
  border: solid 1px #cdd2d2;
  border-radius: 2px;
  margin-bottom: 8px;
`;

export const SummaryHeaderContainer = styled.div`
  display: block;
  padding: 12px 16px;
  padding-bottom: 0px;
  width: 100%;
  background-color: #f2f2f2;
  border-bottom: solid 1px #cdd2d2;
  button {
    margin-bottom: -2px;
    display: inline-block;
    margin-right: 24px;
    padding-bottom: 8px;
    border-bottom: solid 2px transparent;
    font-size: 12px;
    &.active {
      color: #1f8ecd;
      border-color: #1f8ecd;
      font-weight: bold;
    }
  }
`;

export const SummaryContentContainer = styled.div`
  display: flex;
`;

const summaryContentChild = css`
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 24px;
  &:not(:last-child) {
    border-right: solid 1px #cdd2d2;
  }
`;

export const SummaryInfoContainer = styled.div`
  ${summaryContentChild}
  display: flex;
  align-items: center;
  padding-left: 35px;
`;

export const SummaryRecord = styled.span`
  display: block;
  margin-right: 35px;
  text-align: center;
  p.record {
    font-size: 12px;
    color: #666;
    margin-bottom: 14px;
  }
`;

export const SummaryKDAContainer = styled.span`
  display: block;
  text-align: center;
`;

export const SummaryKDARecord = styled.h5`
  font-size: 11px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
  span.deaths {
    color: #c6443e;
  }
  span.divider {
    color: #999;
    font-weight: normal;
  }
`;

export const SummaryKDARate = styled.h4`
  display: inline-flex;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  b {
    margin-left: 8px;
    color: #c6443e;
  }
`;

export const SummaryChampContainer = styled.div`
  ${summaryContentChild}
`;

export const SummaryChampCardContainer = styled.span`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const SummaryChampImg = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
  border-radius: 50%;
`;
export const SummaryEmptyChampImg = styled.span`
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-right: 8px;
  background-image: url(${require('../../assets/images/site.png')});
  background-position: -106px -1668px;
`;

export const SummaryChampInfo = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 16px;
  .champ-win-rate,
  .champ-record,
  .champ-kda,
  .champ-none {
    font-size: 11px;
  }
  .champ-win-rate {
    color: inherit;
    margin-right: 4px;
    font-weight: bold;
  }
  .champ-record {
    color: #555;
    padding-right: 6px;
    margin-right: 6px;
    border-right: solid 1px #cdd2d2;
  }
  .champ-kda {
    color: #555;
    font-weight: bold;
  }
  .champ-none {
    color: 999;
  }
`;

export const SummaryPositionContainer = styled.div`
  ${summaryContentChild}
  p.title {
    color: #666;
    font-size: 12px;
  }
`;

export const SummaryPositionInfoContainer = styled.span`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SummaryPositionImg = styled.div`
  width: 36px;
  margin-right: 8px;
  text-align: center;
  span {
    display: inline-block;
    width: 28px;
    height: 28px;
    background-image: url(${require('../../assets/images/site.png')});
    &.adc {
      background-position: -112px -2536px;
    }
    &.mid {
      background-position: -112px -2691px;
    }
    &.sup {
      background-position: -104px -2768px;
      width: 36px;
      height: 26px;
    }
    &.jng {
      background-position: -116px -2613px;
    }
    &.top {
      background-position: -112px -2844px;
    }
  }
`;

export const SummaryPositionInfo = styled(SummaryChampInfo)`
  .position-rate {
    font-size: 11px;
    color: #1f8ecd;
    font-weight: bold;
    padding-right: 6px;
    margin-right: 6px;
    border-right: solid 1px #cdd2d2;
  }
  .win-rate {
    font-size: 11px;
    color: #333;
    b {
      color: #666;
    }
  }
`;

export const MatchDetailContainer = styled.section`
  min-height: 96px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  &.renew {
    border: solid 1px #a7a7a7;
    background-color: #b6b6b6;
  }
  &.win {
    border: solid 1px #a1b8cd;
    background-color: #b0ceea;
  }
  &.losses {
    border: solid 1px #c0aba8;
    background-color: #d6b5b2;
  }
`;

export const MatchTypeContainer = styled.div`
  padding: 14px 0;
  width: 70px;
  border-color: inherit;
  h5 {
    font-weight: bold;
    & + p {
      margin-top: 4px;
    }
    &.renew {
      color: #000;
    }
    &.win {
      color: #2c709b;
    }
    &.losses {
      color: #d0021b;
    }
  }
  p,
  h5 {
    color: #555;
    font-size: 11px;
  }
  hr {
    width: 27px;
    border-top: solid 1px;
    border-color: inherit;
    margin: 3px auto;
    margin-bottom: 5px;
  }
`;

export const MatchChampContainer = styled.div`
  padding: 14px 0;
  width: 100px;
  p {
    text-align: center;
    color: #555;
    font-size: 11px;
  }
`;
export const MatchChampImgContainer = styled.span`
  display: flex;
  margin-bottom: 9px;
  > img {
    border-radius: 50%;
    margin-right: auto;
  }
  .spells {
    margin-right: 4px;
  }
  .spells,
  .peak {
    img {
      display: block;
    }
    img + img {
      margin-top: 2px;
    }
  }
`;

export const MatchKDAContainer = styled.div`
  width: 113px;
  .record {
    font-size: 15px;
    font-weight: bold;
    color: #555e5e;
    margin-bottom: 6px;
    span.deaths {
      color: #d0021b;
    }
    span.divider {
      color: #948e8d;
      font-weight: normal;
    }
  }
  .kda {
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: bold;
    color: #555e5e;
    b {
      color: '#333';
    }
  }
`;

export const MatchBadgeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  .badge {
    padding: 3px 5px;
    border-radius: 9px;
    font-size: 10px;
    color: #fff;
    & + .badge {
      margin-left: 4px;
    }
    &.kill {
      background-color: #ec4f48;
      border: solid 1px #bf3b36;
    }
    &.mvp {
      background-color: #e19205;
      border: solid 1px #b88a2a;
    }
    &.ace {
      background-color: #8c51c5;
      border: solid 1px #7f3590;
    }
  }
`;

export const MatchInfoContainer = styled.div`
  width: 90px;
  p {
    font-size: 11px;
    color: #555e5e;
    &:not(:last-child) {
      margin-top: 6px;
    }
    &.kill {
      color: #d0021b;
    }
  }
`;

export const MatchItemsContainer = styled.div`
  width: 114px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .build-icon {
    margin: 2px;
    color: #1f8fcd;
    &.losses {
      color: #c6443e;
    }
  }
  .ward {
    margin-top: 7px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: #000;
    .ward-icon {
      margin-right: 4px;
      color: #01619f;
      &.losses {
        color: #c8311e;
      }
    }
  }
`;

export const MatchItemImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin: 2px;
`;

export const MatchItemDescContainer = styled.div`
  text-align: left;
  * {
    font-weight: bold;
    color: #fff;
  }
  p.item-name {
    color: #00cfbc;
  }
  p.item-gold b {
    color: #ffc659;
    padding-left: 4px;
  }
`;

export const MatchTeamContainer = styled.div`
  width: 170px;
`;

export const MatchTeam = styled.span`
  width: 50%;
  display: inline-flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  p {
    color: #555;
    font-size: 11px;
    line-height: 16px;
    max-width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.bold {
      color: #000;
    }
  }
`;

export const MatchCollapseBtn = styled.div`
  margin-left: auto;
  width: 30px;
  height: 96px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  color: #555;
  border: solid 1px #549dc7;
  background-color: #b6b6b6;
  &.win {
    color: #04609e;
    border: solid 1px #a7a7a7;
    background-color: #7fb0e1;
  }
  &.losses {
    color: #c1433e;
    border: solid 1px #c8817c;
    background-color: #e89c95;
  }

  .expand-icon {
    transition: transform 0.3s;
    &.active {
      transform: rotate(180deg);
    }
  }
`;

export const MatchReportContainer = styled.section`
  width: 100%;
  height: 103px;
  color: #111;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  background-color: #b6b6b6;
  &.win {
    color: #04609e;
    background-color: #7fb0e1;
  }
  &.losses {
    color: #c1433e;
    background-color: #e89c95;
  }
`;
