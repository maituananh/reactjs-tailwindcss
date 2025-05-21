const SEARCH_HISTORY = "searchHistory";

export const storeSearchHistory = (history: string) => {
  if (!history) {
    return;
  }

  const keywordExisted = getSearchHistory().find((k) => k === history.trim());

  if (keywordExisted) {
    return;
  }

  const searchHistory = localStorage.getItem(SEARCH_HISTORY);

  if (searchHistory) {
    localStorage.setItem(SEARCH_HISTORY, `${searchHistory},${history.trim()}`);
  } else {
    localStorage.setItem(SEARCH_HISTORY, history.trim());
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
  if (!history.trim()) {
    return;
  }
  const keyworks = getSearchHistory()
    .filter((h) => h !== history.trim())
    .join(",");
  localStorage.setItem(SEARCH_HISTORY, keyworks);
};
