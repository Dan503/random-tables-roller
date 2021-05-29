const _excluded = ["className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useEffect, useState } from '../../../_snowpack/pkg/react.js';
import { creatureData, TravelMethod, travelMethods } from '../../data/travel/Creatures.js';
import { sledTravelMethodData } from '../../data/travel/Sleds.js';
import { abbreviatedNumber, onCheckboxChange, onNumberInputChange, onSelectChange } from '../../utils/utilFunctions.js';
import { FlexGap } from '../FlexGap/FlexGap.js';
import { jsx as _jsx } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../../_snowpack/pkg/react/jsx-runtime.js";
import { Fragment as _Fragment } from "../../../_snowpack/pkg/react/jsx-runtime.js";
const Encomberance = {
  c: {
    label: 'Comfortable',
    timeMultiplier: 1,
    limitName: 'comfortableLimit'
  },
  e: {
    label: 'Encombered',
    timeMultiplier: 1.5,
    limitName: 'encumberedLimit'
  },
  he: {
    label: 'Heavily Encombered',
    timeMultiplier: 2,
    limitName: 'heavilyEncumberedLimit'
  },
  x: {
    label: `Can't Move`,
    timeMultiplier: 0,
    limitName: 'x'
  }
};
export const TravelCalculator = _ref => {
  let {
    className,
    children
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const [travelMethod, setTravelMethod] = useState('WALK');
  const [currentCreature, setCurrentCreature] = useState();
  const [isUsingSled, setIsUsingSled] = useState(true);
  const [isWilderness, setIsWilderness] = useState(false);
  const [isMountains, setIsMountains] = useState(false);
  const [encumbrance, setEncomberance] = useState();
  const [creatureCount, setCreatureCount] = useState(1);
  const [baseTravelHours, setBaseTravelHours] = useState(0);
  const [inventoryWeight, setInventoryWeight] = useState(0);
  const [currentEncomberance, setCurrentEncomberance] = useState('c');
  const [calculatedTravelHours, setCalculatedTravelHours] = useState(0);
  const [totalCalculatedTravelHours, setTotalCalculatedTravelHours] = useState(0);
  const onTravelSelect = onSelectChange(setTravelMethod);
  const onSledChange = onCheckboxChange(setIsUsingSled);
  const onCreatureCountChange = onNumberInputChange(setCreatureCount);
  const onBaseTravelHourChange = onNumberInputChange(setBaseTravelHours);
  const onInventoryWeightChange = onNumberInputChange(setInventoryWeight);
  useEffect(() => {
    setCurrentCreature(creatureData[travelMethod]);
  }, [travelMethod]);
  useEffect(() => {
    var _sledTravelMethodData;

    const sledTravelMethod = (_sledTravelMethodData = sledTravelMethodData[travelMethod]) === null || _sledTravelMethodData === void 0 ? void 0 : _sledTravelMethodData.find(x => x.creature.travelMethodCode === travelMethod && x.creatureCount === creatureCount);

    if (creatureCount > 1 && sledTravelMethod) {
      setIsUsingSled(true);
    }

    if (isUsingSled) {
      if (!sledTravelMethod) {
        setIsUsingSled(false);
      } else {
        setEncomberance(sledTravelMethod.sledCarryCapacity);
      }
    } else {
      setEncomberance(creatureData[travelMethod].carryCapacity);
    }
  }, [travelMethod, isUsingSled, creatureCount]);
  useEffect(() => {
    if (encumbrance) {
      const {
        comfortableLimit,
        encumberedLimit,
        heavilyEncumberedLimit
      } = encumbrance;

      if (inventoryWeight <= comfortableLimit) {
        setCurrentEncomberance('c');
      } else if (inventoryWeight <= encumberedLimit) {
        setCurrentEncomberance('e');
      } else if (inventoryWeight <= heavilyEncumberedLimit) {
        setCurrentEncomberance('he');
      } else {
        setCurrentEncomberance('x');
      }
    }
  }, [encumbrance, inventoryWeight]);
  useEffect(() => {
    const {
      timeMultiplier: encomberanceMultiplier
    } = Encomberance[currentEncomberance];
    const {
      travelTimeReduction,
      restInterval
    } = creatureData[travelMethod];
    const terrainMultiplier = isMountains && 3 || isWilderness && 2 || 1;
    const totalTravelHours = baseTravelHours / travelTimeReduction * encomberanceMultiplier * terrainMultiplier;
    setCalculatedTravelHours(abbreviatedNumber(totalTravelHours));

    if (restInterval) {
      const restHours = Math.floor(totalTravelHours) / restInterval;
      setTotalCalculatedTravelHours(abbreviatedNumber(totalTravelHours + restHours));
    }
  }, [currentEncomberance, baseTravelHours, isWilderness, isMountains, travelMethod]);
  useEffect(() => {
    if (isMountains) {
      setIsWilderness(false);
    }
  }, [isMountains]);
  useEffect(() => {
    if (isWilderness) {
      setIsMountains(false);
    }
  }, [isWilderness]);
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    className: className
  }, restProps), {}, {
    children: [/*#__PURE__*/_jsx("h2", {
      children: "Travel calculator"
    }), /*#__PURE__*/_jsxs(FlexGap, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [/*#__PURE__*/_jsxs(FlexGap, {
        children: [/*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("span", {
            children: "Base travel hours"
          }), /*#__PURE__*/_jsx("input", {
            inputMode: "decimal",
            type: "text",
            value: baseTravelHours,
            onChange: onBaseTravelHourChange
          })]
        }), /*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("span", {
            children: "Total inventory weight"
          }), /*#__PURE__*/_jsx("input", {
            inputMode: "decimal",
            type: "text",
            value: inventoryWeight,
            onChange: onInventoryWeightChange
          })]
        })]
      }), /*#__PURE__*/_jsxs(FlexGap, {
        children: [/*#__PURE__*/_jsx("select", {
          onChange: onCreatureCountChange,
          title: "Creature count",
          value: creatureCount,
          children: [1, 2, 4, 6].map(value => {
            return /*#__PURE__*/_jsxs("option", {
              value: value,
              children: [value, "x"]
            }, value);
          })
        }), /*#__PURE__*/_jsx("select", {
          onChange: onTravelSelect,
          value: travelMethod,
          title: "Travel method",
          children: travelMethods.map(value => {
            const label = TravelMethod[value];
            return /*#__PURE__*/_jsx("option", {
              value: value,
              children: label
            }, value);
          })
        })]
      }), /*#__PURE__*/_jsxs(FlexGap, {
        children: [/*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("span", {
            children: "Sled?"
          }), /*#__PURE__*/_jsx("input", {
            type: "checkbox",
            checked: isUsingSled,
            onChange: onSledChange
          })]
        }), /*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("span", {
            children: "Wilderness?"
          }), /*#__PURE__*/_jsx("input", {
            type: "checkbox",
            checked: isWilderness,
            onChange: onCheckboxChange(setIsWilderness)
          })]
        }), /*#__PURE__*/_jsxs("label", {
          children: [/*#__PURE__*/_jsx("span", {
            children: "Mountains?"
          }), /*#__PURE__*/_jsx("input", {
            type: "checkbox",
            checked: isMountains,
            onChange: onCheckboxChange(setIsMountains)
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsxs("p", {
          children: [/*#__PURE__*/_jsx("strong", {
            children: "Total travel time:"
          }), " ", calculatedTravelHours, " hours", Boolean(currentCreature === null || currentCreature === void 0 ? void 0 : currentCreature.restInterval) && /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("br", {}), "(Creature must rest every ", currentCreature === null || currentCreature === void 0 ? void 0 : currentCreature.restInterval, " hours)", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("strong", {
              children: "Plus rests:"
            }), " ", totalCalculatedTravelHours, " hours"]
          })]
        }), /*#__PURE__*/_jsxs("p", {
          children: [/*#__PURE__*/_jsx("strong", {
            children: "Encomberance:"
          }), ' ', Encomberance[currentEncomberance].label, " (", Encomberance[currentEncomberance].timeMultiplier, "x)"]
        })]
      }), /*#__PURE__*/_jsxs("ul", {
        children: [/*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx("strong", {
            children: "Comfortable limit"
          }), " ", encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.comfortableLimit]
        }), /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx("strong", {
            children: "Encombered limit"
          }), " ", encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.encumberedLimit]
        }), /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx("strong", {
            children: "Heavily Encombered limit"
          }), ' ', encumbrance === null || encumbrance === void 0 ? void 0 : encumbrance.heavilyEncumberedLimit]
        })]
      })]
    })]
  }));
};