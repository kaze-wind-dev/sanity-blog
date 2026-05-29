import {defineCliConfig} from 'sanity/cli';
import {studioProjectId, studioDataset, studioAppId } from './environment'

export default defineCliConfig({
  api: {
    projectId: studioProjectId,
    dataset: studioDataset
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: studioAppId,
  }
})
