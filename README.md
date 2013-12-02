Boids
=====

An implementation of [Boids](http://en.wikipedia.org/wiki/Boids) using
ClojureScript and `core.async`'s go routines. Currently the three basic
behaviors are supported:

* separation
* alignment
* cohesion

Next major step: 3D boids using WebGL!

Run
===

Build using `lein cljsbuild once` then open `index.html` in your favorite
browser.
