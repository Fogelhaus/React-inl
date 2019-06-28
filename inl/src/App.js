import React from 'react';
import { connect } from 'react-redux';
import Header from './components/views/Header'
import Main from './components/views/Main'
import './App.css';
import { history } from './components/helpers/history'
import { alertActions } from './store/actions/alertActions'

class App extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className="">
        <Header />
        <div className="">
          {alert.message &&
            <div className= {`text-center alert ${alert.type}`}>{alert.message}</div>
          }
        </div>
        <Main />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}
export default connect(mapStateToProps)(App)
