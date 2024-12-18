/*
 * Copyright (C) 2018 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
*/

const isInBrowser = false;
if (typeof console === 'undefined')
    var console = {}
if (typeof console.log === 'undefined')
    console.log = print
if (typeof console.error === 'undefined')
    console.error = print

if (typeof performance === 'undefined') {
    var performance = {};
}
if (typeof performance.now === 'undefined') {
    performance.now = Date.now.bind(Date);
}
if (typeof performance.mark === 'undefined') {
    performance.mark = function (){};
}
if (typeof performance.measure === 'undefined') {
    performance.measure = function (){};
}

const isD8 = typeof Realm !== "undefined";
if (isD8)
    globalThis.readFile = read;

const isSpiderMonkey = typeof newGlobal !== "undefined";
if (isSpiderMonkey)
    globalThis.readFile = readRelativeToScript;

if (typeof testList === "undefined")
    testList = [];

if (typeof arguments != "undefined" && arguments.length > 0) {
    testList = arguments.slice();
}

if (typeof testIterationCount === "undefined")
    testIterationCount = undefined;

if (typeof runMode !== "undefined" && runMode == "RAMification")
    RAMification = true;
else
    RAMification = false;

load("./JetStreamDriver.js");

async function runJetStream() {
    try {
        await JetStream.initialize();
        JetStream.start();
    } catch (e) {
        console.log("JetStream2 failed: " + e);
    }
}
runJetStream();
