    <script src="/node_modules/lodash/lodash.js"></script>
    <script>

var navItems = document.getElementsByTagName('h3');

/**
 * If "this" `navItem` is "closed", make it "open"; if "this" `navItem` is "open"
 * make it "closed". If other `navItems` are "open" then close them, too.
 *
 * @todo FIX THIS FUNCTION!
 *
 * @param DOMEvent event
 * @return undefined
 */
function clickNavItem(event){
  // if "this" navItem is "closed"...
  if ( navItem.parentElement.className !== 'open' ){
    makeEverythingClosed(navItems);
    makeItOpen(navItem.parentElement);
  // otherwise if "this" navItem is "open"
  } else if ( navItem.parentElement.className === 'open' ){
    makeItClosed(navItem.parentElement);
  }
}; // END clickNavItem

// for each navItem in navItems...
_.each(navItems, function(navItem){
  // attach the event handler...
  navItem.onclick = clickNavItem;
});

/**
 * @param HTMLElement element
 * @return Boolean if `element` is "open"
 */
function isOpen(element){
}
/**
 * @param HTMLElement element
 * @return Boolean if `element` is "closed"
 */
function isClosed(element){

}

function makeItOpen(element){
  element.className = 'open';
}

function makeItClosed(element){
  element.className = '';
}

function makeEverythingClosed(elements){
  // for every element in elements
  //  make it closed
}

    </script>
