const QUERY_STR = 'search';

export function getQuery() {
  const url = new URLSearchParams(location.search);

  return url.get(QUERY_STR);
}

export function setQuery(query: string) {
  const url = new URL(location.href);

  url.searchParams.set(QUERY_STR, query);

  history.pushState(null, '', url);
}

export function deleteQuery() {
  const url = new URL(location.href);

  url.searchParams.delete(QUERY_STR);

  history.pushState(null, '', url);
}
