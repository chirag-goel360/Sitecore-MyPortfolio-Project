// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ContactMe component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ContactMe',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', displayName: 'Description', type: CommonFieldTypes.SingleLineText },
      { name: 'facebook', displayName: 'Facebook', type: CommonFieldTypes.GeneralLink },
      { name: 'twitter', displayName: 'Twitter', type: CommonFieldTypes.GeneralLink },
      { name: 'dribble', displayName: 'Dribble', type: CommonFieldTypes.GeneralLink },
      { name: 'google', displayName: 'Google', type: CommonFieldTypes.GeneralLink },
      { name: 'buttonText', displayName: 'Button Text', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
