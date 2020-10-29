import * as types from './types';
import { createReducer } from '../../utils';
import {
  banglaContentDictionary,
  englishContentDictionary,
} from './lingualDictionary';

const initialState = {
  isEnglish: true,
  isBangla: false,
  dictionary: englishContentDictionary,
};

const lingualReducer = createReducer(initialState)({
  [types.TOGGLE_LINGUAL]: (state, action) => {
    return {
      isEnglish: state.isEnglish ? false : true,
      isBangla: state.isBangla ? false : true,
      dictionary: state.isEnglish
        ? banglaContentDictionary
        : englishContentDictionary,
    };
  },
  [types.CHANGE_LINGUAL_TO_BANGLA]: (state, action) => {
    return {
      isEnglish: false,
      isBangla: true,
      dictionary: banglaContentDictionary,
    };
  },
  [types.CHANGE_LINGUAL_TO_ENGISH]: (state, action) => {
    return {
      isEnglish: true,
      isBangla: false,
      dictionary: englishContentDictionary,
    };
  },
});

export default lingualReducer;
