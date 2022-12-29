import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }

  displayLoading = () => {
    if (this.props.loading === true) {
        return <div><h4>LOADING!</h4></div>
    }
}

  render() {
    console.log(this.props.catPics)
    // debugger

    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.displayLoading()}
        {/* add CatList component here */}
        {<CatList catPics={this.props.catPics} loading={this.props.loading} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

