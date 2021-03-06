import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import PostDetailContainer from '../../containers/PostDetail'
import HeaderComponent from '../../components/Header'
import LoginComponent from '../../components/Login'

import config from '../../config'

function App() {
    return (
        <Router>
            <Grid>
                <HeaderComponent />

                <Grid type="wide" maxWidth={config.mainWidth}>
                    <Switch>
                        <Route exact path={config.routes.home} component={HomeContainer} />
                        <Route exact path={config.routes.postDetail} component={PostDetailContainer} />
                        <Route exact path={config.routes.login} component={LoginComponent} />
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}

export default App
