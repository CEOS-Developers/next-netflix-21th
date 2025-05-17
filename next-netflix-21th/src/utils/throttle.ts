// throttle: 지정된 시간 간격 내에서 콜백 호출을 제한하는 함수입니다.
// handler: 실행할 함수
// timeout: 제한 시간 (ms)
export const throttle = <Args extends unknown[]>(
  handler: (...args: Args) => void,
  timeout = 300,
): ((...args: Args) => void) => {
  let lastInvokeTime = 0; // 마지막으로 실행된 시각
  let timer: ReturnType<typeof setTimeout>; // 타이머 ID 저장

  return (...args: Args) => {
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
