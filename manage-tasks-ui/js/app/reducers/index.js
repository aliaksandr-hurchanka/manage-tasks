import { combineReducers } from 'redux'
import homePageReducer from '../pages/home-page/reducers/home'

export const rootReducer = combineReducers({
    homePage: homePageReducer
})
