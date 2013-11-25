// Compiled by ClojureScript 0.0-2030
goog.provide('boids.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
boids.core.canvas = document.getElementById("sky");
boids.core.canvas_color = "white";
boids.core.context = boids.core.canvas.getContext("2d");
boids.core.canvas_dimensions = cljs.core.PersistentVector.fromArray([boids.core.canvas.width,boids.core.canvas.height], true);
var vec__16985_16986 = boids.core.canvas_dimensions;var x_16987 = cljs.core.nth.call(null,vec__16985_16986,0,null);var y_16988 = cljs.core.nth.call(null,vec__16985_16986,1,null);boids.core.context.fillStyle = "white";
boids.core.context.fillRect(0,0,x_16987,y_16988);
boids.core.print_func = (function print_func(x){return console.log([cljs.core.str(x)].join(''));
});
boids.core.render_bird_BANG_ = (function render_bird_BANG_(context,bird,color){var vec__16990 = new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird);var x = cljs.core.nth.call(null,vec__16990,0,null);var y = cljs.core.nth.call(null,vec__16990,1,null);context.fillStyle = color;
return context.fillRect(x,y,10,10);
});
boids.core.draw_bird_BANG_ = (function draw_bird_BANG_(context,bird){boids.core.print_func.call(null,"Drawing: ");
boids.core.print_func.call(null,new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird));
return boids.core.render_bird_BANG_.call(null,context,bird,new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(bird));
});
boids.core.erase_bird_BANG_ = (function erase_bird_BANG_(context,bird){boids.core.print_func.call(null,"Erasing: ");
boids.core.print_func.call(null,new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird));
var vec__16992 = new cljs.core.Keyword(null,"xy","xy",1013908083).cljs$core$IFn$_invoke$arity$1(bird);var x = cljs.core.nth.call(null,vec__16992,0,null);var y = cljs.core.nth.call(null,vec__16992,1,null);return context.clearRect(x,y,10,10);
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
sum_vectors.cljs$lang$applyTo = (function (arglist__16993){
var first_vec = cljs.core.first(arglist__16993);
var vecs = cljs.core.rest(arglist__16993);
return sum_vectors__delegate(first_vec,vecs);
});
sum_vectors.cljs$core$IFn$_invoke$arity$variadic = sum_vectors__delegate;
return sum_vectors;
})()
;
boids.core.normalize_vector = (function normalize_vector(v){var squared = cljs.core.mapv.call(null,(function (p1__16994_SHARP_){return Math.pow.call(null,p1__16994_SHARP_,2);
}),v);var summed = cljs.core.reduce.call(null,cljs.core._PLUS_,squared);var rooted = Math.sqrt.call(null,summed);return cljs.core.mapv.call(null,(function (p1__16995_SHARP_){return (p1__16995_SHARP_ / rooted);
}),v);
});
boids.core.test_turn_func = (function test_turn_func(bird){return cljs.core.mapv.call(null,cljs.core.inc,new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(bird));
});
boids.core.update_heading = (function update_heading(p__16997){var map__16999 = p__16997;var map__16999__$1 = ((cljs.core.seq_QMARK_.call(null,map__16999))?cljs.core.apply.call(null,cljs.core.hash_map,map__16999):map__16999);var bird = map__16999__$1;var heading = cljs.core.get.call(null,map__16999__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var turn_funcs = cljs.core.get.call(null,map__16999__$1,new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825));var list_of_new_headings = cljs.core.map.call(null,(function (p1__16996_SHARP_){return p1__16996_SHARP_.call(null,bird);
}),turn_funcs);var new_heading = boids.core.normalize_vector.call(null,cljs.core.apply.call(null,boids.core.sum_vectors,heading,list_of_new_headings));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"heading","heading",1809215860),new_heading);
});
boids.core.update_coords = (function update_coords(p__17000){var map__17002 = p__17000;var map__17002__$1 = ((cljs.core.seq_QMARK_.call(null,map__17002))?cljs.core.apply.call(null,cljs.core.hash_map,map__17002):map__17002);var bird = map__17002__$1;var heading = cljs.core.get.call(null,map__17002__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var xy = cljs.core.get.call(null,map__17002__$1,new cljs.core.Keyword(null,"xy","xy",1013908083));return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.mapv.call(null,Math.round,boids.core.sum_vectors.call(null,xy,heading)));
});
boids.core.animate_bird = (function animate_bird(context,bird){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_17047){var state_val_17048 = (state_17047[1]);if((state_val_17048 === 4))
{var inst_17032 = (state_17047[7]);var inst_17035 = (state_17047[8]);var inst_17040 = (state_17047[2]);var inst_17041 = boids.core.erase_bird_BANG_.call(null,context,inst_17032);var inst_17042 = boids.core.draw_bird_BANG_.call(null,context,inst_17035);var inst_17032__$1 = inst_17035;var state_17047__$1 = (function (){var statearr_17049 = state_17047;(statearr_17049[7] = inst_17032__$1);
(statearr_17049[9] = inst_17040);
(statearr_17049[10] = inst_17041);
(statearr_17049[11] = inst_17042);
return statearr_17049;
})();var statearr_17050_17061 = state_17047__$1;(statearr_17050_17061[2] = null);
(statearr_17050_17061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17048 === 3))
{var inst_17045 = (state_17047[2]);var state_17047__$1 = state_17047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17047__$1,inst_17045);
} else
{if((state_val_17048 === 2))
{var inst_17032 = (state_17047[7]);var inst_17034 = boids.core.update_heading.call(null,inst_17032);var inst_17035 = boids.core.update_coords.call(null,inst_17034);var inst_17036 = new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(inst_17032);var inst_17037 = (1000 / inst_17036);var inst_17038 = cljs.core.async.timeout.call(null,inst_17037);var state_17047__$1 = (function (){var statearr_17051 = state_17047;(statearr_17051[8] = inst_17035);
return statearr_17051;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17047__$1,4,inst_17038);
} else
{if((state_val_17048 === 1))
{var inst_17032 = bird;var state_17047__$1 = (function (){var statearr_17052 = state_17047;(statearr_17052[7] = inst_17032);
return statearr_17052;
})();var statearr_17053_17062 = state_17047__$1;(statearr_17053_17062[2] = null);
(statearr_17053_17062[1] = 2);
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
var state_machine__5425__auto____0 = (function (){var statearr_17057 = (new Array(12));(statearr_17057[0] = state_machine__5425__auto__);
(statearr_17057[1] = 1);
return statearr_17057;
});
var state_machine__5425__auto____1 = (function (state_17047){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_17047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e17058){if((e17058 instanceof Object))
{var ex__5428__auto__ = e17058;var statearr_17059_17063 = state_17047;(statearr_17059_17063[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17064 = state_17047;
state_17047 = G__17064;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_17047){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_17047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_17060 = f__5495__auto__.call(null);(statearr_17060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_17060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
console.log("Hello world!");
boids.core.animate_bird.call(null,boids.core.context,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xy","xy",1013908083),cljs.core.PersistentVector.fromArray([0,0], true),new cljs.core.Keyword(null,"color","color",1108746965),"black",new cljs.core.Keyword(null,"heading","heading",1809215860),cljs.core.PersistentVector.fromArray([0,0], true),new cljs.core.Keyword(null,"turn-funcs","turn-funcs",4308511825),cljs.core.PersistentVector.fromArray([boids.core.test_turn_func], true),new cljs.core.Keyword(null,"speed","speed",1123546041),30], true));

//# sourceMappingURL=core.js.map