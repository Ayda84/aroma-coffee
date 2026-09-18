export function toNumber(persianPriceString) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const cleaned = persianPriceString
    .replace(/[۰-۹]/g, (d) => persianDigits.indexOf(d))
    .replace(/٬/g, "")
    .replace(/,/g, "");
  return Number(cleaned);
}

export function toPersianPrice(number) {
  const englishDigits = "0123456789";
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const withSeparator = number.toLocaleString("en-US");
  return withSeparator
    .replace(/[0-9]/g, (d) => persianDigits[englishDigits.indexOf(d)])
    .replace(/,/g, "٬");
}
