// query의 값을 search로 설정
const QUERY_STR = 'search';

// query의 값을 받아오는 함수
export function getQuery() {
  const url = new URLSearchParams(location.search);

  return url.get(QUERY_STR);
}

// query의 값을 받아온 string 값으로 교체
export function setQuery(query: string) {
  const url = new URL(location.href);

  url.searchParams.set(QUERY_STR, query);

  history.pushState(null, '', url);
}

// query 삭제
export function deleteQuery() {
  const url = new URL(location.href);

  url.searchParams.delete(QUERY_STR);

  history.pushState(null, '', url);
}
