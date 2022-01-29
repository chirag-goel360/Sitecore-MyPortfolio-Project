// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the Experience component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Experience',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'experience', displayName: 'Experience', type: CommonFieldTypes.SingleLineText },
      { name: 'totalexp', displayName: 'Total Experience', type: CommonFieldTypes.SingleLineText },
      { name: 'designation', displayName: 'Designation', type: CommonFieldTypes.SingleLineText },
      { name: 'experienceDetails', displayName: 'Experience Details', type: CommonFieldTypes.ContentList, source: `dataSource=/sitecore/content/My Portfolio/${packageJson.config.appName}/Data/Experience/Experience Details` },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
