import { useContext } from 'react';

import { FormDataContext } from './index';

const useFormData = () => {
  const { state, dispatch } = useContext(FormDataContext);

  return [state, dispatch];
};

export default useFormData;
