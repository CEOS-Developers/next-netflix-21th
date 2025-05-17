export const throttle = <TArgs extends any[]>(
  handler: (...args: TArgs) => void,
  timeout = 300,
): ((...args: TArgs) => void) => {
  let lastInvokeTime = 0;
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: TArgs) {
    const currentTime = Date.now();

    if (currentTime - lastInvokeTime >= timeout) {
      handler(...args);
      lastInvokeTime = currentTime;
    } else {
      clearTimeout(timer);
      timer = setTimeout(
        () => {
          handler(...args);
          lastInvokeTime = Date.now();
        },
        timeout - (currentTime - lastInvokeTime),
      );
    }
  };
};
