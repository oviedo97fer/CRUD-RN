import firestore from '@react-native-firebase/firestore'

//actions
import {getBlogs} from './index';
//url 


export function fetchBlogsFirebase(){
    return async dispatch => {
            firestore().collection('blogs').get()
                .then(snapshot=> {
                    let arr = [];
                    snapshot.forEach(snap=>{
                        let doc = {
                            id: snap.id,
                            blog: snap.data()
                        }
                        arr.push(doc)
                    })
                    console.log(arr)
                    dispatch(getBlogs(arr))
                })
                .catch(err=>console.log(err))
        }
    }