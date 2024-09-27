// 策略对象
export const strategies = {
  isEmpty: (value: string, errorMsg: string) => {
    if (value === '' || value === null || value === undefined) {
      return errorMsg;
    }
    return '';
  },
  isLength: (value: string, min: number, max: number, errorMsg: string) => {
    if (value.length < min || value.length > max) {
      return errorMsg;
    }
    return '';
  },
  isMobile: (value: string, errorMsg: string) => {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      return errorMsg;
    }
    return '';
  },
};

class Validator {
  cache: Function[] = [];

  add = (dom: HTMLInputElement, rules: { strategy: string; errorMsg: string }[]) => {
    rules.forEach((rule) => {
      const strategyArray = rule.strategy.split(':');
      const { errorMsg } = rule;

      this.cache.push(() => {
        const strategy = strategyArray.shift();
        strategyArray.unshift(dom.value);
        strategyArray.push(errorMsg);
        return strategies[strategy!].apply(dom, strategyArray);
      });
    });
  };

  start = () => {
    return this.cache.map((validatorFunc) => validatorFunc()).find((errorMsg) => errorMsg);
  };
}

export default Validator;
