import App from './components/App'
import ListView from './components/ListView'

const rootRoute = {
  path: '/blog',
  component: App,
  indexRoute: { component: ListView },
  childRoutes: [
    require('./articles/About')
  ]
}

export default rootRoute
