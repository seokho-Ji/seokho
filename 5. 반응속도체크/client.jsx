// react 설정을 불러옴
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

//반응속도 체크
import ResponseCheck from './ResponseCheckHooks';
const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));
