function CustomEvent ( event, params ) {
  params = params || {
    bubbles: false,
    cancelable: false,
    detail: undefined,
  };
  var evt = document.createEvent( 'CustomEvent' );
  evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
  return evt;
}

function register() {
}

module.exports = function ( undefined ) {
  if ( typeof window.CustomEvent === 'function' ) {
    return;
  };
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
};
