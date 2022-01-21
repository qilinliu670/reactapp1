import { all, takeEvery, put } from "redux-saga/effects"
import axios from "axios"

function *FoodsGenerator(action){
    try {
        var result = yield axios({
            url: "http://localhost:4000/foods",
            method: "get"
        })
        yield put({
            type: "GET_FOODS_SUCCESS",
            payload: result.data
        })
    }
    catch {
        put({
            type:"GET_FOODS_ERROR",
        })
    }
}

function *FoodsSaga(){
    yield takeEvery('GET_FOODS', FoodsGenerator)
}

function *FoodDetailsGenerator(action){
    try {
        var result = yield axios({
            url: "http://localhost:4000/foods/" + action.payload,
            method: "get"
        })
        yield put({
            type: "GET_FOOD_DETAILS_SUCCESS",
            payload: result.data
        })
    }
    catch {
        put({
            type:"GET_FOOD_DETAILS_ERROR",
        })
    }
}

function *FoodDetailsSaga(){
    yield takeEvery('GET_FOOD_DETAILS', FoodDetailsGenerator)
}

export default function *RootSaga(){
    yield all([FoodsSaga(), FoodDetailsSaga()])
}