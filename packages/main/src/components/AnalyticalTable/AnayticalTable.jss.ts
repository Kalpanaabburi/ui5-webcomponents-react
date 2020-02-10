import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  tableContainer: {
    width: '100%',
    height: `calc(100% - ${CssSizeVariables.sapWcrAnalyticalTableRowHeight})`,
    minHeight: '3rem'
  },
  table: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'auto'
  },
  tableHeaderRow: {
    boxShadow: 'none !important',
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    zIndex: 1,
    position: 'relative'
  },
  th: {
    backgroundColor: parameters.sapList_HeaderBackground,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    color: parameters.sapList_HeaderTextColor,
    borderTop: `1px solid ${parameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`,
    borderRight: `1px solid ${parameters.sapList_BorderColor}`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapList_BorderColor}`
    }
  },
  tbody: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: parameters.sapList_Background
  },
  alternateRowColor: {
    backgroundColor: parameters.sapList_HeaderBackground
  },
  emptyRow: {},
  tr: {
    zIndex: 0,
    color: parameters.sapList_TextColor,
    '&[data-is-selected]': {
      backgroundColor: `${parameters.sapList_SelectionBackgroundColor} !important`
    },
    '&[data-is-selected]:hover': {
      backgroundColor: `${parameters.sapList_Hover_SelectionBackground} !important`
    }
  },
  alternateRowColor: {
    '& $tr:nth-child(even)': {
      backgroundColor: parameters.sapList_HeaderBackground
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${parameters.sapList_TableGroupHeaderBackground} !important`,
      border: `1px solid ${parameters.sapList_TableGroupHeaderBorderColor}`,
      color: parameters.sapList_TextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  selectable: {
    '& $tr:hover:not($emptyRow)': {
      backgroundColor: parameters.sapList_Hover_Background,
      cursor: 'pointer'
    },
    '& $tr:active:not([data-is-selected]):not($tableGroupHeader):not($emptyRow)': {
      backgroundColor: parameters.sapList_Active_Background,
      '& $tableCell': {
        borderRight: `1px solid ${parameters.sapList_Active_Background}`,
        color: `${parameters.sapList_Active_TextColor}`,
        '--sapTextColor': parameters.sapList_Active_TextColor
      }
    }
  },
  tableCell: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`,
    boxSizing: 'border-box',
    borderRight: `1px solid ${parameters.sapList_BorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapList_BorderColor}`
    },
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  },
  virtualTableBody: {
    overflowX: 'hidden !important',
    overflowY: 'auto !important'
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: parameters.sapList_Background,
    width: '100%',
    boxSizing: 'border-box',
    color: parameters.sapList_TextColor,
    fontFamily: parameters.sapFontFamily,
    fontSize: parameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapList_BorderColor}`
  },
  modifiedRowHeight: {
    '& $tableCell': {
      height: (props) => `${props.rowHeight}px`
    }
  }
});

export default styles;
