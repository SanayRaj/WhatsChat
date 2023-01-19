import {useEffect, useRef, useCallback} from 'react';

export default function useTimeout(callback: any, delay: number) {
  const callbackRef = useRef(callback);
  const tR = useRef<any>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    tR.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    tR.current && clearTimeout(tR.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return {reset, clear};
}
