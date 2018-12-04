const image = {};
const video = {};

const incidents = [
  {
    id: 1,
    createdOn: new Date().toISOString(),
    createdBy: 10,
    type: 'red-flag',
    location: '33.005, 23.443',
    status: 'draft',
    Images: [image, image],
    Videos: [video, video],
    comment: 'Police brutality',
  },
];

export default incidents;
