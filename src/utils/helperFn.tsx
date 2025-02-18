export const getCompareList = () => {
  let stored = localStorage.getItem("compare");

  if (stored) {
    return JSON.parse(stored);
  } else {
    console.log("No data found in localStorage for 'compare'");
  }
};

export const queryParams = () => {
  const query = getCompareList();
  const params = query
    .map((id: string) => `_id=${encodeURIComponent(id)}`)
    .join("&");
  return params;
};
