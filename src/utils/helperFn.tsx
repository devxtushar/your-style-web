export const getCompareList = () => {
  let stored = localStorage.getItem("compare");

  if (stored && JSON.parse(stored).length > 0) {
    console.log("entered");
    return JSON.parse(stored);
  } else {
    console.log("Nothing in compare list");
  }
};

export const queryParams = () => {
  const query = getCompareList();
  console.log("params inside 00", query);

  if (query) {
    const params = query
      .map((id: string) => `_id=${encodeURIComponent(id)}`)
      .join("&");
    console.log("params inside");
    return params;
  } else {
    return;
  }
};
