export function addToCompare(productId: string) {
  let compareList: string[] = JSON.parse(
    localStorage.getItem("compare") || "[]"
  );
  if (!compareList.includes(productId)) {
    compareList.push(productId);
  }
  localStorage.setItem("compare", JSON.stringify(compareList));
}
