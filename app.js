var app = angular.module('reddit', []);
app.controller('posts', function($scope){
  $scope.posts = [
    {
      id: 1,
      title: 'Super hardcore skull drawing',
      author: 'Matt Works',
      img: 'img/skull.jpg',
      description: `Look at its anatomical precision. I didn't even search for an image and I sketched this badass skull. Just in time for Halloween. #inspired #spooktacular #blessed`
    },
    {
      id: 2,
      title: 'Loose Lips',
      author: 'Lisa Ma',
      img: 'img/choe.jpg',
      description: 'This is by one of my favorite artists, David Choe. I like how that large piece on the side of her face/back of her head kind of looks like a controller but also like a stereo.'
    },
    {
      id: 3,
      title: 'I am a work of art.',
      author: 'Benson',
      img: 'img/bens.jpg',
      description: 'The title says it all...really...I am a work of art. Loook at my majestic stance. I am a king.'
    },
    {
      id: 4,
      title: 'When spaghetti eats you...',
      author: 'Gordon Graham',
      img: 'img/spaghetti.jpg',
      description: `Apparently this work of art is supposed to have some deep meaning, but it just looks like a huge pile of spaghetti eating some dude's really unexpressive face.`
    }
  ];
  $scope.comments = [
    {
      post_id: 1,
      author: 'Lisa Ma',
      comment: `It's honestly...not that hardcore...also, I hate #hashtags`
    },
    {
      post_id: 1,
      author: 'Matt Works',
      comment: `Shut up Lisa. I was an art student. You don't know what you're talking about. #stop #art #blessed`
    },
    {
      post_id: 3,
      author: 'Courtney Sanders',
      comment: 'Ughhhh...a freaking god. *gasp* DOG IS GOD SPELLED BACKWARDS.'
    },
    {
      post_id: 4,
      author: 'Lisa Ma',
      comment: 'om nom nom nom nom nom'
    }
  ];

});
