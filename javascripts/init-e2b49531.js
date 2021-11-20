function textCopied() {
  var text = window.getSelection().toString()
  console.log(text, ' copied');
  if (text.indexOf('oi.edav') === -1) {
    return text;
  }

  var emails = text.match(/oi\.edav@[\w\._\-]+/g);

  if (!emails) {
    return text;
  }

  for (var i=0; i < emails.length; i++) {
    var email = emails[i];
    text = text.replace(email, Array.from(email).reverse().join(''));
  }

  copyToClipboard(text);
};

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.textContent = text;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("cut");
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

function initEMailLinks() {
  $('a[href^="mailto:"').each(function() {
    console.log($(this).text());
  });
}

function init() {
  initEMailLinks();
  initMap();
  document.oncopy = textCopied;
}

if (window.addEventListener)
  window.addEventListener("load", init, false);
else if (window.attachEvent)
  window.attachEvent("onload", init);
else window.onload = init;
