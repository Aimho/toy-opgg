import React from 'react';
import { useIntl } from 'react-intl';

/**
 * location search query를 object로 변환하는 함수
 * @param query
 */
export function searchQueryToObject(query: string) {
  if (!query) return undefined;

  const search = query.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

/**
 * 숫자를 통화 포맷으로 변경해준다.
 * @param value 변환할 원본 데이터
 */
export function formatCurrency(value?: number) {
  if (!value || isNaN(value)) return '0';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

interface IntlProps {
  id: string;
}
/**
 * 값을 i18n 언어로 변경함
 * @param id
 */
export const Intl = ({ id }: IntlProps) => {
  const { formatMessage } = useIntl();
  const message = formatMessage({ id: id.toLocaleLowerCase() });
  return <React.Fragment>{message}</React.Fragment>;
};

export function secondsToTime(sec: number) {
  const hours = Math.floor(sec / (60 * 60));
  const divisorForMinutes = sec % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);
  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  return hours
    ? `${hours}시 ${minutes}분 ${seconds}초`
    : `${minutes}분 ${seconds}초`;
}
