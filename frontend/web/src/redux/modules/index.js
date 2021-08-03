import { combineReducers } from 'redux';
import layoutStore from './layoutStore';
import modalStore from './modalStore';
import routineStore from './routineStore';

export default combineReducers({
    layoutStore,
    modalStore,
    routineStore
});