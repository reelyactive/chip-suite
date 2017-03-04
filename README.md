chip-suite
==========


Prerequisites
-------------

You will require a [CHIP Pro](https://getchip.com/pages/chippro) with integrated Bluetooth Low Energy radio.  See our [Make a C.H.I.P. Pro Hub](https://reelyactive.github.io/make-a-chip-hub.html) tutorial for detailed step-by-step instructions.


Installation
------------

Clone the repo.

    npm install

(Fetching the repo using wget is described in the [tutorial](https://reelyactive.github.io/make-a-chip-hub.html))


Operation
---------

Run the program from the root of the repository:

    sudo node chip-suite

(This step is also fully documented in the [tutorial](https://reelyactive.github.io/make-a-chip-hub.html))


How do I know it's working?
---------------------------

The CHIP Pro will serve up a webpage which can be accessed over the local network via http://xxx.xxx.xxx.xxx where the x values would be replaced by the CHIP's IP address.


License
-------

MIT License

Copyright (c) 2017 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

