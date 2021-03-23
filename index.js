let entry = document.getElementsByTagName('body');
entry &&= entry[0];

const title = document.createElement('h1');
title.innerHTML = 'Hello HTTP';

entry.appendChild(title);