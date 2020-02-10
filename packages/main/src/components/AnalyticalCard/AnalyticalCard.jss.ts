import * as spacing from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  card: {
    backgroundColor: ThemingParameters.sapTile_Background,
    // TODO There is a border mentioned in the specs, but this one looks weird.
    // border: `0.625rem solid ${ThemingParameters.sapUiTileBorderColor}`,
    boxShadow: ThemingParameters.sapContent_Shadow0,
    borderRadius: '0.25rem',
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: ThemingParameters.sapFontFamily,
    boxSizing: 'border-box'
  },
  content: spacing.sapUiContentPadding
};

export default styles;
