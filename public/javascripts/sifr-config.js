/*****************************************************************************
It is adviced to place the sIFR JavaScript calls in this file, keeping it
separate from the `sifr.js` file. That way, you can easily swap the `sifr.js`
file for a new version, while keeping the configuration.

You must load this file *after* loading `sifr.js`.

That said, you're of course free to merge the JavaScript files. Just make sure
the copyright statement in `sifr.js` is kept intact.
*****************************************************************************/

// Make an object pointing to the location of the Flash movie on your web server.
// Try using the font name as the variable name, makes it easy to remember which
// object you're using. As an example in this file, we'll use Futura.
var bodoni = { src: 'flash/sifr.swf' };

// Now you can set some configuration settings.
// See also <http://wiki.novemberborn.net/sifr3/JavaScript+Configuration>.
// One setting you probably want to use is `sIFR.useStyleCheck`. Before you do that,
// read <http://wiki.novemberborn.net/sifr3/DetectingCSSLoad>.

// sIFR.useStyleCheck = true;

// Next, activate sIFR:
sIFR.activate(bodoni);

// If you want, you can use multiple movies, like so:
//
//    var futura = { src: '/path/to/futura.swf' };
//    var garamond = { src '/path/to/garamond.swf' };
//    var rockwell = { src: '/path/to/rockwell.swf' };
//    
//    sIFR.activate(futura, garamond, rockwell);
//
// Remember, there must be *only one* `sIFR.activate()`!

// Now we can do the replacements. You can do as many as you like, but just
// as an example, we'll replace all `<h1>` elements with the Futura movie.
// 
// The first argument to `sIFR.replace` is the `futura` object we created earlier.
// The second argument is another object, on which you can specify a number of
// parameters or "keyword arguemnts". For the full list, see "Keyword arguments"
// under `replace(kwargs, mergeKwargs)` at 
// <http://wiki.novemberborn.net/sifr3/JavaScript+Methods>.
// 
// The first argument you see here is `selector`, which is a normal CSS selector.
// That means you can also do things like '#content h1' or 'h1.title'.
//
// The second argument determines what the Flash text looks like. The main text
// is styled via the `.sIFR-root` class. Here we've specified `background-color`
// of the entire Flash movie to be a light grey, and the `color` of the text to
// be red. Read more about styling at <http://wiki.novemberborn.net/sifr3/Styling>.
 
sIFR.replace(bodoni, {
  selector: '.entries .title h2, .full-entry .title h2', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:26px; color: #333333; }'  ] 
 }); 
 
 sIFR.replace(bodoni, {
  selector: '.entries .entry h2, .full-entry .post h2', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:18px; color: #1780b9; }'  ] 
 });
 
  sIFR.replace(bodoni, {
  selector: '.comment_list h2', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:24px; color: #333333; }'  ] 
 });
 
   sIFR.replace(bodoni, {
  selector: '.comment_list h3', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size: 14px; color: #333333; }'  ] 
 });
 
 
 sIFR.replace(bodoni, {
  selector: '#sidebar h3', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:16px; color: #333333; }'  ] 
 }); 
 
  sIFR.replace(bodoni, {
  selector: '.footer_nav div.prev', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:20px; color: #b3b3b3; }'  ] 
 }); 
 
   sIFR.replace(bodoni, {
  selector: '.footer_nav div.cur, .footer_nav div.cen', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:20px; color: #333333; text-align:center; }'  ] 
 }); 
 
   sIFR.replace(bodoni, {
  selector: '.footer_nav div.next', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:20px; color: #333333; text-align:right; }'  ] 

 }); 
 
    sIFR.replace(bodoni, {
  selector: '#footer h2', 
  wmode: 'transparent', 
  fixFocus: 'true', 
  css: [ '.sIFR-root {font-size:16px; color: #FFFFFF;}'  ] 
 }); 
 
 

