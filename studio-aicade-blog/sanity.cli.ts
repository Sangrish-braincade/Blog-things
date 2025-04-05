// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: '',
//     dataset: 'production'
//   },
//   /**
//    * Enable auto-updates for studios.
//    * Learn more at https://www.sanity.io/docs/cli#auto-updates
//    */
//   autoUpdates: true,
// })

// sanity/sanity.cli.ts (or .js)

import { defineCliConfig } from 'sanity/cli'
import 'dotenv/config' // to load .env.local

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
  },
  autoUpdates: true,
})
