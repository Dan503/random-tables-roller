import './App.css.proxy.js';
import { FlexGap } from './components/FlexGap/FlexGap.js';
import { RollResult } from './components/RollResult/RollResult.js';
import { RollTableSet } from './components/RollTableSet/RollTableSet.js';
import { TravelCalculator } from './components/TravelCalculator/TravelCalculator.js';
import { activityBeast, activityHumanoid, creatures } from './data/Arctic-encounters/index.js';
import { age, personality, quirks, races, sex } from './data/npcs/index.js';
import { curses } from './data/other/index.js';
import { storms, weather, weatherDuration } from './data/weather/index.js';
import { jsx as _jsx } from "../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../_snowpack/pkg/react/jsx-runtime.js";

function App() {
  return /*#__PURE__*/_jsx("div", {
    className: "App",
    children: /*#__PURE__*/_jsxs("div", {
      className: "App-inner",
      children: [/*#__PURE__*/_jsx("h1", {
        children: "Random Table Rollers"
      }), /*#__PURE__*/_jsxs(FlexGap, {
        direction: "vertical",
        children: [/*#__PURE__*/_jsx(TravelCalculator, {}), /*#__PURE__*/_jsxs(RollTableSet, {
          heading: "NPC Characters",
          children: [/*#__PURE__*/_jsx(RollResult, {
            label: "Race",
            tableData: races,
            dSize: 'd100'
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Sex",
            tableData: sex,
            dSize: 'd4'
          }), /*#__PURE__*/_jsx("tr", {
            children: /*#__PURE__*/_jsx("td", {
              colSpan: 5,
              children: /*#__PURE__*/_jsx("p", {
                children: "Use the \"Fantasy Name Generator\" app to generate character names."
              })
            })
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Personality trait",
            tableData: personality,
            dSize: 'd100'
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Quirk",
            tableData: quirks,
            dSize: 'd100'
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Age (appearance)",
            tableData: age,
            dSize: "d100"
          })]
        }), /*#__PURE__*/_jsxs(RollTableSet, {
          heading: "Arctic encounter generator",
          children: [/*#__PURE__*/_jsx(RollResult, {
            label: "Creature(s)",
            tableData: creatures,
            dSize: 'd20'
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Activity (Beast)",
            tableData: activityBeast,
            dSize: 'd12'
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Activity (Humanoid)",
            tableData: activityHumanoid,
            dSize: 'd12'
          })]
        }), /*#__PURE__*/_jsxs(RollTableSet, {
          heading: "Weather & Storms",
          children: [/*#__PURE__*/_jsx(RollResult, {
            label: "Weather",
            tableData: weather,
            dSize: "d20"
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Storm",
            tableData: storms,
            dSize: "d4"
          }), /*#__PURE__*/_jsx(RollResult, {
            label: "Duration",
            tableData: weatherDuration,
            dSize: "d8"
          })]
        }), /*#__PURE__*/_jsx(RollTableSet, {
          heading: "Other aspects",
          children: /*#__PURE__*/_jsx(RollResult, {
            label: "Curses",
            tableData: curses,
            dSize: 'd100'
          })
        }), /*#__PURE__*/_jsxs("p", {
          children: ["Personality traits and Quirks from", ' ', /*#__PURE__*/_jsx("a", {
            href: "https://www.dmsguild.com/product/317982/PC-and-NPC-Creation-Tables",
            children: "PC and NPC Creation Tables"
          })]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["Arctic activities and weather table from", ' ', /*#__PURE__*/_jsx("a", {
            href: "https://www.dmsguild.com/product/332576/Arctic-Survival-House-Rules-for-Icewind-Dale",
            children: "Arctic Survival House Rules for Icewind Dale"
          })]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["Curses from", ' ', /*#__PURE__*/_jsx("a", {
            href: "http://dndspeak.com/2017/12/100-curses/",
            children: "D&D speak.com"
          }), "."]
        })]
      })]
    })
  });
}

export default App;