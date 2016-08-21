console.log("loaded script");
$(document).ready(function(){
  console.log("loaded jQuery");
  var resume = $('#resume');
  var contact = $('#contact');
  var portfolio = $('#portfolio');
  $('#entryButton').on('click', function(){
    console.log('clicked entry button');
    resume.show();
    $(this).remove();
  });
  $('.resumeButton').on('click', function(){
    console.log('clicked resume button');
    contact.hide();
    portfolio.hide();
    resume.show();
  });
  $('.contactButton').on('click', function(){
    console.log('clicked contact button');
    resume.hide();
    portfolio.hide();
    contact.show();
  });
  $('.portfolioButton').on('click', function(){
    console.log('clicked portfolio button');
    resume.hide();
    contact.hide();
    portfolio.show();
  });
  $('.navButton').on('mouseenter', function(){
    $(this).css("background-color", "#a3e6ff");
  });
  $('.navButton').on('mouseleave', function(){
    $(this).css("background-color", "azure")
  });
});
