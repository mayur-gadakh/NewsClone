
import './App.css';
//import './components/Navbar';

import { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  api=process.env.REACT_APP_NEWS_API
  //api="2fca68345cb64759a2b644d92a100a1a";

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
    
  }
 
  render() {
    return (
      <>
        <BrowserRouter>
          <div className='bg'>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
            <Navbar></Navbar>
            
            <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} api={this.api} key="general" pageSize={6} country="us" category="general" topic="General"></News>}></Route>
              <Route exact path="/science" element={<News setProgress={this.setProgress} api={this.api} key="science" pageSize={6} country="us" category="science" topic="Science"></News>}></Route>
              <Route exact path="/business" element={<News setProgress={this.setProgress} api={this.api} key="business" pageSize={6} country="us" category="business" topic="Bussiness"></News>}></Route>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize={6} country="us" category="entertainment" topic="Entertainment"></News>}></Route>
              <Route exact path="/health" element={<News setProgress={this.setProgress} api={this.api} key="health" pageSize={6} country="us" category="health" topic="Health"></News>}></Route>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} api={this.api} key="sports" pageSize={6} country="us" category="sports" topic="Sports"></News>}></Route>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} api={this.api} key="technology" pageSize={6} country="us" category="technology" topic="Teachnology"></News>}></Route>

            </Routes>



          </div>
        </BrowserRouter>
      </>
    )
  }
}

