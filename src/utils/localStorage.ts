/**
 * data를 로컬스토리지에 저장한다.
 * @param key 저장할 데이터 key 값
 * @param value 저장할 데이터 value 값
 */
export function setItem(key: string, value: any) {
  const result = JSON.stringify(value);
  localStorage.setItem(key, result);
}

/**
 * data를 로컬스토리지에서 불러온다.
 * @param key 저장할 데이터 key 값
 */
export function getItem(key: string) {
  const result = localStorage.getItem(key);
  if (result) return JSON.parse(result);
  return null;
}
