const SEARCH_HISTORY = "searchHistory";

export const storeSearchHistory = (history: string) => {
  const searchHistory = localStorage.getItem(SEARCH_HISTORY);
  if (searchHistory) {
    localStorage.setItem(SEARCH_HISTORY, `${searchHistory},${history}`);
  } else {
    localStorage.setItem(SEARCH_HISTORY, `${history}`);
  }
};

export const getSearchHistory = (): string[] => {
  const searchHistory = localStorage.getItem(SEARCH_HISTORY);
  return searchHistory?.split(",") ?? [];
};

export const clearSearchHistory = () => {
  localStorage.removeItem(SEARCH_HISTORY);
};

export const removeSearchHistoryKeywork = (history: string) => {
  if (!history) {
    return;
  }
  const keyworks = getSearchHistory()
    .filter((h) => h !== history)
    .join(",");
  localStorage.setItem(SEARCH_HISTORY, keyworks);
};
