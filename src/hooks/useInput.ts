import { useState } from 'react';

/**
 * Input 상태 편하게 사용하기 위한 hook
 */
function useInput(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const onChange = setValue;

  return {
    value,
    onChange
  };
}

export default useInput;
