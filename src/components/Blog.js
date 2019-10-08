import React, { Component } from 'react'
import { Text, View,SafeAreaView,FlatList, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

//action fetch blogs
import {fetchBlogsFirebase} from '../actions/fetchBlogsFirebase' 
import BlogComponent from './BlogComponent'

class Blog extends Component {

    constructor(){
        super();
        this.state = {
            refreshing: false
        }
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    componentDidMount(){
        this.props.fetchBlogsFirebase()
    }
    handleRefresh(){
        this.setState({
            refreshing: false // TODO: handling refresh with redux  
        })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {Boolean(!this.props.blogs[0])? 
                    <Text style={{fontSize:15,color:'#676767',alignSelf:'center'}}>Aún no agregas ninguna nota</Text>
                    :
                    <FlatList
                        data={this.props.blogs}
                        renderItem={({item})=>(
                            <BlogComponent title={item.blog.title} id={item.id} content={item.blog.content}/>
                            )}
                        numColumns={2}
                        keyExtractor={item=>item.id}
                        style={styles.flatList}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    flatList:{
        flex:5,
    }
})

const mapStateToProps = state =>({  
    blogs: state.getBlogs
})
const mapDispatchToProps = dispatch =>({
    fetchBlogsFirebase: () => dispatch(fetchBlogsFirebase()),
    deleteBlogsFirebase: id => dispatch(deleteBlogsFirebase(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Blog)