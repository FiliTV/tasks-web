
import axios from 'axios'
import {ADD_TASK, DELETE_TASK, GET_TASKS, TASKS_ERROR, UPDATE_TASK} from "./types";

export const getTasks = () => async dispatch => {
    try{
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/tasks',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            dispatch( {
                type: GET_TASKS,
                payload: response.data
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    catch(error){
        dispatch( {
            type: TASKS_ERROR,
            payload: error,
        })
    }

}

export const updateTask = (data) => async dispatch => {
    try{
        const options = {
            method: 'PUT',
            url: 'http://localhost:8080/tasks/' + data.id,
            headers: {'Content-Type': 'application/json'},
            data: {description: data.description, valid: data.isValid}
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            dispatch( {
                type: UPDATE_TASK,
                payload: data
            })

        }).catch(function (error) {
            console.error(error);
        });
    }
    catch(error){
        dispatch( {
            type: TASKS_ERROR,
            payload: error,
        })
    }
}

export const addTask = (data) => async dispatch => {
    try{
        const options = {
            method: 'POST',
            url: 'http://localhost:8080/tasks',
            headers: {'Content-Type': 'application/json'},
            data: {description: data.description,valid:data.valid}
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            dispatch( {
                type: ADD_TASK,
                // payload: response.data
            })

        }).catch(function (error) {
            console.error(error);
        });
    }
    catch(error){
        dispatch( {
            type: TASKS_ERROR,
            payload: error,
        })
    }
}
export const deleteTask = (data) => async dispatch => {
    try{        const options = {
            method: 'DELETE',
            url: 'http://localhost:8080/tasks/' + data.id,
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            dispatch( {
                type: DELETE_TASK,
                payload: response.data
            })

        }).catch(function (error) {
            console.error(error);
        });
    }
    catch(error){
        dispatch( {
            type: TASKS_ERROR,
            payload: error,
        })
    }
}