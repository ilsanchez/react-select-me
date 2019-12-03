import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { IReactSelectMe } from '../propsDefinitions';

const makeImmutable = <T extends object>(ReactSelectMe: React.ComponentType<T>) =>
  class ReactSelectMeHOC extends Component<T> {
    toImmutable = (data: IReactSelectMe.Option | IReactSelectMe.Option[]) => fromJS(data);
    render() {
      return <ReactSelectMe {...this.props} toImmutable={this.toImmutable} immutable />;
    }
  };

export default makeImmutable;
