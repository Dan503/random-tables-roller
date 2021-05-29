export const generateCarryCapacity = ({
  strengthScore,
  creatureCount: _creatureCount = 1,
  isLarge: _isLarge = true,
  isSled: _isSled = false
}) => {
  const comfortableLimit = strengthScore * 5 * _creatureCount;
  const encumberedLimit = comfortableLimit + comfortableLimit;
  const heavilyEncumberedLimit = encumberedLimit + comfortableLimit;

  if (!_isLarge && !_isSled) {
    return {
      comfortableLimit,
      encumberedLimit,
      heavilyEncumberedLimit
    };
  }

  if (_isLarge && !_isSled || !_isLarge && _isSled) {
    return {
      comfortableLimit: comfortableLimit * 2,
      encumberedLimit: encumberedLimit * 2,
      heavilyEncumberedLimit: heavilyEncumberedLimit * 2
    };
  }

  return {
    comfortableLimit: comfortableLimit * 2 * 2,
    encumberedLimit: encumberedLimit * 2 * 2,
    heavilyEncumberedLimit: heavilyEncumberedLimit * 2 * 2
  };
};