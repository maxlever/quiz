async function loadData(url: string) {
  const res = await fetch(url);
  return await res.json();
}

function sortByPosition<T extends { position: number }>(arr: T[]) {
  return Array.from(arr).sort((a, b) => a.position - b.position);
}

export { loadData, sortByPosition };
