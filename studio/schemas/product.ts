import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100).warning('Shorter titles are better'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'A product description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      description: 'A short version of product description. used for small previews.',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'seasonal',
      title: 'Seasonal',
      type: 'boolean',
      initialValue: false,
      description: 'Is this product available only in this season?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'new',
      title: 'New',
      type: 'boolean',
      initialValue: false,
      description: 'Is this a new product?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'menus',
      title: 'Menus',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'menu'},
        },
      ],
      description: 'The menus where this product is available',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().lessThan(10000).positive().precision(2),
    }),
    defineField({
      name: 'old_price',
      title: 'Old Price',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.lessThan(10000).positive().precision(2),
    }),
  ],
})
