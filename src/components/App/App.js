import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import HeaderContainer from '../Header'
import config from '../../config'

function App() {
    return (
        <Router>
            <Grid>
                <HeaderContainer />

                <Grid type='wide'>
                    <Switch>
                        <Route 
                            exact 
                            path={config.routes.home} 
                            component={HomeContainer} 
                        />
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}

export default App
