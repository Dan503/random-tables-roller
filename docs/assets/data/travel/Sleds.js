import { generateCarryCapacity } from './CarryCapacity.js';
import { creatureData } from './Creatures.js';
export const sledData = {
  XS: {
    size: 'XS',
    costToOwn: 10,
    drivers: 1,
    passengers: 0,
    sledWeight: 30
  },
  S: {
    size: 'S',
    costToOwn: 30,
    drivers: 1,
    passengers: 1,
    sledWeight: 50
  },
  M: {
    size: 'M',
    costToOwn: 100,
    drivers: 1,
    passengers: 2,
    sledWeight: 100
  },
  L: {
    size: 'L',
    costToOwn: 500,
    drivers: 1,
    passengers: 4,
    sledWeight: 300
  },
  XL: {
    size: 'L',
    costToOwn: 1000,
    drivers: 2,
    passengers: 10,
    sledWeight: 500
  }
};

const getSledCreatureComboData = (creatureCode, props) => {
  const travelCreature = creatureData[creatureCode];
  return props.map(({
    costToRent,
    sledSize,
    creatureCount
  }) => ({
    creatureCode,
    creature: travelCreature,
    creatureCount,
    sled: sledData[sledSize],
    sledCarryCapacity: generateCarryCapacity({
      strengthScore: travelCreature.str,
      creatureCount: creatureCount,
      isSled: true,
      isLarge: travelCreature.isLarge
    }),
    costToRent
  }));
};

export const sledTravelMethodData = {
  WALK: null,
  SNOWSHOE: null,
  DOG: getSledCreatureComboData('DOG', [{
    creatureCount: 1,
    costToRent: 1,
    sledSize: 'XS'
  }, {
    creatureCount: 2,
    costToRent: 3,
    sledSize: 'XS'
  }, {
    creatureCount: 4,
    costToRent: 5,
    sledSize: 'S'
  }, {
    creatureCount: 6,
    costToRent: 8,
    sledSize: 'M'
  }]),
  BIRD: null,
  DEER: getSledCreatureComboData('DEER', [{
    creatureCount: 1,
    costToRent: 10,
    sledSize: 'M'
  }, {
    creatureCount: 2,
    costToRent: 20,
    sledSize: 'M'
  }, {
    creatureCount: 4,
    costToRent: 40,
    sledSize: 'L'
  }, {
    creatureCount: 6,
    costToRent: 60,
    sledSize: 'L'
  }]),
  BEAR: getSledCreatureComboData('BEAR', [{
    creatureCount: 1,
    costToRent: 20,
    sledSize: 'M'
  }, {
    creatureCount: 2,
    costToRent: 40,
    sledSize: 'L'
  }, {
    creatureCount: 4,
    costToRent: 80,
    sledSize: 'XL'
  }, {
    creatureCount: 6,
    costToRent: 120,
    sledSize: 'XL'
  }])
};