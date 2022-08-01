/**
 * @file mofron-event-mousemove/index.js
 * @brief mousemove event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - event: "mousemove" event object by addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('MouseMove');

	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                'mousemove',
                (evt) => {
                    try {
                        evt_obj.execListener(evt);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
