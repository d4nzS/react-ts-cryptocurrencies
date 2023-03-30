export const roundToTwoDecimalPlaces = (value: string): string => {
  return (+value).toFixed(2);
};