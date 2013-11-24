(defproject boids "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/math.numeric-tower "0.0.2"]]

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "boids"
              :source-paths ["src"]
              :compiler {
                :output-to "boids.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
