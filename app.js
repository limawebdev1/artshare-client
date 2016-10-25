$(document).ready(function(){
  $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );
})


var app = angular.module('reddit', []);
app.controller('posts', function($scope){
  $scope.posts = [
    {
      id: 0,
      title: 'Super hardcore skull drawing',
      author: 'Matt Works',
      img: 'img/skull.jpg',
      description: `Look at its anatomical precision. I didn't even search for an image and I sketched this badass skull. Just in time for Halloween. #inspired #spooktacular #blessed`,
      date: new Date(),
      up: 2,
      down: 5000,
      comments: []
    },
    {
      id: 1,
      title: 'Loose Lips',
      author: 'Lisa Ma',
      img: 'img/choe.jpg',
      description: 'This is by one of my favorite artists, David Choe. I like how that large piece on the side of her face/back of her head kind of looks like a controller but also like a stereo.',
      date: new Date(),
      up: 100,
      down: 0,
      comments: []
    },
    {
      id: 2,
      title: 'I am a work of art.',
      author: 'Benson',
      img: 'img/bens.jpg',
      description: 'The title says it all...really...I am a work of art. Loook at my majestic stance. I am a king.',
      date: new Date(),
      up: 5000,
      down: 0,
      comments: []
    },
    {
      id: 3,
      title: 'When spaghetti eats you...',
      author: 'Gordon Graham',
      img: 'img/spaghetti.jpg',
      description: `Apparently this work of art is supposed to have some deep meaning, but it just looks like a huge pile of spaghetti eating some dude's really unexpressive face.`,
      date: new Date(),
      up: 500,
      down: 500,
      comments: []
    }
  ];
  $scope.comments = [
    {
      post_id: 0,
      author: 'Lisa Ma',
      comment: `It's honestly...not that hardcore...also, I hate #hashtags`
    },
    {
      post_id: 0,
      author: 'Matt Works',
      comment: `Shut up Lisa. I was an art student. You don't know what you're talking about. #stop #art #blessed`
    },
    {
      post_id: 2,
      author: 'Courtney Sanders',
      comment: 'Ughhhh...a freaking god. *gasp* DOG IS GOD SPELLED BACKWARDS.'
    },
    {
      post_id: 3,
      author: 'Lisa Ma',
      comment: 'om nom nom nom nom nom'
    }
  ];
  for(var i = 0; i < $scope.posts.length; i++){
    for(var c = 0; c < $scope.comments.length; c++){
      if($scope.posts[i].id === $scope.comments[c].post_id){
        $scope.posts[i].comments.push($scope.comments[c]);
      }
    }
  }
  $scope.view = false;
  $scope.vm = {}
  $scope.vm.add = false;
  $scope.hidePost = true;
  $scope.sDate = true;
  $scope.sVotes = false;
  $scope.sTitle = false;
  $scope.commentDisp = false;
  $scope.validate = function(){
    $scope.valid = true;
    if($scope.title == undefined){
      $scope.noTitle = true;
      $scope.valid = false;
    }
    if($scope.author == undefined){
      $scope.noAuthor = true;
      $scope.valid = false;
    }
    if($scope.img == undefined){
      $scope.noImg = true;
      $scope.valid = false;
    }
    if($scope.desc == undefined){
      $scope.noDesc = true;
      $scope.valid = false;
    }
    if($scope.valid == true){
      var obj = {
        id: $scope.posts.length,
        title: $scope.title,
        author: $scope.author,
        img: $scope.img,
        description: $scope.desc,
        date: new Date(),
        up: 0,
        down: 0,
        comments: []
      };
      $scope.posts.push(obj);
      $scope.title = undefined;
      $scope.img = undefined;
      $scope.author = undefined;
      $scope.desc = undefined;
      $scope.newPost=false;
    }
  }
  $scope.cValidate = function(p_id, author, comment){
    $scope.valid = true;
    console.log(author, comment);
    console.log($scope);
    if(author == undefined){
      $scope.cNoAuth = true;
      $scope.valid = false;
    }
    if(comment == undefined){
      $scope.cNoComment = true;
      $scope.valid = false;
    }
    if($scope.valid === true){
      var obj = {
        post_id: p_id,
        author: author,
        comment: comment
      }
      $scope.posts[p_id].comments.push(obj);
      $scope.vm.add=false;
      console.log('it was valid=====');

      console.log($scope);

    }
  }

  $scope.toggleAdd = function() {
    $scope.vm.add = !$scope.vm.add;
  }
});
