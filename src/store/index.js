import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import reduxLogger from 'redux-logger';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose

const middlewares = [
    thunkMiddleware,
    reduxLogger
]
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
)

export default function configStore () {
    const store = createStore(rootReducer, enhancer)
    return store
}
