export const throttle = (handler: (...args: any[]) => void, timeout = 300) => {
  let lastInvokeTime: number; // 마지막으로 handler가 호출된 시각
  let timer: ReturnType<typeof setTimeout>; // 남은 시간 후 handler를 호출하기 위한 타이머

  return function (this: any, ...args: any[]) {
    const currentTime = Date.now(); // 현재 시간

    // 마지막 호출 이후 timeout이 지났으면 즉시 실행
    if (currentTime - lastInvokeTime >= timeout) {
      handler.apply(this, args);
      lastInvokeTime = currentTime;
    } else {
      // 아직 timeout이 지나지 않았으면 타이머 재설정
      clearTimeout(timer); // 기존 타이머 취소
      timer = setTimeout(
        () => {
          handler.apply(this, args); // 지연 실행
          lastInvokeTime = Date.now(); // 실행 시간 갱신
        },
        timeout - (currentTime - lastInvokeTime),
      );
    }
  };
};
