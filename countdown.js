function Timer(seconds, callbacks) {
    this.timer = 0;
    this.seconds = seconds;
    this.callbacks = callbacks;
    this.stopped = false;

    this.count(seconds);
}

Timer.prototype = {
    constructor: Timer,

    count: function (current) {
        obj = this;

        if ((current > -1) && !obj.stopped) {
            obj.callbacks.onCount(current);

            timer = setTimeout(function () {
                obj.count(current - 1);
            }, 1000);
        } else {
            obj.callbacks.onEnd(this);
        }
    },

    reset: function () {
        this.stopped = true;
    },

    restart: function () {
        this.stopped = false;
        this.count(seconds);
    }
};