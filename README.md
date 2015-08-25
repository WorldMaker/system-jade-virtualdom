# system-jade-virtualdom

This is an ES6/SystemJS loader plugin for [jade-virtualdom](https://github.com/Swatinem/jade-virtualdom), which takes in a Jade template and outputs
a [virtual-dom](https://github.com/Matt-Esch/virtual-dom) `VTree`.

## Install

```sh
$ jspm install jade-vd=github:WorldMaker/system-jade-virtualdom
# Force a higher version of jade-virtualdom's dep "with" as it was not working in my browser
# TODO: Send PR to upstream or find better solution
$ jspm install npm:with@^5.0.0
$ jspm resolve --only npm:with@^5.0.0
```

## Usage

If you install with the suggested alias above of `jade-vd` then you can use something like this (ESM module format):

```js
import view from 'views/loading.jade!jade-vd'

let vtree = view({
	// Context object
	test: "Hello",
})
```
