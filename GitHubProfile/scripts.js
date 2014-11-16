;(function(){ // closure
  jQuery.ajax('octocat.json', {
    success: function(data){
      console.log(data);
      jQuery('#avatar')
        .attr('href', data.avatar_url)
        .children('img')
          .attr('src', data.avatar_url)
      ; // END #avatar
      // TODO: Replace a bunch of stuff...
      var sidebar = jQuery('.sidebar');
      sidebar.children('h1')
        .children('span').text(data.name)
        .siblings('small').text(data.login);
      sidebar.children('.bio')
        .find('li').each(function(){
          console.log(arguments);
        });
      sidebar.children('.stats')
        .find('big').each(function(){
          console.log(arguments);
        });
    } // END success
  }); // END jQuery.ajax
  // TODO: Make tabs change when clicked...
  jQuery('.main').each(function(){
    var main = jQuery(this),
        tabs = main.find('.nav.nav-tabs a');
    tabs.click(function(event){
        console.log(this, event); // Now what?
        // TODO: Add "active" class to parent <li>
        // TODO: Remove "active" class from other <li>'s
        // TODO: Reveal corresponding "tab" section
        // TODO: Hide other "tab" sections
    }); // END click
  }); // each(.main)
})(); // END closure
