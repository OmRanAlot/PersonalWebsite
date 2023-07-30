// Get the reference to the image element and the button
const imageHobby = document.getElementById('img-hob');

const text_coding = document.getElementById('text-coding');
const text_VG = document.getElementById('text-video-games');
const text_sports = document.getElementById('text-sports');
const text_exercise = document.getElementById('text-exercise');
const text_cooking = document.getElementById('text-cooking');

const og = "images/hobby.jpg";



//Hobbies
text_coding.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = "images/coding.jpg";
});
text_coding.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = og;
});

text_VG.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = "images/video_game.jpg";
});
text_VG.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = og;
});

text_sports.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = "images/basketball.gif";
});
text_sports.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = og;
});

text_exercise.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = "images/work.gif";
});
text_exercise.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = og;
});

text_cooking.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = "images/cook.gif";
});
text_cooking.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageHobby.src = og;
});

const imageProject = document.getElementById('img-pro');

const Pro1 = document.getElementById('pro-1');
const Pro2 = document.getElementById('pro-2');
const Pro3 = document.getElementById('pro-3');
const Pro4 = document.getElementById('pro-4');


const og_pro = "images/project.png";

Pro1.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = "images/scrape.jpg";
});
Pro1.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = og_pro;
});

Pro2.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = "images/yt.jpg";
});
Pro2.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = og_pro;
});

Pro3.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = "images/mash.jpg";
});
Pro3.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = og_pro;
});

Pro4.addEventListener('mouseover', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = "images/pygame.jpg";
});
Pro4.addEventListener('mouseleave', function() {
  // Change the src attribute of the image element to the new image path
  imageProject.src = og_pro;
});






