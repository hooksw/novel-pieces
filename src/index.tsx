import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/App';
import {Chapter} from "./lib/types/novel";

ReactDOM.render(<App />, document.getElementById('root'));
const c=new Chapter()
console.log(c+":"+c.toString()+":"+JSON.stringify(c))
