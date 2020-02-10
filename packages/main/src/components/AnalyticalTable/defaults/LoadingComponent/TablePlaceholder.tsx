import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { CSSProperties, FC, useMemo } from 'react';
import ContentLoader from 'react-content-loader';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

const TableRow: FC<{ columns: number; y: number; row: number }> = ({ columns, y, row }) => {
  let columnOffset = 0;
  return (
    <>
      {getArrayOfLength(columns).map((val, i) => {
        const el = (
          <rect key={`row-${row}-column-${i}`} x={columnOffset + 2} y={y} rx="2" ry="8" width="61" height="16" />
        );
        columnOffset += 65;
        return el;
      })}
    </>
  );
};

export const TablePlaceholder: FC<{ columns: number; rows: number; style: CSSProperties; rowHeight: number }> = (
  props
) => {
  const { columns, rows, style, rowHeight } = props;

  const height = rows * rowHeight;
  const width = columns * 65;

  const innerStyles = useMemo(() => {
    return {
      backgroundColor: ThemingParameters.sapList_Background,
      width: '100%',
      ...style
    };
  }, [style, ThemingParameters.sapList_Background]);

  return (
    <ContentLoader
      style={innerStyles}
      height={height}
      width={width}
      speed={2}
      primaryColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      secondaryColor={ThemingParameters.sapField_PlaceholderTextColor}
      primaryOpacity={(ThemingParameters.sapContent_DisabledOpacity as undefined) as number}
    >
      {getArrayOfLength(rows).map((_, index) => (
        <TableRow key={index} columns={columns} y={rowHeight * index + rowHeight / 2} row={index} />
      ))}
    </ContentLoader>
  );
};

TablePlaceholder.defaultProps = {
  rows: 5,
  columns: 3
};
