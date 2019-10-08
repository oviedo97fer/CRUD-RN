import React from 'react'
import firestore from '@react-native-firebase/firestore'

function Crud(){
    const ref = firestore()
                .collection('blogs')
    return null
}