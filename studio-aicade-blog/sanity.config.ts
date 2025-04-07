// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'Aicade',
//   title: 'Aicade Blog',

//   projectId: '',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
// import 'dotenv/config' // loads variables from .env.local

export default defineConfig({
  name: 'Aicade',
  title: 'Aicade Blog',

  projectId: process.env.SANITY_PROJECT_ID! || "sr758iyp",
  dataset: process.env.SANITY_DATASET! || "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
