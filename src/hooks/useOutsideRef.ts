import { useEffect } from "react";

/**
 * ref 영역 외 클릭 시 onClose 함수 호출하는 hook
 * @param ref
 * @param onClose
 */
function useOutsideRef(ref: any, onClose: () => void) {
  function handleClick(event: Event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}

export default useOutsideRef;
