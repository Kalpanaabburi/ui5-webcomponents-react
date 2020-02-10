import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { JSSTheme } from '../../interfaces/JSSTheme';

export const sideNavigationListItemStyles = ({ parameters }: JSSTheme) => ({
  listItem: {
    '&:active': {
      '--sapTextColor': parameters.sapList_Active_TextColor,
      '& $icon, & $expandArrow': {
        '--sapContent_NonInteractiveIconColor': parameters.sapList_Active_TextColor
      }
    }
  },

  noIcons: {
    '& $text': {
      paddingLeft: '1rem'
    },
    '&[data-is-child] $text': {
      paddingLeft: '2rem'
    },
    boxSizing: 'border-box'
  },

  icon: {
    '--sapContent_NonInteractiveIconColor': parameters.sapContent_IconColor,
    width: CssSizeVariables.sapWcrSideNavigationItemIconSize,
    height: CssSizeVariables.sapWcrSideNavigationItemIconSize,
    padding: CssSizeVariables.sapWcrSideNavigationItemIconPadding,
    pointerEvents: 'none'
  },

  text: {},

  expandArrow: {
    '--sapContent_NonInteractiveIconColor': parameters.sapContent_IconColor,
    width: '0.875rem',
    height: '0.875rem',
    padding: CssSizeVariables.sapWcrSideNavigationItemExpandedArrowPadding,
    marginLeft: 'auto'
  },

  expanded: {
    '--ui5-listitem-border-bottom': 'none'
  },

  condensedExpandTriangle: {
    width: '0',
    height: '0',
    borderStyle: 'solid',
    borderWidth: '0 0 6px 6px',
    borderColor: `transparent transparent ${parameters.sapContent_IconColor} transparent`,
    position: 'absolute',
    right: '0.125rem',
    bottom: '0.1875rem'
  }
});
