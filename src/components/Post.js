import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
//redux
import {connect} from 'react-redux'
//actions
import {postBlogsFirebase} from '../actions/postBlogsFirebase'

class Posts extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            content: ''
        }
        this.submit = this.submit.bind(this);
    }
    submit(){
        let blog = {
            title: this.state.title,
            content: this.state.content,
        }
        this.props.postBlogsFirebase(blog)
        this.props.navigation.navigate('NavStack')
    }
    render() {
        return (    
            <View style={styles.container}>
                <Text style={styles.title}> Posts </Text>
                <TextInput
                    placeholder='Title'
                    onChangeText={title=>this.setState({title})}
                    style={styles.input}
                    value={this.state.title}/>
                <TextInput
                    placeholder='Content'
                    onChangeText={content=>this.setState({content})}
                    style={styles.input}
                    value={this.state.content}/>
                <Button title='Submit' onPress={this.submit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        flex: 1,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 27
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
        height: 60,
        margin: 10,
        padding:20,
        borderRadius:30,
    },
})

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch => ({
    postBlogsFirebase: blog => dispatch(postBlogsFirebase(blog))
})

export default connect(mapStateToProps,mapDispatchToProps)(Posts)