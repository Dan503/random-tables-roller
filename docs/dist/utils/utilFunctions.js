function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export const maxRolls = {
  d100: 100,
  d20: 20,
  d12: 12,
  d10: 10,
  d8: 8,
  d6: 6,
  d4: 4
};
export const roll = (diceName = 'd20') => {
  return Math.ceil(Math.random() * maxRolls[diceName]);
};
export const isRollObject = tableRow => Object.keys(tableRow || {}).includes('roll');
export const getResult = (tableData, dSize = 'd20') => {
  const result = roll(dSize);

  const findMatchingRow = row => {
    if (Array.isArray(row.roll)) {
      const isGreaterThanMin = row.roll[0] <= result;
      const isLessThanMax = row.roll[1] >= result;
      return isGreaterThanMin && isLessThanMax;
    } else {
      const isEqual = row.roll === result;
      return isEqual;
    }
  };

  if (isRollObject(tableData[0])) {
    const matchedRow = tableData.find(row => findMatchingRow(row));
    return _objectSpread(_objectSpread({}, matchedRow), {}, {
      actualRoll: result
    });
  } else {
    return {
      roll: result,
      value: tableData[result - 1],
      actualRoll: result
    };
  }
};
export function onSelectChange(setState) {
  return e => {
    const newValue = e.target.value;
    setState(newValue);
  };
}
export function onCheckboxChange(setState) {
  return e => {
    setState(e.target.checked);
  };
}
export function onNumberInputChange(setState) {
  return e => {
    const newValue = parseFloat(e.target.value) || 0;
    setState(newValue);
  };
}
export const hasDecimals = number => number % 1 !== 0;
export const abbreviatedNumber = number => hasDecimals(number) ? parseFloat(number.toFixed(2)) : number;