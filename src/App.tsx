import React, {FunctionComponent}from 'react';
import Header from './components/header';
import Footer from './components/footer';
import LogementList from './pages/logement-list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Apropos from './pages/a-propos';
import LogementDetail from './pages/logement-detail';

const App:FunctionComponent = () =>{
/************declaration des etats************/


/************declaration des variables************/

/************declaration des fonction************/



/************declaration du dom virtuel*******/
        return (
                <Router>
                         <Header />
                        <div>
                           <Switch>
                                <Route exact path='/' component={LogementList}/> 
                                <Route exact path='/logements' component={LogementList} />
                                <Route exact path='/a-propos' component={Apropos} />
                                <Route exact path='/logements/:id' component={LogementDetail} />
                                <Route component={PageNotFound}/> 
                            </Switch>
                        </div>
                        <Footer />
                </Router>


        );
}

export default App;