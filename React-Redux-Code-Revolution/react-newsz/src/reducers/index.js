import {combineReducers} from 'redux'
import articles from './articles_reducer'
import galleries from './galleries_reducer'

const rootReducer = combineReducers({
    articles,
    galleries
})

export default rootReducer;