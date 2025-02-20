export const getCompareList = () => {
  let stored = localStorage.getItem("compare");

  if (stored && JSON.parse(stored).length > 0) {
    return JSON.parse(stored);
  } else {
    console.log("Nothing in compare list");
  }
};

export const queryParams = () => {
  const query = getCompareList();

  if (query) {
    const params = query
      .map((id: string) => `_id=${encodeURIComponent(id)}`)
      .join("&");
    return params;
  } else {
    return;
  }
};
