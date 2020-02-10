import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  segmentedButtonItem: {
    fontFamily: parameters.sapFontFamily,
    listStyle: 'none',
    overflow: 'hidden',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    verticalAlign: 'text-bottom',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontSize: '0.875rem',
    '&:focus': {
      outline: `1px dotted ${parameters.sapContent_FocusColor}`
    },
    '&:hover': {
      background: parameters.sapButton_Hover_Background
    },
    height: CssSizeVariables.sapWcrSegmentedButtonItemHeight,
    lineHeight: CssSizeVariables.sapWcrSegmentedButtonItemLineHeight,
    textShadow: 'none',
    '&:not($iconOnly)': { paddingLeft: '0.625rem', paddingRight: '0.625rem', textOverflow: 'ellipsis' },
    '&:first-child': {
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem'
    },
    '&:last-child': {
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderRightColor: parameters.sapButton_BorderColor
    },
    color: parameters.sapButton_TextColor,
    border: `1px solid ${parameters.sapButton_BorderColor}`,
    borderRightColor: 'transparent',
    backgroundColor: parameters.sapButton_Background
  },
  selected: {
    background: parameters.sapButton_Selected_Background,
    color: parameters.sapButton_Selected_TextColor,
    borderColor: parameters.sapButton_Selected_BorderColor,
    '--sapContent_NonInteractiveIconColor': parameters.sapContent_ContrastIconColor,
    '$:active': {
      background: parameters.sapButton_Active_Background,
      color: parameters.sapButton_Active_TextColor
    }
  },
  focusableItem: {
    '&:not($selected):hover': {
      background: parameters.sapButton_Selected_Hover_Background
    }
  },
  disabled: { textShadow: 'none', cursor: 'default', opacity: '0.4' },
  iconOnly: { paddingLeft: '0.625rem', paddingRight: '0.625rem' },
  icon: {
    fontSize: '1rem',
    textAlign: 'center',
    alignContent: 'center',
    display: 'inline-block',
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      verticalAlign: 'middle'
    }
  },
  withText: {
    marginRight: '0.5rem'
  }
});

export default styles;
