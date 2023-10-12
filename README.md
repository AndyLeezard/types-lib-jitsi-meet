# JitsiMeetJS Lib Types extracted & updated

This is a lightweight type-only library forked from [Jitsi's lib-jitsi-meet library](https://github.com/jitsi/lib-jitsi-meet).
It is to use Jitsi's [low-level api scripts](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ljm-api/) in a typescript project.

This library also solves the runtime `enum` errors imported from the `d.ts` files provided by the original library by converting them into string union types. Also this library prevents importing `consts` from `d.ts` files.

It has almost every necessary types to build a front-end features using Jitsi.

As indicated in their `low-level api scripts` documentation website, make sure you import the necessary scripts into the base html file of your webapp as below.
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://meet.jit.si/libs/lib-jitsi-meet.min.js"></script>
```
# Jitsi Meet API library

You can use Jitsi Meet API to create Jitsi Meet video conferences with a custom GUI.

## Installation

- [Installation guide](doc/API.md#installation)
- [Checkout the example](doc/example)

