import React, {
  ChangeEvent,
  FunctionComponent,
  Reducer,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import {DEFAULT_OPTIONS} from '../constants';
import {Options} from '../types';
import {getOptions, setOptions} from '../utils';

type OptionsReducerAction = BaseURLChangeAction | ReplaceAllAction;

interface IOptionsReducerAction {
  type: string;
  value: unknown;
}

interface BaseURLChangeAction extends IOptionsReducerAction {
  type: 'base-url';
  value: string;
}

interface ReplaceAllAction extends IOptionsReducerAction {
  type: 'replace-all';
  value: Options;
}

const optionsReducer: Reducer<Options, OptionsReducerAction> = (
  previousOptions: Options,
  action: OptionsReducerAction,
): Options => {
  let options = {...previousOptions};

  switch (action.type) {
    case 'base-url':
      options.baseURL = action.value;
      break;
    case 'replace-all':
      options = {...options, ...action.value};
      break;
  }

  return options;
};

export const App: FunctionComponent = () => {
  let [options, dispatch] = useReducer(optionsReducer, DEFAULT_OPTIONS);

  let onBaseURLChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'base-url', value: event.target.value});
  }, []);

  let onSaveButtonClick = useCallback(() => {
    setOptions(options);
  }, [options]);

  useEffect(() => {
    getOptions()
      .then(options => {
        dispatch({
          type: 'replace-all',
          value: options,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Makeflow 扩展程序设置</h1>
      <label>Makeflow 地址:</label>
      <br />
      <input value={options.baseURL} onChange={onBaseURLChanged} />
      <br />
      <br />
      <button onClick={onSaveButtonClick}>保存配置</button>
    </div>
  );
};
