import firestore from '@react-native-firebase/firestore'
import { fetchBlogsFirebase } from './fetchBlogsFirebase'

//import {postBlogs} from './index'

export function postBlogsFirebase(blog){
    return async dispatch => {
        firestore().collection('blogs').add(blog)
            .then(dispatch(fetchBlogsFirebase()))
            .catch(err=>console.log(err))
    }
}

export function deleteBlogsFirebase(id){
    return async dispatch => {
        firestore().collection('blogs').doc(id).delete()
         .then(dispatch(fetchBlogsFirebase()))
           
    }
}