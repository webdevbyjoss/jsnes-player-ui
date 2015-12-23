/*
JSNES, based on Jamie Sanders' vNES
Copyright (C) 2010 Ben Firshman

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Keyboard events are bound in the UI
JSNES.Keyboard = function() {
    var i;
    this.timer1 = null; // used for turbo buttons (joystic1 only)

    this.key = {
        on: 0x41,
        off: 0x40
    };

    this.turboMode = {
        a: false,
        b: false
    };

    this.keys = {
        KEY_A: 0,
        KEY_B: 1,
        KEY_SELECT: 2,
        KEY_START: 3,
        KEY_UP: 4,
        KEY_DOWN: 5,
        KEY_LEFT: 6,
        KEY_RIGHT: 7,
        KEY_A_TURBO: 8,
        KEY_B_TURBO: 9
    };

    this.state1 = new Array(8);
    for (i = 0; i < this.state1.length; i++) {
        this.state1[i] = this.key.off;
    }
    this.state2 = new Array(8);
    for (i = 0; i < this.state2.length; i++) {
        this.state2[i] = this.key.off;
    }

    /* Left hand setup */
    /*
    this.joystic1 = {
        88: this.keys.KEY_A,// X
        89: this.keys.KEY_B,// Y (Central European keyboard)
        90: this.keys.KEY_B,// Z
        17: this.keys.KEY_SELECT,// Right Ctrl
        13: this.keys.KEY_START,// Enter
        38: this.keys.KEY_UP,// Up
        40: this.keys.KEY_DOWN,// Down
        37: this.keys.KEY_LEFT,// Left
        39: this.keys.KEY_RIGHT// Right
    };
    */

    /* Right hand setup */
    this.joystic1 = {
        222: this.keys.KEY_A,// A
        219: this.keys.KEY_A_TURBO,// A turbo

        186: this.keys.KEY_B,// B
        80: this.keys.KEY_B_TURBO,// B

        32: this.keys.KEY_SELECT,// Right Ctrl
        13: this.keys.KEY_START,// Enter
        87: this.keys.KEY_UP,// Up
        83: this.keys.KEY_DOWN,// Down
        65: this.keys.KEY_LEFT,// Left
        68: this.keys.KEY_RIGHT// Right
    };

    this.joystic2 = {
        103: this.keys.KEY_A,// Num-7
        105: this.keys.KEY_B,// Num-9
        99: this.keys.KEY_SELECT,// Num-3
        97: this.keys.KEY_START,// Num-1
        104: this.keys.KEY_UP,// Num-8
        98: this.keys.KEY_DOWN,// Num-2
        100: this.keys.KEY_LEFT,// Num-4
        102: this.keys.KEY_RIGHT// Num-6
    };
};

JSNES.Keyboard.prototype = {

    setKey: function(key, value) {
        console.log(key, value);

        if (key in this.joystic1) {

            // check turbo buttons
            if (this.joystic1[key] === this.keys.KEY_A_TURBO ||
                this.joystic1[key] === this.keys.KEY_B_TURBO) {

                // enable/disable turbo modes
                if (this.joystic1[key] === this.keys.KEY_A_TURBO) {
                    this.turboMode.a = (value === this.key.on);
                }
                if (this.joystic1[key] === this.keys.KEY_B_TURBO) {
                    this.turboMode.b = (value === this.key.on);
                }

                // update buttons states
                this.state1[this.keys.KEY_A] = this.turboMode.a ? this.key.on : this.key.off;
                this.state1[this.keys.KEY_B] = this.turboMode.b ? this.key.on : this.key.off;
                clearTimeout(this.timer1);

                if (this.turboMode.a === false &&
                  this.turboMode.b === false) {
                    return;
                }
                this.processTurbo();
                return;
            }

            this.state1[this.joystic1[key]] = value;
            return false; // preventDefault
        }
        if (key in this.joystic2) {
            this.state2[this.joystic2[key]] = value;
            return false; // preventDefault
        }
        return true;
    },

    processTurbo: function() {
        if (this.turboMode.a) {
            this.state1[this.keys.KEY_A] = (this.state1[this.keys.KEY_A] === this.key.off ? this.key.on : this.key.off);
        }
        if (this.turboMode.b) {
          this.state1[this.keys.KEY_B] = (this.state1[this.keys.KEY_B] === this.key.off ? this.key.on : this.key.off);
        }
        clearTimeout(this.timer1);
        this.timer1 = setTimeout(this.processTurbo.bind(this), 20);
    },

    keyDown: function(evt) {
        if (!this.setKey(evt.keyCode, this.key.on) && evt.preventDefault) {
            evt.preventDefault();
        }
    },

    keyUp: function(evt) {
        if (!this.setKey(evt.keyCode, this.key.off) && evt.preventDefault) {
            evt.preventDefault();
        }
    },

    keyPress: function(evt) {
        evt.preventDefault();
    }
};
