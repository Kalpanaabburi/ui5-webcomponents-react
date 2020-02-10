import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  pageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    '& $pageHeader': {
      // ...getHeaderAndFooterPaddings()
    },
    '& $pageFooter': {
      // ...getHeaderAndFooterPaddings()
    },
    '& $contentSection': {
      // [isS]: {
      //   padding: '1rem 1rem 0 1rem'
      // },
      // [isM]: {
      //   padding: '1rem 2rem 0 2rem'
      // },
      // [isL]: {
      //   padding: '1rem 2rem 0 2rem'
      // },
      // [isXL]: {
      //   padding: '1rem 3rem 0 3rem'
      // },
      // [isXXL]: {
      //   padding: '1rem 3rem 0 3rem'
      // }
    }
  },
  backgroundStandard: {
    background: ThemingParameters.sapBackgroundColor
  },
  backgroundSolid: {
    background: ThemingParameters.sapShell_Background
  },
  backgroundList: {
    background: ThemingParameters.sapGroup_ContentBackground
  },
  backgroundTransparent: {
    background: 'transparent'
  },
  baseBar: {
    '& >*': {
      paddingLeft: '0rem',
      paddingRight: '0rem',
      '& [data-bar-part="Left"]': {
        paddingLeft: '0rem'
      },
      '& [data-bar-part="Right"]': {
        paddingRight: '0rem'
      }
    }
  },
  pageHeader: {
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: ThemingParameters.sapPageHeader_Background,
    '& >*': {
      background: ThemingParameters.sapPageHeader_Background,
      boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}`
    }
  },
  contentSection: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflowY: 'auto',
    overflowX: 'hidden',
    // marginTop: '1px',
    // marginBottom: '1px',
    boxSizing: 'border-box'
    // backgroundColor: ThemingParameters.sapBackgroundColor
  },
  pageWithHeader: {
    '& $contentSection': {
      top: CssSizeVariables.sapWcrBarHeight
    }
  },
  pageWithFooter: {
    '& $contentSection': {
      bottom: CssSizeVariables.sapWcrBarHeight
    }
  },
  pageFooter: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    borderTop: `1px solid ${ThemingParameters.sapPageFooter_BorderColor}`,
    '& >*': {
      height: CssSizeVariables.sapWcrBarHeight,
      background: ThemingParameters.sapPageFooter_Background,
      borderTop: `0.0625rem solid ${ThemingParameters.sapPageFooter_BorderColor}`
    }
  }
};

export default styles;
