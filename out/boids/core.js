// Compiled by ClojureScript 0.0-2030
goog.provide('boids.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
boids.core.canvas = document.getElementById("sky");
boids.core.canvas_color = "white";
boids.core.context = boids.core.canvas.getContext("2d");
boids.core.canvas_dimensions = cljs.core.PersistentVector.fromArray([boids.core.canvas.width,boids.core.canvas.height], true);
boids.core.boids = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
boids.core.print_func = (function print_func(x){return console.log([cljs.core.str(x)].join(''));
});
boids.core.render_bird_BANG_ = (function render_bird_BANG_(context,bird,color){var vec__45441 = new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird);var x = cljs.core.nth.call(null,vec__45441,0,null);var y = cljs.core.nth.call(null,vec__45441,1,null);context.fillStyle = color;
return context.fillRect(x,y,10,10);
});
boids.core.draw_bird_BANG_ = (function draw_bird_BANG_(context,bird){return boids.core.render_bird_BANG_.call(null,context,bird,new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(bird));
});
boids.core.erase_bird_BANG_ = (function erase_bird_BANG_(context,bird){var vec__45443 = new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird);var x = cljs.core.nth.call(null,vec__45443,0,null);var y = cljs.core.nth.call(null,vec__45443,1,null);return context.clearRect(x,y,10,10);
});
boids.core.distance = (function distance(p__45444,p__45445){var vec__45448 = p__45444;var x1 = cljs.core.nth.call(null,vec__45448,0,null);var y1 = cljs.core.nth.call(null,vec__45448,1,null);var vec__45449 = p__45445;var x2 = cljs.core.nth.call(null,vec__45449,0,null);var y2 = cljs.core.nth.call(null,vec__45449,1,null);return Math.sqrt.call(null,(Math.pow.call(null,(x1 - x2),2) + Math.pow.call(null,(y1 - y2),2)));
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
sum_vectors.cljs$lang$applyTo = (function (arglist__45450){
var first_vec = cljs.core.first(arglist__45450);
var vecs = cljs.core.rest(arglist__45450);
return sum_vectors__delegate(first_vec,vecs);
});
sum_vectors.cljs$core$IFn$_invoke$arity$variadic = sum_vectors__delegate;
return sum_vectors;
})()
;
boids.core.normalize_vector = (function normalize_vector(v){var squared = cljs.core.mapv.call(null,(function (p1__45451_SHARP_){return Math.pow.call(null,p1__45451_SHARP_,2);
}),v);var summed = cljs.core.reduce.call(null,cljs.core._PLUS_,squared);var rooted = Math.sqrt.call(null,summed);return cljs.core.mapv.call(null,(function (p1__45452_SHARP_){return (p1__45452_SHARP_ / rooted);
}),v);
});
boids.core.min_separation = 20;
boids.core.direction = (function direction(from,to){return cljs.core.mapv.call(null,cljs.core._,to,from);
});
/**
* bird dest -> heading.
*/
boids.core.heading_to_dest = (function heading_to_dest(p__45453,dest){var map__45455 = p__45453;var map__45455__$1 = ((cljs.core.seq_QMARK_.call(null,map__45455))?cljs.core.apply.call(null,cljs.core.hash_map,map__45455):map__45455);var bird = map__45455__$1;var xy = cljs.core.get.call(null,map__45455__$1,new cljs.core.Keyword(null,"xy","xy",1013908083));return boids.core.direction.call(null,xy,dest);
});
/**
* [list of birds] bird -> heading.
*/
boids.core.adhere_to_center = (function adhere_to_center(neighbors,bird){var center = cljs.core.mapv.call(null,(function (p1__45456_SHARP_){return (p1__45456_SHARP_ / cljs.core.count.call(null,neighbors));
}),cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"xy","xy",1013908083),neighbors)));return boids.core.heading_to_dest.call(null,bird,center);
});
boids.core.maintain_separation = (function maintain_separation(flock,p__45459){var map__45461 = p__45459;var map__45461__$1 = ((cljs.core.seq_QMARK_.call(null,map__45461))?cljs.core.apply.call(null,cljs.core.hash_map,map__45461):map__45461);var bird = map__45461__$1;var xy = cljs.core.get.call(null,map__45461__$1,new cljs.core.Keyword(null,"xy","xy",1013908083));var birds_too_close = cljs.core.filter.call(null,(function (p1__45457_SHARP_){return (boids.core.distance.call(null,xy,new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(p1__45457_SHARP_)) < boids.core.min_separation);
}),flock);var locations = cljs.core.map.call(null,new cljs.core.Keyword(null,"xy","xy",1013908083),birds_too_close);var away_dirs = cljs.core.map.call(null,((function (birds_too_close,locations){
return (function (p1__45458_SHARP_){return boids.core.direction.call(null,p1__45458_SHARP_,xy);
});})(birds_too_close,locations))
,locations);return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,away_dirs);
});
boids.core.align_direction = (function align_direction(flock,bird){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"heading","heading",1809215860),flock));
});
boids.core.test_turn_func = (function test_turn_func(_,bird){return cljs.core.mapv.call(null,cljs.core.inc,new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(bird));
});
/**
* bird, [list of birds] -> bird with new heading.
*/
boids.core.update_heading = (function update_heading(p__45463,flock){var map__45465 = p__45463;var map__45465__$1 = ((cljs.core.seq_QMARK_.call(null,map__45465))?cljs.core.apply.call(null,cljs.core.hash_map,map__45465):map__45465);var bird = map__45465__$1;var heading = cljs.core.get.call(null,map__45465__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var turn_funcs = cljs.core.get.call(null,map__45465__$1,new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825));var flockers = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,bird),flock);var list_of_new_headings = cljs.core.map.call(null,((function (flockers){
return (function (p1__45462_SHARP_){return p1__45462_SHARP_.call(null,flockers,bird);
});})(flockers))
,turn_funcs);var new_heading = boids.core.normalize_vector.call(null,cljs.core.apply.call(null,boids.core.sum_vectors,heading,list_of_new_headings));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"heading","heading",1809215860),new_heading);
});
boids.core.update_coords = (function update_coords(p__45466){var map__45468 = p__45466;var map__45468__$1 = ((cljs.core.seq_QMARK_.call(null,map__45468))?cljs.core.apply.call(null,cljs.core.hash_map,map__45468):map__45468);var bird = map__45468__$1;var heading = cljs.core.get.call(null,map__45468__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var xy = cljs.core.get.call(null,map__45468__$1,new cljs.core.Keyword(null,"xy","xy",1013908083));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.mapv.call(null,Math.round,boids.core.sum_vectors.call(null,xy,heading)));
});
boids.core.turn_channel = cljs.core.async.chan.call(null);
var c__5494__auto___45496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_45483){var state_val_45484 = (state_45483[1]);if((state_val_45484 === 5))
{var inst_45476 = (state_45483[2]);var inst_45477 = cljs.core.async.close_BANG_.call(null,boids.core.turn_channel);var inst_45478 = boids.core.print_func.call(null,"foo");var state_45483__$1 = (function (){var statearr_45485 = state_45483;(statearr_45485[7] = inst_45478);
(statearr_45485[8] = inst_45477);
(statearr_45485[9] = inst_45476);
return statearr_45485;
})();var statearr_45486_45497 = state_45483__$1;(statearr_45486_45497[2] = null);
(statearr_45486_45497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45484 === 4))
{var inst_45472 = (state_45483[2]);var inst_45473 = cljs.core.async.chan.call(null);var inst_45474 = boids.core.turn_channel = inst_45473;var state_45483__$1 = (function (){var statearr_45487 = state_45483;(statearr_45487[10] = inst_45474);
(statearr_45487[11] = inst_45472);
return statearr_45487;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45483__$1,5,boids.core.turn_channel,"foo");
} else
{if((state_val_45484 === 3))
{var inst_45481 = (state_45483[2]);var state_45483__$1 = state_45483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45483__$1,inst_45481);
} else
{if((state_val_45484 === 2))
{var inst_45470 = cljs.core.async.timeout.call(null,500);var state_45483__$1 = state_45483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45483__$1,4,inst_45470);
} else
{if((state_val_45484 === 1))
{var state_45483__$1 = state_45483;var statearr_45488_45498 = state_45483__$1;(statearr_45488_45498[2] = null);
(statearr_45488_45498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_45492 = (new Array(12));(statearr_45492[0] = state_machine__5425__auto__);
(statearr_45492[1] = 1);
return statearr_45492;
});
var state_machine__5425__auto____1 = (function (state_45483){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_45483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e45493){if((e45493 instanceof Object))
{var ex__5428__auto__ = e45493;var statearr_45494_45499 = state_45483;(statearr_45494_45499[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45500 = state_45483;
state_45483 = G__45500;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_45483){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_45483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_45495 = f__5495__auto__.call(null);(statearr_45495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___45496);
return statearr_45495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
var c__5494__auto___45521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_45509){var state_val_45510 = (state_45509[1]);if((state_val_45510 === 4))
{var inst_45503 = (state_45509[2]);var inst_45504 = boids.core.print_func.call(null,inst_45503);var state_45509__$1 = (function (){var statearr_45511 = state_45509;(statearr_45511[7] = inst_45504);
return statearr_45511;
})();var statearr_45512_45522 = state_45509__$1;(statearr_45512_45522[2] = null);
(statearr_45512_45522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 3))
{var inst_45507 = (state_45509[2]);var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45509__$1,inst_45507);
} else
{if((state_val_45510 === 2))
{var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45509__$1,4,boids.core.turn_channel);
} else
{if((state_val_45510 === 1))
{var state_45509__$1 = state_45509;var statearr_45513_45523 = state_45509__$1;(statearr_45513_45523[2] = null);
(statearr_45513_45523[1] = 2);
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
var state_machine__5425__auto____0 = (function (){var statearr_45517 = (new Array(8));(statearr_45517[0] = state_machine__5425__auto__);
(statearr_45517[1] = 1);
return statearr_45517;
});
var state_machine__5425__auto____1 = (function (state_45509){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_45509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e45518){if((e45518 instanceof Object))
{var ex__5428__auto__ = e45518;var statearr_45519_45524 = state_45509;(statearr_45519_45524[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45525 = state_45509;
state_45509 = G__45525;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_45509){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_45509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_45520 = f__5495__auto__.call(null);(statearr_45520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___45521);
return statearr_45520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
boids.core.register_bird_BANG_ = (function register_bird_BANG_(bird){return cljs.core.swap_BANG_.call(null,boids.core.boids,cljs.core.assoc,new cljs.core.Keyword(null,"uid","uid",1014020034).cljs$core$IFn$_invoke$arity$1(bird),bird);
});
boids.core.animate_bird = (function animate_bird(context,bird){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_45576){var state_val_45577 = (state_45576[1]);if((state_val_45577 === 4))
{var inst_45558 = (state_45576[7]);var inst_45563 = (state_45576[8]);var inst_45568 = (state_45576[2]);var inst_45569 = boids.core.erase_bird_BANG_.call(null,context,inst_45558);var inst_45570 = boids.core.draw_bird_BANG_.call(null,context,inst_45563);var inst_45571 = boids.core.register_bird_BANG_.call(null,inst_45563);var inst_45558__$1 = inst_45563;var state_45576__$1 = (function (){var statearr_45578 = state_45576;(statearr_45578[9] = inst_45570);
(statearr_45578[10] = inst_45571);
(statearr_45578[11] = inst_45568);
(statearr_45578[12] = inst_45569);
(statearr_45578[7] = inst_45558__$1);
return statearr_45578;
})();var statearr_45579_45590 = state_45576__$1;(statearr_45579_45590[2] = null);
(statearr_45579_45590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45577 === 3))
{var inst_45574 = (state_45576[2]);var state_45576__$1 = state_45576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45576__$1,inst_45574);
} else
{if((state_val_45577 === 2))
{var inst_45558 = (state_45576[7]);var inst_45560 = cljs.core.deref.call(null,boids.core.boids);var inst_45561 = cljs.core.vals.call(null,inst_45560);var inst_45562 = boids.core.update_heading.call(null,inst_45558,inst_45561);var inst_45563 = boids.core.update_coords.call(null,inst_45562);var inst_45564 = new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(inst_45558);var inst_45565 = (1000 / inst_45564);var inst_45566 = cljs.core.async.timeout.call(null,inst_45565);var state_45576__$1 = (function (){var statearr_45580 = state_45576;(statearr_45580[8] = inst_45563);
return statearr_45580;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45576__$1,4,inst_45566);
} else
{if((state_val_45577 === 1))
{var inst_45558 = bird;var state_45576__$1 = (function (){var statearr_45581 = state_45576;(statearr_45581[7] = inst_45558);
return statearr_45581;
})();var statearr_45582_45591 = state_45576__$1;(statearr_45582_45591[2] = null);
(statearr_45582_45591[1] = 2);
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
var state_machine__5425__auto____0 = (function (){var statearr_45586 = (new Array(13));(statearr_45586[0] = state_machine__5425__auto__);
(statearr_45586[1] = 1);
return statearr_45586;
});
var state_machine__5425__auto____1 = (function (state_45576){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_45576);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e45587){if((e45587 instanceof Object))
{var ex__5428__auto__ = e45587;var statearr_45588_45592 = state_45576;(statearr_45588_45592[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45593 = state_45576;
state_45576 = G__45593;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_45576){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_45576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_45589 = f__5495__auto__.call(null);(statearr_45589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_45589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
var seq__45594_45598 = cljs.core.seq.call(null,cljs.core.range.call(null,50));var chunk__45595_45599 = null;var count__45596_45600 = 0;var i__45597_45601 = 0;while(true){
if((i__45597_45601 < count__45596_45600))
{var n_45602 = cljs.core._nth.call(null,chunk__45595_45599,i__45597_45601);boids.core.register_bird_BANG_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.PersistentVector.fromArray([cljs.core.rand_int.call(null,400),cljs.core.rand_int.call(null,400)], true),new cljs.core.Keyword(null,"color","color",1108746965),"black",new cljs.core.Keyword(null,"heading","heading",1809215860),cljs.core.PersistentVector.fromArray([(n_45602 * 10),(n_45602 * 10)], true),new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825),cljs.core.PersistentVector.fromArray([boids.core.adhere_to_center,boids.core.align_direction], true),new cljs.core.Keyword(null,"uid","uid",1014020034),n_45602,new cljs.core.Keyword(null,"speed","speed",1123546041),3000], true));
{
var G__45603 = seq__45594_45598;
var G__45604 = chunk__45595_45599;
var G__45605 = count__45596_45600;
var G__45606 = (i__45597_45601 + 1);
seq__45594_45598 = G__45603;
chunk__45595_45599 = G__45604;
count__45596_45600 = G__45605;
i__45597_45601 = G__45606;
continue;
}
} else
{var temp__4092__auto___45607 = cljs.core.seq.call(null,seq__45594_45598);if(temp__4092__auto___45607)
{var seq__45594_45608__$1 = temp__4092__auto___45607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45594_45608__$1))
{var c__3850__auto___45609 = cljs.core.chunk_first.call(null,seq__45594_45608__$1);{
var G__45610 = cljs.core.chunk_rest.call(null,seq__45594_45608__$1);
var G__45611 = c__3850__auto___45609;
var G__45612 = cljs.core.count.call(null,c__3850__auto___45609);
var G__45613 = 0;
seq__45594_45598 = G__45610;
chunk__45595_45599 = G__45611;
count__45596_45600 = G__45612;
i__45597_45601 = G__45613;
continue;
}
} else
{var n_45614 = cljs.core.first.call(null,seq__45594_45608__$1);boids.core.register_bird_BANG_.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.PersistentVector.fromArray([cljs.core.rand_int.call(null,400),cljs.core.rand_int.call(null,400)], true),new cljs.core.Keyword(null,"color","color",1108746965),"black",new cljs.core.Keyword(null,"heading","heading",1809215860),cljs.core.PersistentVector.fromArray([(n_45614 * 10),(n_45614 * 10)], true),new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825),cljs.core.PersistentVector.fromArray([boids.core.adhere_to_center,boids.core.align_direction], true),new cljs.core.Keyword(null,"uid","uid",1014020034),n_45614,new cljs.core.Keyword(null,"speed","speed",1123546041),3000], true));
{
var G__45615 = cljs.core.next.call(null,seq__45594_45608__$1);
var G__45616 = null;
var G__45617 = 0;
var G__45618 = 0;
seq__45594_45598 = G__45615;
chunk__45595_45599 = G__45616;
count__45596_45600 = G__45617;
i__45597_45601 = G__45618;
continue;
}
}
} else
{}
}
break;
}
var seq__45619_45623 = cljs.core.seq.call(null,cljs.core.deref.call(null,boids.core.boids));var chunk__45620_45624 = null;var count__45621_45625 = 0;var i__45622_45626 = 0;while(true){
if((i__45622_45626 < count__45621_45625))
{var b_45627 = cljs.core._nth.call(null,chunk__45620_45624,i__45622_45626);boids.core.animate_bird.call(null,boids.core.context,cljs.core.second.call(null,b_45627));
{
var G__45628 = seq__45619_45623;
var G__45629 = chunk__45620_45624;
var G__45630 = count__45621_45625;
var G__45631 = (i__45622_45626 + 1);
seq__45619_45623 = G__45628;
chunk__45620_45624 = G__45629;
count__45621_45625 = G__45630;
i__45622_45626 = G__45631;
continue;
}
} else
{var temp__4092__auto___45632 = cljs.core.seq.call(null,seq__45619_45623);if(temp__4092__auto___45632)
{var seq__45619_45633__$1 = temp__4092__auto___45632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45619_45633__$1))
{var c__3850__auto___45634 = cljs.core.chunk_first.call(null,seq__45619_45633__$1);{
var G__45635 = cljs.core.chunk_rest.call(null,seq__45619_45633__$1);
var G__45636 = c__3850__auto___45634;
var G__45637 = cljs.core.count.call(null,c__3850__auto___45634);
var G__45638 = 0;
seq__45619_45623 = G__45635;
chunk__45620_45624 = G__45636;
count__45621_45625 = G__45637;
i__45622_45626 = G__45638;
continue;
}
} else
{var b_45639 = cljs.core.first.call(null,seq__45619_45633__$1);boids.core.animate_bird.call(null,boids.core.context,cljs.core.second.call(null,b_45639));
{
var G__45640 = cljs.core.next.call(null,seq__45619_45633__$1);
var G__45641 = null;
var G__45642 = 0;
var G__45643 = 0;
seq__45619_45623 = G__45640;
chunk__45620_45624 = G__45641;
count__45621_45625 = G__45642;
i__45622_45626 = G__45643;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=core.js.map