type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

// const addError = (errors: TMutableList<TWarning>) => {
//   errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
// };

const addError = (errors: TMutableList<TWarning>, type: WarningType) => {
  errors.push(Warning(type));
};

// ранее в функцию Warning передавался только тип LEGACY_CODE_DEPENDENCY, сейчас это может быть любой тип enum WarningType
