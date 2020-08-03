interface getKdaProps {
  kills: number;
  deaths: number;
  assists: number;
}
/**
 * kda를 계산하여 반환한다.
 * @param kills
 * @param deaths
 * @param assists
 */
export function getKDA(props: getKdaProps) {
  const KDA = ((props.kills + props.assists) / props.deaths).toFixed(2);
  return Number(KDA);
}

interface getWinRateProps {
  wins: number;
  totalPlay: number;
}
export function getWinRate(props: getWinRateProps) {
  return Math.floor((props.wins / props.totalPlay) * 100);
}
