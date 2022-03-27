export default {
  name: 'comment',
  title: 'comment',
  type: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'Approved',
      title: 'Approved',
      type: 'boolean',
      description: "Comment won't show untill approveal",
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
};
