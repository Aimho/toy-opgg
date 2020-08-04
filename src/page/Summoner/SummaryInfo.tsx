import React from 'react';

import { IMatchSummary } from '../../modules/summoner/types';
import CircleProgress from '../../component/CircleProgress';
import ColorPrint from '../../component/ColorPrint';
import Tooltip from '../../component/Tooltip';
import { getWinRate, getKDA } from '../../utils/calculate';

import {
  SummaryInfoContainer,
  SummaryRecord,
  SummaryKDAContainer,
  SummaryKDARecord,
  SummaryKDARate
} from './style';

const SummaryInfo = (summary: IMatchSummary) => {
  const totalPlay = summary.wins + summary.losses;
  const winRate = getWinRate({ wins: summary.wins, totalPlay });
  const KDA = getKDA({ ...summary });
  const killRate = getWinRate({
    wins: summary.kills,
    totalPlay: summary.kills + summary.assists
  });

  return (
    <SummaryInfoContainer>
      <SummaryRecord>
        <p className="record">
          {totalPlay}전 {summary.wins}승 {summary.losses}패
        </p>
        <CircleProgress percentage={winRate} />
      </SummaryRecord>

      <SummaryKDAContainer>
        <SummaryKDARecord>
          {summary.kills} <span className="divider">/</span>{' '}
          <span className="deaths">{summary.deaths}</span>{' '}
          <span className="divider">/</span> {summary.assists}
        </SummaryKDARecord>
        <SummaryKDARate>
          {ColorPrint.KDA(KDA)}

          <Tooltip message={`킬관여율`}>
            <b>({killRate}%)</b>
          </Tooltip>
        </SummaryKDARate>
      </SummaryKDAContainer>
    </SummaryInfoContainer>
  );
};

export default SummaryInfo;
