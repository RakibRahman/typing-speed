```
 milliseconds += 10;
let dateTimer = new Date(milliseconds);
watch.innerHTML =
('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
}, 10);
```
