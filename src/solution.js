/* eslint-disable arrow-body-style, no-console, default-case */
// BEGIN (write your solution here)

export default (str) => {
  const isSymbolSpecial = symbol => /\s/.test(symbol);
  const symbols = Array.from(str);
  let word = '';
  let state = isSymbolSpecial(symbols[0]) ? 'search' : 'concat'; // search, concat, skip, fill

  return symbols.reduce((acc, symbol, index, array) => {
    const nextSymbol = array[index + 1];

    switch (state) {
      case 'search':
        if (isSymbolSpecial(nextSymbol)) {
          if (word.length === 0) {
            return acc;
          }
          if (nextSymbol === ' ') {
            state = 'skip';
            return acc;
          }
        }
        state = 'concat';
        break;

      case 'concat':
        word += symbol;
        if (isSymbolSpecial(nextSymbol)) {
          if (nextSymbol === ' ') {
            state = 'skip';
            return acc;
          }
          state = 'fill';
          return acc;
        }
        break;

      case 'skip':
        if (nextSymbol !== '\n') {
          if (array.length - 1 === index) {
            return acc.concat(word);
          }
          return acc;
        }
        state = 'fill';
        break;

      case 'fill':
        acc.push(word);
        word = '';
        state = isSymbolSpecial(nextSymbol) ? 'search' : 'concat';
        break;
    }
    return acc;
  }, []);
};
// END
