import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'カテゴリー', 
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
})