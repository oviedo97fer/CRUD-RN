import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import {connect} from 'react-redux'
import {deleteBlogsFirebase} from '../actions/postBlogsFirebase'

class BlogComponent extends Component {
    handleDelete = () =>{
        Alert.alert(
            '¿Borrar nota?',
            '',
            [
                {
                    text: 'cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => this.props.deleteBlogsFirebase(this.props.id),
                }
            ]
        )
    }
    render() {
        return (
            <TouchableOpacity 
                onPress={()=>{this.handleDelete()}} style={styles.contain}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.content}>{this.props.content}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#fff',
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'column',
        padding: 12,
        margin: 5
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    content:{
        fontSize: 14,
        color: '#444'
    }
})

const mapStateToProps = state =>({  
})
const mapDispatchToProps = dispatch =>({
    deleteBlogsFirebase: id => dispatch(deleteBlogsFirebase(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(BlogComponent)