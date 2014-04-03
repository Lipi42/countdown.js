countdown.js
============

A timer class for javascript that counts down one second at a time, and executes code on every tick.

Usage:
```
firstTimer = new Timer(10, {
    onCount: function (second) {
        $("#timer").html(second);
    },
    onEnd: function () {
        alert("done!");
    }
});
```

