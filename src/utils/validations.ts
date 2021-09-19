export const letterCheck = (symbol: string): boolean =>
  new RegExp(/^[ABKEHIXPOCMTАВКЕНІХРОСМТ]$/).test(symbol);

export const numberCheck = (symbol: string): boolean =>
  new RegExp(/^[0-9]$/).test(symbol);

export const stateNumberValidation = (str: string): boolean => {
  const currentSymbol = str.slice(-1);
  const position = str.length;

  switch (position) {
    case 0: {
      return true;
    }
    case 1: {
      return letterCheck(currentSymbol) || numberCheck(currentSymbol);
    }
    case 2: {
      return (
        (numberCheck(str[0]) && numberCheck(currentSymbol)) ||
        (letterCheck(str[0]) && letterCheck(currentSymbol))
      );
    }
    case 3:
    case 4:
    case 5:
    case 6: {
      return numberCheck(currentSymbol);
    }
    case 7:
    case 8: {
      return letterCheck(currentSymbol);
    }
    default: {
      return false;
    }
  }
};
