// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the Education component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Education',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'learning', displayName: 'Learning', type: CommonFieldTypes.SingleLineText },
      { name: 'university', displayName: 'University Text', type: CommonFieldTypes.SingleLineText },
      { name: 'educationHistory', displayName: 'Education History', type: CommonFieldTypes.ContentList, source: `dataSource=/sitecore/content/My Portfolio/${packageJson.config.appName}/Data/Education/Education Details` },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
