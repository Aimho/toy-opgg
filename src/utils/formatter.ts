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
