import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/ui/Navbar';
import MarvelScreen from '../components/Marvel/MarvelScreen';
import HeroScreen from '../components/Heroes/HeroScreen';
import DcScreen from '../components/Dc/DcScreen';
import SearchScreen from '../components/Search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes;
