import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '../../../../node_modules/redux/index';

export default function useActions(action, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
}
