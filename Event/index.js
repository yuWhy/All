class Event {
    constructor() {
        this.handler = {};
    }
    on = (type, handler, once=false) => {
       if(!(handler instanceof Function)) {
           throw new Error('handler must be a function');
       }
       if(!this.handler[type]) {
           this.handler[type] = []
       }
       if(!this.handler[type].includes(handler)) {
           this.handler[type].push(handler);
           if(once) {
               handler.once = true;
           }
       }
    }

    off = (type, handler) => {
        if(!handler) {
            this.handler[type] = [];
            return false;
        }
        this.handler[type] = this.handler[type].filter(fn=>handler !== fn);
    }

    trigger = (type, eventData={}, _this=this) => {
        this.handler[type].forEach(fn => {
            fn.call(_this, eventData);
            if(fn.once) {
                this.off(type, fn);
            }
        })
    }
    once = (type, fn) => {
        this.on(type, fn, true);
    }
}