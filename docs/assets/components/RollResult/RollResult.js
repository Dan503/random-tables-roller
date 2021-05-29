import { useState } from '../../../_snowpack/pkg/react.js';
import { getResult, isRollObject, maxRolls, roll } from '../../utils/utilFunctions.js';
import './RollResult.css.proxy.js';
import { jsx as _jsx } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { Fragment as _Fragment } from "../../../_snowpack/pkg/react/jsx-runtime.js";

const critClass = (diceResult, dSize = 'd20') => {
  if (diceResult === 1) {
    return 'crit crit-fail';
  }

  return maxRolls[dSize] === diceResult ? 'crit crit-success' : '';
};

export const RollResult = ({
  label,
  tableData,
  dSize
}) => {
  const [result, setResult] = useState();
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleRoll = () => {
    if (tableData) {
      setResult(getResult(tableData, dSize));
    } else {
      const rolledNumber = roll(dSize);
      setResult({
        roll: rolledNumber,
        value: `${rolledNumber}`,
        actualRoll: rolledNumber
      });
    }
  };

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("tr", {
      className: "RollResult",
      children: [/*#__PURE__*/_jsx("th", {
        children: label
      }), /*#__PURE__*/_jsx("td", {
        children: tableData && /*#__PURE__*/_jsxs("span", {
          className: critClass(result === null || result === void 0 ? void 0 : result.actualRoll, dSize),
          children: ["[ ", result === null || result === void 0 ? void 0 : result.actualRoll, " ]"]
        })
      }), /*#__PURE__*/_jsx("td", {
        children: result === null || result === void 0 ? void 0 : result.value
      }), /*#__PURE__*/_jsx("td", {
        children: /*#__PURE__*/_jsx("button", {
          onClick: handleRoll,
          children: "Roll"
        })
      }), /*#__PURE__*/_jsx("td", {
        children: /*#__PURE__*/_jsx("button", {
          onClick: toggleTable,
          "aria-expanded": isTableVisible,
          "aria-label": "Toggle table"
        })
      })]
    }), isTableVisible && tableData && /*#__PURE__*/_jsx("tr", {
      children: /*#__PURE__*/_jsx("td", {
        colSpan: 5,
        children: /*#__PURE__*/_jsxs("table", {
          children: [/*#__PURE__*/_jsx("thead", {
            children: /*#__PURE__*/_jsxs("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                align: "right",
                children: "Number"
              }), /*#__PURE__*/_jsx("th", {
                align: "left",
                children: "Result"
              })]
            })
          }), /*#__PURE__*/_jsx("tbody", {
            children: tableData.map((row, index) => {
              if (isRollObject(row)) {
                const {
                  value,
                  roll
                } = row;
                const number = Array.isArray(roll) ? `${roll[0]} - ${roll[1]}` : roll;
                return /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("th", {
                    align: "right",
                    children: number
                  }), /*#__PURE__*/_jsx("td", {
                    align: "left",
                    children: value
                  })]
                }, number);
              } else {
                return /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("th", {
                    align: "right",
                    children: index + 1
                  }), /*#__PURE__*/_jsx("td", {
                    align: "left",
                    children: row
                  })]
                }, index);
              }
            })
          })]
        })
      })
    })]
  });
};