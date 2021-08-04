import { combineReducers } from 'redux';
import layoutStore from './layoutStore';
import modalStore from './modalStore';
import routineStore from './routineStore';
import userStore from './userStore'

export default combineReducers({
    layoutStore,
    modalStore,
    routineStore,
    userStore
});