import React, { memo } from 'react';
import { connect } from 'react-redux';
import {
  compose,
  Dispatch
} from 'redux';
import { createStructuredSelector } from 'reselect';
import { HomeDispatchPops, HomePageState } from './type';

function HomePage({history}: HomePageState
): JSX.Element {
  const key = 'homePage';
  /*useInjectReducer({ key: key, reducer: reducer });
   useInjectSaga({ key: key, saga: saga });*/
  
  return (
    <div>
      <h1> Test </h1>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch: Dispatch): HomeDispatchPops {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withConnect,
)(HomePage);