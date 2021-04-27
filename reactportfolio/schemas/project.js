export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
        {
            name: "projectImage",
            title: "Project Image",
            type: "image",
            options: {
                hotspot: true,
              }
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" }
                ], 
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags"
            },
        },
    ],
    preview: {
        select: {
          title: 'title',
          author: 'author.name',
          media: 'projectImage',
        },
        prepare(selection) {
          const {author} = selection
          return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
          })
        },
      },
};