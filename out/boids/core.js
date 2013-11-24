// Compiled by ClojureScript 0.0-2030
goog.provide('boids.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
boids.core.canvas = document.getElementById("sky");
boids.core.canvas_color = "white";
boids.core.context = boids.core.canvas.getContext("2d");
boids.core.canvas_dimensions = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),boids.core.canvas.width,new cljs.core.Keyword(null,"y","y",1013904363),boids.core.canvas.height], true);
boids.core.render_bird_BANG_ = (function render_bird_BANG_(context,bird,color){var vec__19288 = new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird);var x = cljs.core.nth.call(null,vec__19288,0,null);var y = cljs.core.nth.call(null,vec__19288,1,null);context.fillStyle = color;
return context.fillRect(x,y,10,10);
});
boids.core.draw_bird_BANG_ = (function draw_bird_BANG_(context,bird){return boids.core.render_bird_BANG_.call(null,context,bird,"black");
});
boids.core.erase_bird_BANG_ = (function erase_bird_BANG_(context,bird){return boids.core.render_bird_BANG_.call(null,context,bird,boids.core.canvas_color);
});
boids.core.print_func = (function print_func(x){return console.log([cljs.core.str(x)].join(''));
});
/**
* @param {...*} var_args
*/
boids.core.sum_vectors = (function() { 
var sum_vectors__delegate = function (first_vec,vecs){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,first_vec,vecs);
};
var sum_vectors = function (first_vec,var_args){
var vecs = null;if (arguments.length > 1) {
  vecs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sum_vectors__delegate.call(this,first_vec,vecs);};
sum_vectors.cljs$lang$maxFixedArity = 1;
sum_vectors.cljs$lang$applyTo = (function (arglist__19289){
var first_vec = cljs.core.first(arglist__19289);
var vecs = cljs.core.rest(arglist__19289);
return sum_vectors__delegate(first_vec,vecs);
});
sum_vectors.cljs$core$IFn$_invoke$arity$variadic = sum_vectors__delegate;
return sum_vectors;
})()
;
boids.core.normalize_vector = (function normalize_vector(v){var squared = cljs.core.mapv.call(null,(function (p1__19290_SHARP_){return Math.pow.call(null,p1__19290_SHARP_,2);
}),v);var summed = cljs.core.reduce.call(null,cljs.core._PLUS_,squared);var rooted = Math.sqrt.call(null,summed);boids.core.print_func.call(null,summed);
return cljs.core.mapv.call(null,(function (p1__19291_SHARP_){return (p1__19291_SHARP_ / rooted);
}),v);
});
boids.core.test_turn_func = (function test_turn_func(bird){return cljs.core.mapv.call(null,cljs.core.inc,new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(bird));
});
boids.core.update_heading = (function update_heading(p__19293){var map__19295 = p__19293;var map__19295__$1 = ((cljs.core.seq_QMARK_.call(null,map__19295))?cljs.core.apply.call(null,cljs.core.hash_map,map__19295):map__19295);var bird = map__19295__$1;var heading = cljs.core.get.call(null,map__19295__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var turn_funcs = cljs.core.get.call(null,map__19295__$1,new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825));var list_of_new_headings = cljs.core.map.call(null,(function (p1__19292_SHARP_){return p1__19292_SHARP_.call(null,bird);
}),turn_funcs);var new_heading = boids.core.normalize_vector.call(null,boids.core.sum_vectors.call(null,heading,list_of_new_headings));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"heading","heading",1809215860),new_heading);
});
boids.core.update_coords = (function update_coords(p__19296){var map__19298 = p__19296;var map__19298__$1 = ((cljs.core.seq_QMARK_.call(null,map__19298))?cljs.core.apply.call(null,cljs.core.hash_map,map__19298):map__19298);var bird = map__19298__$1;var heading = cljs.core.get.call(null,map__19298__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var xy = cljs.core.get.call(null,map__19298__$1,new cljs.core.Keyword(null,"xy","xy",1013908083));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"xy","xy",1013908083),boids.core.sum_vectors.call(null,xy,heading));
});
boids.core.animate_bird = (function animate_bird(context,bird){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_19343){var state_val_19344 = (state_19343[1]);if((state_val_19344 === 4))
{var inst_19331 = (state_19343[7]);var inst_19328 = (state_19343[8]);var inst_19336 = (state_19343[2]);var inst_19337 = boids.core.erase_bird_BANG_.call(null,context,inst_19328);var inst_19338 = boids.core.draw_bird_BANG_.call(null,context,inst_19331);var inst_19328__$1 = inst_19331;var state_19343__$1 = (function (){var statearr_19345 = state_19343;(statearr_19345[9] = inst_19337);
(statearr_19345[10] = inst_19338);
(statearr_19345[11] = inst_19336);
(statearr_19345[8] = inst_19328__$1);
return statearr_19345;
})();var statearr_19346_19357 = state_19343__$1;(statearr_19346_19357[2] = null);
(statearr_19346_19357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19344 === 3))
{var inst_19341 = (state_19343[2]);var state_19343__$1 = state_19343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19343__$1,inst_19341);
} else
{if((state_val_19344 === 2))
{var inst_19328 = (state_19343[8]);var inst_19330 = boids.core.update_heading.call(null,inst_19328);var inst_19331 = boids.core.update_coords.call(null,inst_19330);var inst_19332 = new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(inst_19328);var inst_19333 = (1000 / inst_19332);var inst_19334 = cljs.core.async.timeout.call(null,inst_19333);var state_19343__$1 = (function (){var statearr_19347 = state_19343;(statearr_19347[7] = inst_19331);
return statearr_19347;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19343__$1,4,inst_19334);
} else
{if((state_val_19344 === 1))
{var inst_19328 = bird;var state_19343__$1 = (function (){var statearr_19348 = state_19343;(statearr_19348[8] = inst_19328);
return statearr_19348;
})();var statearr_19349_19358 = state_19343__$1;(statearr_19349_19358[2] = null);
(statearr_19349_19358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_19353 = (new Array(12));(statearr_19353[0] = state_machine__5425__auto__);
(statearr_19353[1] = 1);
return statearr_19353;
});
var state_machine__5425__auto____1 = (function (state_19343){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_19343);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e19354){if((e19354 instanceof Object))
{var ex__5428__auto__ = e19354;var statearr_19355_19359 = state_19343;(statearr_19355_19359[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19343);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19360 = state_19343;
state_19343 = G__19360;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_19356 = f__5495__auto__.call(null);(statearr_19356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_19356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
console.log("Hello world!");
boids.core.animate_bird.call(null,boids.core.context,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.PersistentVector.fromArray([0,0], true),new cljs.core.Keyword(null,"color","color",1108746965),"black",new cljs.core.Keyword(null,"heading","heading",1809215860),cljs.core.PersistentVector.fromArray([0,0], true),new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"speed","speed",1123546041),30], true));

//# sourceMappingURL=core.js.map