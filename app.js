$(document).ready(function() {
 $('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
 });
 $('#textarea').trigger('autoresize');
})
var app = angular.module('artshare', ['angularGrid', 'angularMoment', 'ngAnimate']);
app.controller('posts', function($scope) {
 $scope.posts = [{
  id: 0,
  title: 'Super hardcore skull drawing',
  author: 'Matt Works',
  img: 'img/skull.jpg',
  description: `Look at its anatomical precision. I didn't even search for an image and I sketched this badass skull. Just in time for Halloween. #inspired #spooktacular #blessed`,
  date: new Date(),
  votes: 2,
  comments: []
 }, {
  id: 1,
  title: 'Lily Pads by Monet',
  author: 'Anna Baldwin',
  img: 'https://fpsbutest.files.wordpress.com/2012/12/tumblr_m5vezabvga1rwb7i1o1_500.jpg',
  description: `Oops...told my friend Lisa that this was by Picasso, but it's actually by Monet like in the Titanic. Like Lisa said, there's absolutely nothing geometric about this. But yeah...it's my favorite.`,
  date: new Date(),
  votes: 30,
  comments: []
 }, {
  id: 2,
  title: 'Loose Lips',
  author: 'Lisa Ma',
  img: 'img/choe.jpg',
  description: 'This is by one of my favorite artists, David Choe. I like how that large piece on the side of her face/back of her head kind of looks like a controller but also like a stereo.',
  date: new Date(),
  votes: 49,
  comments: []
 }, {
  id: 3,
  title: 'I am a work of art.',
  author: 'Benson',
  img: 'img/bens.jpg',
  description: 'The title says it all...really...I am a work of art. Loook at my majestic stance. I am a king.',
  date: new Date(),
  votes: 4,
  comments: []
 }, {
  id: 4,
  title: 'Mountainscape on woman',
  author: 'Kelsey Chapman',
  img: 'img/kelsey.jpg',
  description: `This is a piece of artwork by Mimi Kvinge. I really like how she uses watercolor in this piece. I almost missed the woman that's hidden in this the waves.`,
  date: new Date(),
  votes: 10,
  comments: []
 }, {
  id: 5,
  title: 'Two-faced',
  author: 'Lisa Ma',
  img: 'img/thing.jpg',
  description: 'Made with pastel chalks. I meant to use the pastel chalks over the summer for a competition/chalk festival, but they ended up cancelling it, so I drew this instead.',
  date: new Date(),
  votes: 5,
  comments: []
 }, {
  id: 6,
  title: 'Dots to Lines Tattoo',
  author: 'Gordon Graham',
  img: 'http://inflictinginktattoo.com/wp-content/uploads/2014/07/dot-to-lines-tattoos.png',
  description: `This is my favorite tattoo artist I've found I think. I really like his line work. It's very precise and are abstract enough in this piece that allows me to interpret it however I want to.`,
  date: new Date(),
  votes: 2,
  comments: []
 }];

 $scope.comments = [{
  post_id: 0,
  author: 'Lisa Ma',
  comment: `It's honestly...not that hardcore...also, I hate #hashtags`
 }, {
  post_id: 0,
  author: 'Matt Works',
  comment: `Shut up Lisa. I was an art student. You don't know what you're talking about. #stop #art #blessed`
 }, {
  post_id: 3,
  author: 'Courtney Sanders',
  comment: 'Ughhhh...a freaking god. *gasp* DOG IS GOD SPELLED BACKWARDS.'
 }];
 for (var i = 0; i < $scope.posts.length; i++) {
  for (var c = 0; c < $scope.comments.length; c++) {
   if ($scope.posts[i].id === $scope.comments[c].post_id) {
    $scope.posts[i].comments.push($scope.comments[c]);
   }
  }
 }
 $scope.view = false;
 $scope.vm = {};
 $scope.searchTxt = "";
 $scope.vm.add = false;
 $scope.vm.posts = $scope.posts;
 $scope.type = 'date';
 $scope.hidePost = true;
 $scope.sDate = true;
 $scope.sVotes = false;
 $scope.sTitle = false;
 $scope.commentDisp = false;
 $scope.validate = function() {
  $scope.valid = true;
  if ($scope.title == undefined) {
   $scope.noTitle = true;
   $scope.valid = false;
  }
  if ($scope.author == undefined) {
   $scope.noAuthor = true;
   $scope.valid = false;
  }
  if ($scope.img == undefined) {
   $scope.noImg = true;
   $scope.valid = false;
  }
  if ($scope.desc == undefined) {
   $scope.noDesc = true;
   $scope.valid = false;
  }
  if ($scope.valid == true) {
   var obj = {
    id: $scope.posts.length,
    title: $scope.title,
    author: $scope.author,
    img: $scope.img,
    description: $scope.desc,
    date: new Date(),
    votes: 0,
    comments: []
   };
   $scope.posts.push(obj);
   $scope.title = undefined;
   $scope.img = undefined;
   $scope.author = undefined;
   $scope.desc = undefined;
   $scope.newPost = false;
  }
 }
 $scope.cValidate = function(p_id, author, comment) {
  $scope.valid = true;
  if (author == undefined) {
   $scope.cNoAuth = true;
   $scope.valid = false;
  }
  if (comment == undefined) {
   $scope.cNoComment = true;
   $scope.valid = false;
  }
  if ($scope.valid === true) {
   var obj = {
    post_id: p_id,
    author: author,
    comment: comment
   }
   var elem;
   for(var i = 0; i < $scope.posts.length; i++){
     var theId = $scope.posts[i].id;
     if(theId === p_id){
       elem = i;
     }
   }
   $scope.posts[elem].comments.push(obj);
   $scope.view = true;
   $scope.vm.add = false;
  }
 }
 $scope.sortBy = function(type) {
  if (type == 'date') {
   $scope.posts = $scope.posts.sort(function(obj1, obj2) {
    return obj2.id - obj1.id;
   });
   $scope.type = 'date'
  }
  if (type == 'votes') {
   $scope.posts = $scope.posts.sort(function(obj1, obj2) {
    return obj2.votes - obj1.votes;
   });
   $scope.type = 'votes'
  }
  if (type == 'title') {
   $scope.posts = $scope.posts.sort(function(obj1, obj2) {
    var nameA = obj1.title.toUpperCase();
    var nameB = obj2.title.toUpperCase();
    if (nameA < nameB) {
     return -1;
    }
    if (nameA > nameB) {
     return 1;
    }
    return 0;
   });
   $scope.type = 'title';
  }
 }
 $scope.$watch('searchTxt', function(val) {
  if (val == undefined) {
   val = '';
  }
  val = val.toLowerCase();
  $scope.posts = $scope.vm.posts.filter(function(obj) {
   return obj.title.toLowerCase().indexOf(val) != -1 || obj.description.toLowerCase().indexOf(val) != -1;
  });
  $scope.sortBy($scope.type);
 });
});
