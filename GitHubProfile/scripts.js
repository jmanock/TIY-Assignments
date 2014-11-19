;(function(){ // closure
  _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  var userUrl = _.template('https://api.github.com/users/{{username}}');
  var reposUrl = _.template('https://api.github.com/users/{{username}}/repos');
  function getData(url){
    return $.get(url)
      .error(function(){
        console.error('OMG! ' + url);
      })
      .always(function(){
        console.debug(url, arguments);
      });
  }
  function getUser(username){
    return getData(userUrl({ username: username }));
  }
  function getRepos(username){
    return getData(reposUrl({ username: username }));
  }
  function getAll(username){
    return $.when(
      getUser(username), getRepos(username)
    );
  }
  getAll('octocat').done(updatePage);
  function updatePage (user, repos){
    var data = {
      user: user[0],
      repos: repos[0]
    };
    console.info(data);
    $('#avatar')
      .attr('href', data.user.avatar_url)
      .children('img')
        .attr('src', data.user.avatar_url)
    ; // END #avatar
    // TODO: Replace a bunch of stuff...
    var sidebar = jQuery('.sidebar');
    sidebar.children('h1')
      .children('span').text(data.user.name)
      .siblings('small').text(data.user.login);
    sidebar.find('.bio > li').each(function(index, li){
      var $li = $(li);
      var replaced = _.template($li.html(), data.user);
      $li.html(replaced);
      
    }); // END each(.bio > li)
    var stats = sidebar.find('.stats');
    stats.html(_.template(stats.html(), data.user));
    /* === Repo Stuff === */
    var $list = $('#repo-list'),
        $template = $list.find('li.template')
          .remove(); // Remove from the DOM
    _.each(data.repos, function(repo){
      var clone = $template.clone();
      clone.html(_.template(clone.html(), repo));
      $list.append(clone.removeClass('template'));
    }); // END _.each(data.repos)
  } // END updatePage
  // TODO: Make tabs change when clicked...
  var tabs = jQuery('.main > .main-tabs');
  var links = tabs.find('li > a');
  links.click(function(event){
    var clickedLink = $(this);
    var parentLI = clickedLink.parent();
    var siblingLIs = parentLI.siblings();
    // TODO: Add "active" class to parent <li>
    parentLI.addClass('active');
    // TODO: Remove "active" class from other <li>'s
    siblingLIs.removeClass('active');
    return false;
    event.preventDefault();
  });
  links.click(function(event){
    var panelID = $(this).attr('href');
    var panel = $(panelID);
    var others = panel.siblings('section');
    // TODO: Reveal corresponding "tab" section
    panel.addClass('active');
    // TODO: Hide other "tab" sections
    others.removeClass('active');
  });
  /* == DYNAMICALLY CHANGE USERNAME! == */
  var $usernameForm = $('#username-form');
  $usernameForm.submit(function(event){
      var username = $usernameForm.find('input').val();
      getAll(username).done(updatePage);
      return false; // event.preventDefault();
  });
})(); // END closure
