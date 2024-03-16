import { defineTable, defineDb, column, NOW } from 'astro:db';

const Posts= defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    author: column.text({ optional: true }),
    pubDatetime: column.date({default: NOW}),
    slug: column.text(),
    featured: column.boolean({default: false}),
    draft: column.boolean({default: false}),
    tags: column.json({ optional: true }), 
    description: column.text({ optional: true }),
    content: column.text(),
  }
});

export default defineDb({
  tables: { Posts },
})
