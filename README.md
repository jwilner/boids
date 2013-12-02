Boids
=====

An implementation of [Boids](http://en.wikipedia.org/wiki/Boids) using
ClojureScript and `core.async`'s go routines. Currently five basic
behaviors are supported:

* separation
* alignment
* cohesion
* goal-seeking (boids track 'mousemove' events)
* obstacle-avoidance (click to create obstacles lasting ten seconds)

Next major step: 3D boids using WebGL!

Run
===

Build using `lein cljsbuild once` then open `index.html` in your favorite
browser.
