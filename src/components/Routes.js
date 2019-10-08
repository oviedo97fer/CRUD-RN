import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
//comps
import Blog from './Blog'
import Post from './Post'
import Edit from './Edit'

const NavStack = createStackNavigator({
    Blog:{
        screen: Blog
    },
    Edit:{
        screen: Edit
    }
},
    {
        initialRouteName: 'Blog',
        defaultNavigationOptions:{
            headerMode: 'none'
        }
    }
)

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen: NavStack
    },
    Post: {
        screen: Post
    }
})

export default Routes = createAppContainer(BottomTab)