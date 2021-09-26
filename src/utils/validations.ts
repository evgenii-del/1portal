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

export const mandatoryValidation = (value: string): boolean =>
  !!(value && value.length !== 0);

export const dateValidation = (dateStr: string): boolean => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
    return false;
  }
  const date = moment(dateStr, "DD.MM.YYYY");
  return date.isValid() && date.year() >= 1930;
};

export const bodyNumberValidation = (bodyNumberStr: string): boolean =>
  new RegExp("^[A-Z\\d]{5,17}$").test(bodyNumberStr);

export const isEmailValid = (emailStr: string): boolean => {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailStr.toLowerCase());
};

export const isSeriesPassportValid = (series: string): boolean | string => {
  return (
    series && new RegExp(/(^([А-Яа-яІіЇїЄє]){2}([\s])([0-9]){6}$)/).test(series)
  );
};

export const isSeriesDriverValid = (series: string): boolean | string => {
  return (
    series && new RegExp(/(^([А-Яа-яІіЇїЄє]){3}([\s])([0-9]){6}$)/).test(series)
  );
};

export const isPhoneValid = (phoneStr: string): boolean => {
  return phoneStr.replace(/[{()}\s+-._]/g, "").length === 12;
};

export const lengthValidation = (param: string): boolean =>
  !!(param && param.length !== 0);

export const isStateNumberValid = (carNumber: string): boolean => {
  return (
    new RegExp(
      /(^([A-Z]){2}([0-9]){4}([A-Z]){2}$)|(^([0-9]){6}([A-Z]){2}$)/
    ).test(carNumber) ||
    new RegExp(
      /(^([ABKEHIXPOCMTАВКЕНІХРОСМТ]){2}([0-9]){4}([ABKEHIXPOCMTАВКЕНІХРОСМТ]){2}$)|(^([0-9]){6}([ABKEHIXPOCMTАВКЕНІХРОСМТ]){2}$)/
    ).test(carNumber)
  );
};

export const isNumberValid = (numberValue: string): boolean | string =>
  numberValue && numberValue.length === 6;

export const recordValidation = (recordValue: string): boolean | string =>
  recordValue && recordValue.length === 13;
