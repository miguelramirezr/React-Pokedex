function useCounter(step, initialId, setCurrentId) {
  function Increment() {
    let val = initialId + step;
    if (val > 150) {
      setCurrentId(150);
    } else {
      setCurrentId(val);
    }
  }

  function Decrement() {
    let val = initialId - step;
    if (val <= 0) {
      setCurrentId(1);
    } else {
      setCurrentId(val);
    }
  }

  return [Increment, Decrement];
}

export default useCounter;
