import { defineTable, column, NOW } from 'astro:db';

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    author: column.text(),
    pubDatetime: column.date({default: NOW}),
    slug: column.text(),
    featured: column.boolean(),
    draft: column.boolean({default: false}),
    tags: column.json(), 
    description: column.text({ optional: true }),
    content: column.text(),
  }
});

export { Post };
