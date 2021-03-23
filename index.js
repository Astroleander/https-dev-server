let entry = document.getElementsByTagName('body');
entry &&= entry[0];

const title = document.createElement('h1');
title.innerHTML = 'Hello HTTPS';

entry.appendChild(title);