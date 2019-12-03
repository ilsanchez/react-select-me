import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';

const makeVirtualized = <P extends {}>(ReactSelectMe: React.ComponentType<P>) =>
  class ReactSelectMeHOC extends Component<P> {
    renderVirtualizedList({
      rowRenderer,
      rowCount,
      calculatedListHeight,
      getOptionHeight,
      listClasses,
      rowClassName
    }: any) {
      return (
        <AutoSizer disableHeight>
          {({ width }: { width: number }) => (
            <List
              width={width}
              height={calculatedListHeight}
              rowHeight={getOptionHeight}
              rowCount={rowCount}
              className={listClasses}
              rowClassName={rowClassName}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      );
    }
    render() {
      return <ReactSelectMe {...this.props} renderVirtualizedList={this.renderVirtualizedList} virtualized />;
    }
  };

export default makeVirtualized;
