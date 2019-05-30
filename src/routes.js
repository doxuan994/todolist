import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Todo from './components/Todo'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/todolist',
        component: Todo
    }
]
