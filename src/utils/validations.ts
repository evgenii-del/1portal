import moment from "moment";

export const isLetter = (symbol: string): boolean =>
  Number.isNaN(Number(symbol));

const numberCheck = (symbol: string): boolean =>
  new RegExp(/^[0-9]$/).test(symbol);

export const stateNumberValidation = (str: string): boolean => {
  const currentSymbol = str.slice(-1);
  const position = str.length;

  switch (position) {
    case 0:
      return true;
    case 1:
      return isLetter(currentSymbol) || numberCheck(currentSymbol);
    case 2:
      return (
        (numberCheck(str[0]) && numberCheck(currentSymbol)) ||
        (isLetter(str[0]) && isLetter(currentSymbol))
      );
    case 3:
    case 4:
    case 5:
    case 6:
      return numberCheck(currentSymbol);
    case 7:
    case 8:
      return isLetter(currentSymbol);
    default:
      return false;
  }
};

export const seriesAndNumberPassportValidation = (str: string): boolean => {
  const currentSymbol = str.slice(-1);
  const position = str.length;

  switch (position) {
    case 0:
      return true;
    case 1:
    case 2:
      return isLetter(currentSymbol);
    case 3:
      return currentSymbol === " ";
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return numberCheck(currentSymbol);
    default:
      return false;
  }
};

export const seriesAndNumberDriverValidation = (str: string): boolean => {
  const currentSymbol = str.slice(-1);
  const position = str.length;

  switch (position) {
    case 0:
      return true;
    case 1:
    case 2:
    case 3:
      return isLetter(currentSymbol);
    case 4:
      return currentSymbol === " ";
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return numberCheck(currentSymbol);
    default:
      return false;
  }
};

export const mandatoryValidation = (value: string): boolean => {
  if (value && value.length !== 0) {
    return true;
  }
  return false;
};

export const dateValidation = (dateStr: any): boolean => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
    return false;
  }
  const date = moment(dateStr, "DD.MM.YYYY");
  return date.isValid() && date.year() >= 1930;
};
