import React from "react";
import { MultiGrid, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import {
  STYLE,
  STYLE_BOTTOM_LEFT_GRID,
  STYLE_TOP_LEFT_GRID,
  STYLE_TOP_RIGHT_GRID,
  STYLE_CELL
} from "./style";
import {data} from './data' 

class Example extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this._cache = new CellMeasurerCache({
      defaultHeight: 30,
      defaultWidth: 150,
      fixedHeight: true
    });
  }

  render() {
    return (
      <MultiGrid

        columnCount={data[0].length}
        rowCount={data.length}

        width={300}
        height={300}

        columnWidth={this._cache.columnWidth}


        deferredMeasurementCache={this._cache}


        // fixedColumnCount={1}
        // fixedRowCount={1}

        overscanColumnCount={0}
        overscanRowCount={0}
        
        cellRenderer={this._cellRenderer}

        rowHeight={50}
        style={STYLE}

        styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
        styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
        styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
      />
    );
  }

  _cellRenderer = ({ columnIndex, key, parent, rowIndex, style }) => {

    if (columnIndex === 0) {
      // do whatever
    }

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div
          style={{
            ...style,
            ...STYLE_CELL,
            whiteSpace: "nowrap"
          }}
        >
          {data[rowIndex][columnIndex]}
        </div>
      </CellMeasurer>
    );
  };
}

export default Example;
