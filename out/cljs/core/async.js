// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14146 = (function (f,fn_handler,meta14147){
this.f = f;
this.fn_handler = fn_handler;
this.meta14147 = meta14147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14146.cljs$lang$type = true;
cljs.core.async.t14146.cljs$lang$ctorStr = "cljs.core.async/t14146";
cljs.core.async.t14146.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14146");
});
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14148){var self__ = this;
var _14148__$1 = this;return self__.meta14147;
});
cljs.core.async.t14146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14148,meta14147__$1){var self__ = this;
var _14148__$1 = this;return (new cljs.core.async.t14146(self__.f,self__.fn_handler,meta14147__$1));
});
cljs.core.async.__GT_t14146 = (function __GT_t14146(f__$1,fn_handler__$1,meta14147){return (new cljs.core.async.t14146(f__$1,fn_handler__$1,meta14147));
});
}
return (new cljs.core.async.t14146(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14150 = buff;if(G__14150)
{var bit__3752__auto__ = null;if(cljs.core.truth_((function (){var or__3133__auto__ = bit__3752__auto__;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return G__14150.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14150);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14151 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14151);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14151);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3124__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3922__auto___14152 = n;var x_14153 = 0;while(true){
if((x_14153 < n__3922__auto___14152))
{(a[x_14153] = 0);
{
var G__14154 = (x_14153 + 1);
x_14153 = G__14154;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14155 = (i + 1);
i = G__14155;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14159 = (function (flag,alt_flag,meta14160){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14160 = meta14160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14159.cljs$lang$type = true;
cljs.core.async.t14159.cljs$lang$ctorStr = "cljs.core.async/t14159";
cljs.core.async.t14159.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14159");
});
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14161){var self__ = this;
var _14161__$1 = this;return self__.meta14160;
});
cljs.core.async.t14159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14161,meta14160__$1){var self__ = this;
var _14161__$1 = this;return (new cljs.core.async.t14159(self__.flag,self__.alt_flag,meta14160__$1));
});
cljs.core.async.__GT_t14159 = (function __GT_t14159(flag__$1,alt_flag__$1,meta14160){return (new cljs.core.async.t14159(flag__$1,alt_flag__$1,meta14160));
});
}
return (new cljs.core.async.t14159(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14165 = (function (cb,flag,alt_handler,meta14166){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14166 = meta14166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14165.cljs$lang$type = true;
cljs.core.async.t14165.cljs$lang$ctorStr = "cljs.core.async/t14165";
cljs.core.async.t14165.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14165");
});
cljs.core.async.t14165.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14167){var self__ = this;
var _14167__$1 = this;return self__.meta14166;
});
cljs.core.async.t14165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14167,meta14166__$1){var self__ = this;
var _14167__$1 = this;return (new cljs.core.async.t14165(self__.cb,self__.flag,self__.alt_handler,meta14166__$1));
});
cljs.core.async.__GT_t14165 = (function __GT_t14165(cb__$1,flag__$1,alt_handler__$1,meta14166){return (new cljs.core.async.t14165(cb__$1,flag__$1,alt_handler__$1,meta14166));
});
}
return (new cljs.core.async.t14165(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14168_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14168_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3133__auto__ = wport;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__14169 = (i + 1);
i = G__14169;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3133__auto__ = ret;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3124__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3124__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14170){var map__14172 = p__14170;var map__14172__$1 = ((cljs.core.seq_QMARK_.call(null,map__14172))?cljs.core.apply.call(null,cljs.core.hash_map,map__14172):map__14172);var opts = map__14172__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14170 = null;if (arguments.length > 1) {
  p__14170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14170);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14173){
var ports = cljs.core.first(arglist__14173);
var p__14170 = cljs.core.rest(arglist__14173);
return alts_BANG___delegate(ports,p__14170);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14181 = (function (ch,f,map_LT_,meta14182){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14182 = meta14182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14181.cljs$lang$type = true;
cljs.core.async.t14181.cljs$lang$ctorStr = "cljs.core.async/t14181";
cljs.core.async.t14181.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14181");
});
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14184 = (function (fn1,_,meta14182,ch,f,map_LT_,meta14185){
this.fn1 = fn1;
this._ = _;
this.meta14182 = meta14182;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14185 = meta14185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14184.cljs$lang$type = true;
cljs.core.async.t14184.cljs$lang$ctorStr = "cljs.core.async/t14184";
cljs.core.async.t14184.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14184");
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14174_SHARP_){return f1.call(null,(((p1__14174_SHARP_ == null))?null:self__.f.call(null,p1__14174_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14186){var self__ = this;
var _14186__$1 = this;return self__.meta14185;
});
cljs.core.async.t14184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14186,meta14185__$1){var self__ = this;
var _14186__$1 = this;return (new cljs.core.async.t14184(self__.fn1,self__._,self__.meta14182,self__.ch,self__.f,self__.map_LT_,meta14185__$1));
});
cljs.core.async.__GT_t14184 = (function __GT_t14184(fn1__$1,___$2,meta14182__$1,ch__$2,f__$2,map_LT___$2,meta14185){return (new cljs.core.async.t14184(fn1__$1,___$2,meta14182__$1,ch__$2,f__$2,map_LT___$2,meta14185));
});
}
return (new cljs.core.async.t14184(fn1,___$1,self__.meta14182,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3124__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14183){var self__ = this;
var _14183__$1 = this;return self__.meta14182;
});
cljs.core.async.t14181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14183,meta14182__$1){var self__ = this;
var _14183__$1 = this;return (new cljs.core.async.t14181(self__.ch,self__.f,self__.map_LT_,meta14182__$1));
});
cljs.core.async.__GT_t14181 = (function __GT_t14181(ch__$1,f__$1,map_LT___$1,meta14182){return (new cljs.core.async.t14181(ch__$1,f__$1,map_LT___$1,meta14182));
});
}
return (new cljs.core.async.t14181(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14190 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14190 = (function (ch,f,map_GT_,meta14191){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14191 = meta14191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14190.cljs$lang$type = true;
cljs.core.async.t14190.cljs$lang$ctorStr = "cljs.core.async/t14190";
cljs.core.async.t14190.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14190");
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14192){var self__ = this;
var _14192__$1 = this;return self__.meta14191;
});
cljs.core.async.t14190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14192,meta14191__$1){var self__ = this;
var _14192__$1 = this;return (new cljs.core.async.t14190(self__.ch,self__.f,self__.map_GT_,meta14191__$1));
});
cljs.core.async.__GT_t14190 = (function __GT_t14190(ch__$1,f__$1,map_GT___$1,meta14191){return (new cljs.core.async.t14190(ch__$1,f__$1,map_GT___$1,meta14191));
});
}
return (new cljs.core.async.t14190(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14196 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14196 = (function (ch,p,filter_GT_,meta14197){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14197 = meta14197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14196.cljs$lang$type = true;
cljs.core.async.t14196.cljs$lang$ctorStr = "cljs.core.async/t14196";
cljs.core.async.t14196.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14196");
});
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14198){var self__ = this;
var _14198__$1 = this;return self__.meta14197;
});
cljs.core.async.t14196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14198,meta14197__$1){var self__ = this;
var _14198__$1 = this;return (new cljs.core.async.t14196(self__.ch,self__.p,self__.filter_GT_,meta14197__$1));
});
cljs.core.async.__GT_t14196 = (function __GT_t14196(ch__$1,p__$1,filter_GT___$1,meta14197){return (new cljs.core.async.t14196(ch__$1,p__$1,filter_GT___$1,meta14197));
});
}
return (new cljs.core.async.t14196(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14281 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14260){var state_val_14261 = (state_14260[1]);if((state_val_14261 === 1))
{var state_14260__$1 = state_14260;var statearr_14262_14282 = state_14260__$1;(statearr_14262_14282[2] = null);
(statearr_14262_14282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 2))
{var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14260__$1,4,ch);
} else
{if((state_val_14261 === 3))
{var inst_14258 = (state_14260[2]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14260__$1,inst_14258);
} else
{if((state_val_14261 === 4))
{var inst_14242 = (state_14260[7]);var inst_14242__$1 = (state_14260[2]);var inst_14243 = (inst_14242__$1 == null);var state_14260__$1 = (function (){var statearr_14263 = state_14260;(statearr_14263[7] = inst_14242__$1);
return statearr_14263;
})();if(cljs.core.truth_(inst_14243))
{var statearr_14264_14283 = state_14260__$1;(statearr_14264_14283[1] = 5);
} else
{var statearr_14265_14284 = state_14260__$1;(statearr_14265_14284[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 5))
{var inst_14245 = cljs.core.async.close_BANG_.call(null,out);var state_14260__$1 = state_14260;var statearr_14266_14285 = state_14260__$1;(statearr_14266_14285[2] = inst_14245);
(statearr_14266_14285[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 6))
{var inst_14242 = (state_14260[7]);var inst_14247 = p.call(null,inst_14242);var state_14260__$1 = state_14260;if(cljs.core.truth_(inst_14247))
{var statearr_14267_14286 = state_14260__$1;(statearr_14267_14286[1] = 8);
} else
{var statearr_14268_14287 = state_14260__$1;(statearr_14268_14287[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 7))
{var inst_14256 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14269_14288 = state_14260__$1;(statearr_14269_14288[2] = inst_14256);
(statearr_14269_14288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 8))
{var inst_14242 = (state_14260[7]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14260__$1,11,out,inst_14242);
} else
{if((state_val_14261 === 9))
{var state_14260__$1 = state_14260;var statearr_14270_14289 = state_14260__$1;(statearr_14270_14289[2] = null);
(statearr_14270_14289[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 10))
{var inst_14253 = (state_14260[2]);var state_14260__$1 = (function (){var statearr_14271 = state_14260;(statearr_14271[8] = inst_14253);
return statearr_14271;
})();var statearr_14272_14290 = state_14260__$1;(statearr_14272_14290[2] = null);
(statearr_14272_14290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 11))
{var inst_14250 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14273_14291 = state_14260__$1;(statearr_14273_14291[2] = inst_14250);
(statearr_14273_14291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14277 = (new Array(9));(statearr_14277[0] = state_machine__5425__auto__);
(statearr_14277[1] = 1);
return statearr_14277;
});
var state_machine__5425__auto____1 = (function (state_14260){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14278){if((e14278 instanceof Object))
{var ex__5428__auto__ = e14278;var statearr_14279_14292 = state_14260;(statearr_14279_14292[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14293 = state_14260;
state_14260 = G__14293;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14260){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14280 = f__5495__auto__.call(null);(statearr_14280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14281);
return statearr_14280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14445){var state_val_14446 = (state_14445[1]);if((state_val_14446 === 1))
{var state_14445__$1 = state_14445;var statearr_14447_14484 = state_14445__$1;(statearr_14447_14484[2] = null);
(statearr_14447_14484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 2))
{var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14445__$1,4,in$);
} else
{if((state_val_14446 === 3))
{var inst_14443 = (state_14445[2]);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14445__$1,inst_14443);
} else
{if((state_val_14446 === 4))
{var inst_14391 = (state_14445[7]);var inst_14391__$1 = (state_14445[2]);var inst_14392 = (inst_14391__$1 == null);var state_14445__$1 = (function (){var statearr_14448 = state_14445;(statearr_14448[7] = inst_14391__$1);
return statearr_14448;
})();if(cljs.core.truth_(inst_14392))
{var statearr_14449_14485 = state_14445__$1;(statearr_14449_14485[1] = 5);
} else
{var statearr_14450_14486 = state_14445__$1;(statearr_14450_14486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 5))
{var inst_14394 = cljs.core.async.close_BANG_.call(null,out);var state_14445__$1 = state_14445;var statearr_14451_14487 = state_14445__$1;(statearr_14451_14487[2] = inst_14394);
(statearr_14451_14487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 6))
{var inst_14391 = (state_14445[7]);var inst_14396 = f.call(null,inst_14391);var inst_14401 = cljs.core.seq.call(null,inst_14396);var inst_14402 = inst_14401;var inst_14403 = null;var inst_14404 = 0;var inst_14405 = 0;var state_14445__$1 = (function (){var statearr_14452 = state_14445;(statearr_14452[8] = inst_14404);
(statearr_14452[9] = inst_14405);
(statearr_14452[10] = inst_14403);
(statearr_14452[11] = inst_14402);
return statearr_14452;
})();var statearr_14453_14488 = state_14445__$1;(statearr_14453_14488[2] = null);
(statearr_14453_14488[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 7))
{var inst_14441 = (state_14445[2]);var state_14445__$1 = state_14445;var statearr_14454_14489 = state_14445__$1;(statearr_14454_14489[2] = inst_14441);
(statearr_14454_14489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 8))
{var inst_14404 = (state_14445[8]);var inst_14405 = (state_14445[9]);var inst_14407 = (inst_14405 < inst_14404);var inst_14408 = inst_14407;var state_14445__$1 = state_14445;if(cljs.core.truth_(inst_14408))
{var statearr_14455_14490 = state_14445__$1;(statearr_14455_14490[1] = 10);
} else
{var statearr_14456_14491 = state_14445__$1;(statearr_14456_14491[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 9))
{var inst_14438 = (state_14445[2]);var state_14445__$1 = (function (){var statearr_14457 = state_14445;(statearr_14457[12] = inst_14438);
return statearr_14457;
})();var statearr_14458_14492 = state_14445__$1;(statearr_14458_14492[2] = null);
(statearr_14458_14492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 10))
{var inst_14405 = (state_14445[9]);var inst_14403 = (state_14445[10]);var inst_14410 = cljs.core._nth.call(null,inst_14403,inst_14405);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14445__$1,13,out,inst_14410);
} else
{if((state_val_14446 === 11))
{var inst_14402 = (state_14445[11]);var inst_14416 = (state_14445[13]);var inst_14416__$1 = cljs.core.seq.call(null,inst_14402);var state_14445__$1 = (function (){var statearr_14462 = state_14445;(statearr_14462[13] = inst_14416__$1);
return statearr_14462;
})();if(inst_14416__$1)
{var statearr_14463_14493 = state_14445__$1;(statearr_14463_14493[1] = 14);
} else
{var statearr_14464_14494 = state_14445__$1;(statearr_14464_14494[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 12))
{var inst_14436 = (state_14445[2]);var state_14445__$1 = state_14445;var statearr_14465_14495 = state_14445__$1;(statearr_14465_14495[2] = inst_14436);
(statearr_14465_14495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 13))
{var inst_14404 = (state_14445[8]);var inst_14405 = (state_14445[9]);var inst_14403 = (state_14445[10]);var inst_14402 = (state_14445[11]);var inst_14412 = (state_14445[2]);var inst_14413 = (inst_14405 + 1);var tmp14459 = inst_14404;var tmp14460 = inst_14403;var tmp14461 = inst_14402;var inst_14402__$1 = tmp14461;var inst_14403__$1 = tmp14460;var inst_14404__$1 = tmp14459;var inst_14405__$1 = inst_14413;var state_14445__$1 = (function (){var statearr_14466 = state_14445;(statearr_14466[8] = inst_14404__$1);
(statearr_14466[9] = inst_14405__$1);
(statearr_14466[14] = inst_14412);
(statearr_14466[10] = inst_14403__$1);
(statearr_14466[11] = inst_14402__$1);
return statearr_14466;
})();var statearr_14467_14496 = state_14445__$1;(statearr_14467_14496[2] = null);
(statearr_14467_14496[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 14))
{var inst_14416 = (state_14445[13]);var inst_14418 = cljs.core.chunked_seq_QMARK_.call(null,inst_14416);var state_14445__$1 = state_14445;if(inst_14418)
{var statearr_14468_14497 = state_14445__$1;(statearr_14468_14497[1] = 17);
} else
{var statearr_14469_14498 = state_14445__$1;(statearr_14469_14498[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 15))
{var state_14445__$1 = state_14445;var statearr_14470_14499 = state_14445__$1;(statearr_14470_14499[2] = null);
(statearr_14470_14499[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 16))
{var inst_14434 = (state_14445[2]);var state_14445__$1 = state_14445;var statearr_14471_14500 = state_14445__$1;(statearr_14471_14500[2] = inst_14434);
(statearr_14471_14500[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 17))
{var inst_14416 = (state_14445[13]);var inst_14420 = cljs.core.chunk_first.call(null,inst_14416);var inst_14421 = cljs.core.chunk_rest.call(null,inst_14416);var inst_14422 = cljs.core.count.call(null,inst_14420);var inst_14402 = inst_14421;var inst_14403 = inst_14420;var inst_14404 = inst_14422;var inst_14405 = 0;var state_14445__$1 = (function (){var statearr_14472 = state_14445;(statearr_14472[8] = inst_14404);
(statearr_14472[9] = inst_14405);
(statearr_14472[10] = inst_14403);
(statearr_14472[11] = inst_14402);
return statearr_14472;
})();var statearr_14473_14501 = state_14445__$1;(statearr_14473_14501[2] = null);
(statearr_14473_14501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 18))
{var inst_14416 = (state_14445[13]);var inst_14425 = cljs.core.first.call(null,inst_14416);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14445__$1,20,out,inst_14425);
} else
{if((state_val_14446 === 19))
{var inst_14431 = (state_14445[2]);var state_14445__$1 = state_14445;var statearr_14474_14502 = state_14445__$1;(statearr_14474_14502[2] = inst_14431);
(statearr_14474_14502[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14446 === 20))
{var inst_14416 = (state_14445[13]);var inst_14427 = (state_14445[2]);var inst_14428 = cljs.core.next.call(null,inst_14416);var inst_14402 = inst_14428;var inst_14403 = null;var inst_14404 = 0;var inst_14405 = 0;var state_14445__$1 = (function (){var statearr_14475 = state_14445;(statearr_14475[8] = inst_14404);
(statearr_14475[9] = inst_14405);
(statearr_14475[10] = inst_14403);
(statearr_14475[11] = inst_14402);
(statearr_14475[15] = inst_14427);
return statearr_14475;
})();var statearr_14476_14503 = state_14445__$1;(statearr_14476_14503[2] = null);
(statearr_14476_14503[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14480 = (new Array(16));(statearr_14480[0] = state_machine__5425__auto__);
(statearr_14480[1] = 1);
return statearr_14480;
});
var state_machine__5425__auto____1 = (function (state_14445){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14481){if((e14481 instanceof Object))
{var ex__5428__auto__ = e14481;var statearr_14482_14504 = state_14445;(statearr_14482_14504[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14505 = state_14445;
state_14445 = G__14505;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14445){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14483 = f__5495__auto__.call(null);(statearr_14483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_14483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5494__auto___14586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14565){var state_val_14566 = (state_14565[1]);if((state_val_14566 === 1))
{var state_14565__$1 = state_14565;var statearr_14567_14587 = state_14565__$1;(statearr_14567_14587[2] = null);
(statearr_14567_14587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 2))
{var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14565__$1,4,from);
} else
{if((state_val_14566 === 3))
{var inst_14563 = (state_14565[2]);var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14565__$1,inst_14563);
} else
{if((state_val_14566 === 4))
{var inst_14548 = (state_14565[7]);var inst_14548__$1 = (state_14565[2]);var inst_14549 = (inst_14548__$1 == null);var state_14565__$1 = (function (){var statearr_14568 = state_14565;(statearr_14568[7] = inst_14548__$1);
return statearr_14568;
})();if(cljs.core.truth_(inst_14549))
{var statearr_14569_14588 = state_14565__$1;(statearr_14569_14588[1] = 5);
} else
{var statearr_14570_14589 = state_14565__$1;(statearr_14570_14589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 5))
{var state_14565__$1 = state_14565;if(cljs.core.truth_(close_QMARK_))
{var statearr_14571_14590 = state_14565__$1;(statearr_14571_14590[1] = 8);
} else
{var statearr_14572_14591 = state_14565__$1;(statearr_14572_14591[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 6))
{var inst_14548 = (state_14565[7]);var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14565__$1,11,to,inst_14548);
} else
{if((state_val_14566 === 7))
{var inst_14561 = (state_14565[2]);var state_14565__$1 = state_14565;var statearr_14573_14592 = state_14565__$1;(statearr_14573_14592[2] = inst_14561);
(statearr_14573_14592[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 8))
{var inst_14552 = cljs.core.async.close_BANG_.call(null,to);var state_14565__$1 = state_14565;var statearr_14574_14593 = state_14565__$1;(statearr_14574_14593[2] = inst_14552);
(statearr_14574_14593[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 9))
{var state_14565__$1 = state_14565;var statearr_14575_14594 = state_14565__$1;(statearr_14575_14594[2] = null);
(statearr_14575_14594[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 10))
{var inst_14555 = (state_14565[2]);var state_14565__$1 = state_14565;var statearr_14576_14595 = state_14565__$1;(statearr_14576_14595[2] = inst_14555);
(statearr_14576_14595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 11))
{var inst_14558 = (state_14565[2]);var state_14565__$1 = (function (){var statearr_14577 = state_14565;(statearr_14577[8] = inst_14558);
return statearr_14577;
})();var statearr_14578_14596 = state_14565__$1;(statearr_14578_14596[2] = null);
(statearr_14578_14596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14582 = (new Array(9));(statearr_14582[0] = state_machine__5425__auto__);
(statearr_14582[1] = 1);
return statearr_14582;
});
var state_machine__5425__auto____1 = (function (state_14565){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object))
{var ex__5428__auto__ = e14583;var statearr_14584_14597 = state_14565;(statearr_14584_14597[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14598 = state_14565;
state_14565 = G__14598;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14565){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14585 = f__5495__auto__.call(null);(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14586);
return statearr_14585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5494__auto___14685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14663){var state_val_14664 = (state_14663[1]);if((state_val_14664 === 1))
{var state_14663__$1 = state_14663;var statearr_14665_14686 = state_14663__$1;(statearr_14665_14686[2] = null);
(statearr_14665_14686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 2))
{var state_14663__$1 = state_14663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14663__$1,4,ch);
} else
{if((state_val_14664 === 3))
{var inst_14661 = (state_14663[2]);var state_14663__$1 = state_14663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14663__$1,inst_14661);
} else
{if((state_val_14664 === 4))
{var inst_14644 = (state_14663[7]);var inst_14644__$1 = (state_14663[2]);var inst_14645 = (inst_14644__$1 == null);var state_14663__$1 = (function (){var statearr_14666 = state_14663;(statearr_14666[7] = inst_14644__$1);
return statearr_14666;
})();if(cljs.core.truth_(inst_14645))
{var statearr_14667_14687 = state_14663__$1;(statearr_14667_14687[1] = 5);
} else
{var statearr_14668_14688 = state_14663__$1;(statearr_14668_14688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 5))
{var inst_14647 = cljs.core.async.close_BANG_.call(null,tc);var inst_14648 = cljs.core.async.close_BANG_.call(null,fc);var state_14663__$1 = (function (){var statearr_14669 = state_14663;(statearr_14669[8] = inst_14647);
return statearr_14669;
})();var statearr_14670_14689 = state_14663__$1;(statearr_14670_14689[2] = inst_14648);
(statearr_14670_14689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 6))
{var inst_14644 = (state_14663[7]);var inst_14650 = p.call(null,inst_14644);var state_14663__$1 = state_14663;if(cljs.core.truth_(inst_14650))
{var statearr_14671_14690 = state_14663__$1;(statearr_14671_14690[1] = 9);
} else
{var statearr_14672_14691 = state_14663__$1;(statearr_14672_14691[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 7))
{var inst_14659 = (state_14663[2]);var state_14663__$1 = state_14663;var statearr_14673_14692 = state_14663__$1;(statearr_14673_14692[2] = inst_14659);
(statearr_14673_14692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 8))
{var inst_14656 = (state_14663[2]);var state_14663__$1 = (function (){var statearr_14674 = state_14663;(statearr_14674[9] = inst_14656);
return statearr_14674;
})();var statearr_14675_14693 = state_14663__$1;(statearr_14675_14693[2] = null);
(statearr_14675_14693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 9))
{var state_14663__$1 = state_14663;var statearr_14676_14694 = state_14663__$1;(statearr_14676_14694[2] = tc);
(statearr_14676_14694[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 10))
{var state_14663__$1 = state_14663;var statearr_14677_14695 = state_14663__$1;(statearr_14677_14695[2] = fc);
(statearr_14677_14695[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 11))
{var inst_14644 = (state_14663[7]);var inst_14654 = (state_14663[2]);var state_14663__$1 = state_14663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14663__$1,8,inst_14654,inst_14644);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14681 = (new Array(10));(statearr_14681[0] = state_machine__5425__auto__);
(statearr_14681[1] = 1);
return statearr_14681;
});
var state_machine__5425__auto____1 = (function (state_14663){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14682){if((e14682 instanceof Object))
{var ex__5428__auto__ = e14682;var statearr_14683_14696 = state_14663;(statearr_14683_14696[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14697 = state_14663;
state_14663 = G__14697;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14663){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14684 = f__5495__auto__.call(null);(statearr_14684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14685);
return statearr_14684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14744){var state_val_14745 = (state_14744[1]);if((state_val_14745 === 7))
{var inst_14740 = (state_14744[2]);var state_14744__$1 = state_14744;var statearr_14746_14762 = state_14744__$1;(statearr_14746_14762[2] = inst_14740);
(statearr_14746_14762[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 6))
{var inst_14733 = (state_14744[7]);var inst_14730 = (state_14744[8]);var inst_14737 = f.call(null,inst_14730,inst_14733);var inst_14730__$1 = inst_14737;var state_14744__$1 = (function (){var statearr_14747 = state_14744;(statearr_14747[8] = inst_14730__$1);
return statearr_14747;
})();var statearr_14748_14763 = state_14744__$1;(statearr_14748_14763[2] = null);
(statearr_14748_14763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 5))
{var inst_14730 = (state_14744[8]);var state_14744__$1 = state_14744;var statearr_14749_14764 = state_14744__$1;(statearr_14749_14764[2] = inst_14730);
(statearr_14749_14764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 4))
{var inst_14733 = (state_14744[7]);var inst_14733__$1 = (state_14744[2]);var inst_14734 = (inst_14733__$1 == null);var state_14744__$1 = (function (){var statearr_14750 = state_14744;(statearr_14750[7] = inst_14733__$1);
return statearr_14750;
})();if(cljs.core.truth_(inst_14734))
{var statearr_14751_14765 = state_14744__$1;(statearr_14751_14765[1] = 5);
} else
{var statearr_14752_14766 = state_14744__$1;(statearr_14752_14766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14745 === 3))
{var inst_14742 = (state_14744[2]);var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14744__$1,inst_14742);
} else
{if((state_val_14745 === 2))
{var state_14744__$1 = state_14744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14744__$1,4,ch);
} else
{if((state_val_14745 === 1))
{var inst_14730 = init;var state_14744__$1 = (function (){var statearr_14753 = state_14744;(statearr_14753[8] = inst_14730);
return statearr_14753;
})();var statearr_14754_14767 = state_14744__$1;(statearr_14754_14767[2] = null);
(statearr_14754_14767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14758 = (new Array(9));(statearr_14758[0] = state_machine__5425__auto__);
(statearr_14758[1] = 1);
return statearr_14758;
});
var state_machine__5425__auto____1 = (function (state_14744){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14744);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14759){if((e14759 instanceof Object))
{var ex__5428__auto__ = e14759;var statearr_14760_14768 = state_14744;(statearr_14760_14768[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14769 = state_14744;
state_14744 = G__14769;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14744){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14761 = f__5495__auto__.call(null);(statearr_14761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_14761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14831){var state_val_14832 = (state_14831[1]);if((state_val_14832 === 1))
{var inst_14811 = cljs.core.seq.call(null,coll);var inst_14812 = inst_14811;var state_14831__$1 = (function (){var statearr_14833 = state_14831;(statearr_14833[7] = inst_14812);
return statearr_14833;
})();var statearr_14834_14852 = state_14831__$1;(statearr_14834_14852[2] = null);
(statearr_14834_14852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 2))
{var inst_14812 = (state_14831[7]);var state_14831__$1 = state_14831;if(cljs.core.truth_(inst_14812))
{var statearr_14835_14853 = state_14831__$1;(statearr_14835_14853[1] = 4);
} else
{var statearr_14836_14854 = state_14831__$1;(statearr_14836_14854[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 3))
{var inst_14829 = (state_14831[2]);var state_14831__$1 = state_14831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14831__$1,inst_14829);
} else
{if((state_val_14832 === 4))
{var inst_14812 = (state_14831[7]);var inst_14815 = cljs.core.first.call(null,inst_14812);var state_14831__$1 = state_14831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14831__$1,7,ch,inst_14815);
} else
{if((state_val_14832 === 5))
{var state_14831__$1 = state_14831;if(cljs.core.truth_(close_QMARK_))
{var statearr_14837_14855 = state_14831__$1;(statearr_14837_14855[1] = 8);
} else
{var statearr_14838_14856 = state_14831__$1;(statearr_14838_14856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 6))
{var inst_14827 = (state_14831[2]);var state_14831__$1 = state_14831;var statearr_14839_14857 = state_14831__$1;(statearr_14839_14857[2] = inst_14827);
(statearr_14839_14857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 7))
{var inst_14812 = (state_14831[7]);var inst_14817 = (state_14831[2]);var inst_14818 = cljs.core.next.call(null,inst_14812);var inst_14812__$1 = inst_14818;var state_14831__$1 = (function (){var statearr_14840 = state_14831;(statearr_14840[8] = inst_14817);
(statearr_14840[7] = inst_14812__$1);
return statearr_14840;
})();var statearr_14841_14858 = state_14831__$1;(statearr_14841_14858[2] = null);
(statearr_14841_14858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 8))
{var inst_14822 = cljs.core.async.close_BANG_.call(null,ch);var state_14831__$1 = state_14831;var statearr_14842_14859 = state_14831__$1;(statearr_14842_14859[2] = inst_14822);
(statearr_14842_14859[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 9))
{var state_14831__$1 = state_14831;var statearr_14843_14860 = state_14831__$1;(statearr_14843_14860[2] = null);
(statearr_14843_14860[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14832 === 10))
{var inst_14825 = (state_14831[2]);var state_14831__$1 = state_14831;var statearr_14844_14861 = state_14831__$1;(statearr_14844_14861[2] = inst_14825);
(statearr_14844_14861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14848 = (new Array(9));(statearr_14848[0] = state_machine__5425__auto__);
(statearr_14848[1] = 1);
return statearr_14848;
});
var state_machine__5425__auto____1 = (function (state_14831){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14849){if((e14849 instanceof Object))
{var ex__5428__auto__ = e14849;var statearr_14850_14862 = state_14831;(statearr_14850_14862[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14863 = state_14831;
state_14831 = G__14863;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14831){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14851 = f__5495__auto__.call(null);(statearr_14851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_14851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3124__auto__ = _;if(and__3124__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3729__auto__ = (((_ == null))?null:_);return (function (){var or__3133__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15078 = (function (cs,ch,mult,meta15079){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15079 = meta15079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15078.cljs$lang$type = true;
cljs.core.async.t15078.cljs$lang$ctorStr = "cljs.core.async/t15078";
cljs.core.async.t15078.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15078");
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15078.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15080){var self__ = this;
var _15080__$1 = this;return self__.meta15079;
});})(cs))
;
cljs.core.async.t15078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15080,meta15079__$1){var self__ = this;
var _15080__$1 = this;return (new cljs.core.async.t15078(self__.cs,self__.ch,self__.mult,meta15079__$1));
});})(cs))
;
cljs.core.async.__GT_t15078 = ((function (cs){
return (function __GT_t15078(cs__$1,ch__$1,mult__$1,meta15079){return (new cljs.core.async.t15078(cs__$1,ch__$1,mult__$1,meta15079));
});})(cs))
;
}
return (new cljs.core.async.t15078(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5494__auto___15292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15210){var state_val_15211 = (state_15210[1]);if((state_val_15211 === 32))
{var inst_15083 = (state_15210[7]);var inst_15159 = (state_15210[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15210,31,Object,null,30);var inst_15166 = cljs.core.async.put_BANG_.call(null,inst_15159,inst_15083,done);var state_15210__$1 = state_15210;var statearr_15212_15293 = state_15210__$1;(statearr_15212_15293[2] = inst_15166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 1))
{var state_15210__$1 = state_15210;var statearr_15213_15294 = state_15210__$1;(statearr_15213_15294[2] = null);
(statearr_15213_15294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 33))
{var inst_15172 = (state_15210[9]);var inst_15174 = cljs.core.chunked_seq_QMARK_.call(null,inst_15172);var state_15210__$1 = state_15210;if(inst_15174)
{var statearr_15214_15295 = state_15210__$1;(statearr_15214_15295[1] = 36);
} else
{var statearr_15215_15296 = state_15210__$1;(statearr_15215_15296[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 2))
{var state_15210__$1 = state_15210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15210__$1,4,ch);
} else
{if((state_val_15211 === 34))
{var state_15210__$1 = state_15210;var statearr_15216_15297 = state_15210__$1;(statearr_15216_15297[2] = null);
(statearr_15216_15297[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 3))
{var inst_15208 = (state_15210[2]);var state_15210__$1 = state_15210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15210__$1,inst_15208);
} else
{if((state_val_15211 === 35))
{var inst_15197 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15217_15298 = state_15210__$1;(statearr_15217_15298[2] = inst_15197);
(statearr_15217_15298[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 4))
{var inst_15083 = (state_15210[7]);var inst_15083__$1 = (state_15210[2]);var inst_15084 = (inst_15083__$1 == null);var state_15210__$1 = (function (){var statearr_15218 = state_15210;(statearr_15218[7] = inst_15083__$1);
return statearr_15218;
})();if(cljs.core.truth_(inst_15084))
{var statearr_15219_15299 = state_15210__$1;(statearr_15219_15299[1] = 5);
} else
{var statearr_15220_15300 = state_15210__$1;(statearr_15220_15300[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 36))
{var inst_15172 = (state_15210[9]);var inst_15176 = cljs.core.chunk_first.call(null,inst_15172);var inst_15177 = cljs.core.chunk_rest.call(null,inst_15172);var inst_15178 = cljs.core.count.call(null,inst_15176);var inst_15151 = inst_15177;var inst_15152 = inst_15176;var inst_15153 = inst_15178;var inst_15154 = 0;var state_15210__$1 = (function (){var statearr_15221 = state_15210;(statearr_15221[10] = inst_15152);
(statearr_15221[11] = inst_15151);
(statearr_15221[12] = inst_15154);
(statearr_15221[13] = inst_15153);
return statearr_15221;
})();var statearr_15222_15301 = state_15210__$1;(statearr_15222_15301[2] = null);
(statearr_15222_15301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 5))
{var inst_15090 = cljs.core.deref.call(null,cs);var inst_15091 = cljs.core.seq.call(null,inst_15090);var inst_15092 = inst_15091;var inst_15093 = null;var inst_15094 = 0;var inst_15095 = 0;var state_15210__$1 = (function (){var statearr_15223 = state_15210;(statearr_15223[14] = inst_15092);
(statearr_15223[15] = inst_15093);
(statearr_15223[16] = inst_15094);
(statearr_15223[17] = inst_15095);
return statearr_15223;
})();var statearr_15224_15302 = state_15210__$1;(statearr_15224_15302[2] = null);
(statearr_15224_15302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 37))
{var inst_15172 = (state_15210[9]);var inst_15181 = cljs.core.first.call(null,inst_15172);var state_15210__$1 = (function (){var statearr_15225 = state_15210;(statearr_15225[18] = inst_15181);
return statearr_15225;
})();var statearr_15226_15303 = state_15210__$1;(statearr_15226_15303[2] = null);
(statearr_15226_15303[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 6))
{var inst_15142 = cljs.core.deref.call(null,cs);var inst_15143 = cljs.core.keys.call(null,inst_15142);var inst_15144 = cljs.core.count.call(null,inst_15143);var inst_15145 = cljs.core.reset_BANG_.call(null,dctr,inst_15144);var inst_15150 = cljs.core.seq.call(null,inst_15143);var inst_15151 = inst_15150;var inst_15152 = null;var inst_15153 = 0;var inst_15154 = 0;var state_15210__$1 = (function (){var statearr_15227 = state_15210;(statearr_15227[19] = inst_15145);
(statearr_15227[10] = inst_15152);
(statearr_15227[11] = inst_15151);
(statearr_15227[12] = inst_15154);
(statearr_15227[13] = inst_15153);
return statearr_15227;
})();var statearr_15228_15304 = state_15210__$1;(statearr_15228_15304[2] = null);
(statearr_15228_15304[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 38))
{var inst_15194 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15229_15305 = state_15210__$1;(statearr_15229_15305[2] = inst_15194);
(statearr_15229_15305[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 7))
{var inst_15206 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15230_15306 = state_15210__$1;(statearr_15230_15306[2] = inst_15206);
(statearr_15230_15306[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 39))
{var inst_15172 = (state_15210[9]);var inst_15190 = (state_15210[2]);var inst_15191 = cljs.core.next.call(null,inst_15172);var inst_15151 = inst_15191;var inst_15152 = null;var inst_15153 = 0;var inst_15154 = 0;var state_15210__$1 = (function (){var statearr_15231 = state_15210;(statearr_15231[20] = inst_15190);
(statearr_15231[10] = inst_15152);
(statearr_15231[11] = inst_15151);
(statearr_15231[12] = inst_15154);
(statearr_15231[13] = inst_15153);
return statearr_15231;
})();var statearr_15232_15307 = state_15210__$1;(statearr_15232_15307[2] = null);
(statearr_15232_15307[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 8))
{var inst_15094 = (state_15210[16]);var inst_15095 = (state_15210[17]);var inst_15097 = (inst_15095 < inst_15094);var inst_15098 = inst_15097;var state_15210__$1 = state_15210;if(cljs.core.truth_(inst_15098))
{var statearr_15233_15308 = state_15210__$1;(statearr_15233_15308[1] = 10);
} else
{var statearr_15234_15309 = state_15210__$1;(statearr_15234_15309[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 40))
{var inst_15181 = (state_15210[18]);var inst_15182 = (state_15210[2]);var inst_15183 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15184 = cljs.core.async.untap_STAR_.call(null,m,inst_15181);var state_15210__$1 = (function (){var statearr_15235 = state_15210;(statearr_15235[21] = inst_15182);
(statearr_15235[22] = inst_15183);
return statearr_15235;
})();var statearr_15236_15310 = state_15210__$1;(statearr_15236_15310[2] = inst_15184);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 9))
{var inst_15140 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15237_15311 = state_15210__$1;(statearr_15237_15311[2] = inst_15140);
(statearr_15237_15311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 41))
{var inst_15083 = (state_15210[7]);var inst_15181 = (state_15210[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15210,40,Object,null,39);var inst_15188 = cljs.core.async.put_BANG_.call(null,inst_15181,inst_15083,done);var state_15210__$1 = state_15210;var statearr_15238_15312 = state_15210__$1;(statearr_15238_15312[2] = inst_15188);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 10))
{var inst_15093 = (state_15210[15]);var inst_15095 = (state_15210[17]);var inst_15101 = cljs.core._nth.call(null,inst_15093,inst_15095);var inst_15102 = cljs.core.nth.call(null,inst_15101,0,null);var inst_15103 = cljs.core.nth.call(null,inst_15101,1,null);var state_15210__$1 = (function (){var statearr_15239 = state_15210;(statearr_15239[23] = inst_15102);
return statearr_15239;
})();if(cljs.core.truth_(inst_15103))
{var statearr_15240_15313 = state_15210__$1;(statearr_15240_15313[1] = 13);
} else
{var statearr_15241_15314 = state_15210__$1;(statearr_15241_15314[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 42))
{var inst_15203 = (state_15210[2]);var state_15210__$1 = (function (){var statearr_15242 = state_15210;(statearr_15242[24] = inst_15203);
return statearr_15242;
})();var statearr_15243_15315 = state_15210__$1;(statearr_15243_15315[2] = null);
(statearr_15243_15315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 11))
{var inst_15112 = (state_15210[25]);var inst_15092 = (state_15210[14]);var inst_15112__$1 = cljs.core.seq.call(null,inst_15092);var state_15210__$1 = (function (){var statearr_15244 = state_15210;(statearr_15244[25] = inst_15112__$1);
return statearr_15244;
})();if(inst_15112__$1)
{var statearr_15245_15316 = state_15210__$1;(statearr_15245_15316[1] = 16);
} else
{var statearr_15246_15317 = state_15210__$1;(statearr_15246_15317[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 12))
{var inst_15138 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15247_15318 = state_15210__$1;(statearr_15247_15318[2] = inst_15138);
(statearr_15247_15318[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 13))
{var inst_15102 = (state_15210[23]);var inst_15105 = cljs.core.async.close_BANG_.call(null,inst_15102);var state_15210__$1 = state_15210;var statearr_15251_15319 = state_15210__$1;(statearr_15251_15319[2] = inst_15105);
(statearr_15251_15319[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 14))
{var state_15210__$1 = state_15210;var statearr_15252_15320 = state_15210__$1;(statearr_15252_15320[2] = null);
(statearr_15252_15320[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 15))
{var inst_15092 = (state_15210[14]);var inst_15093 = (state_15210[15]);var inst_15094 = (state_15210[16]);var inst_15095 = (state_15210[17]);var inst_15108 = (state_15210[2]);var inst_15109 = (inst_15095 + 1);var tmp15248 = inst_15092;var tmp15249 = inst_15093;var tmp15250 = inst_15094;var inst_15092__$1 = tmp15248;var inst_15093__$1 = tmp15249;var inst_15094__$1 = tmp15250;var inst_15095__$1 = inst_15109;var state_15210__$1 = (function (){var statearr_15253 = state_15210;(statearr_15253[14] = inst_15092__$1);
(statearr_15253[15] = inst_15093__$1);
(statearr_15253[16] = inst_15094__$1);
(statearr_15253[17] = inst_15095__$1);
(statearr_15253[26] = inst_15108);
return statearr_15253;
})();var statearr_15254_15321 = state_15210__$1;(statearr_15254_15321[2] = null);
(statearr_15254_15321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 16))
{var inst_15112 = (state_15210[25]);var inst_15114 = cljs.core.chunked_seq_QMARK_.call(null,inst_15112);var state_15210__$1 = state_15210;if(inst_15114)
{var statearr_15255_15322 = state_15210__$1;(statearr_15255_15322[1] = 19);
} else
{var statearr_15256_15323 = state_15210__$1;(statearr_15256_15323[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 17))
{var state_15210__$1 = state_15210;var statearr_15257_15324 = state_15210__$1;(statearr_15257_15324[2] = null);
(statearr_15257_15324[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 18))
{var inst_15136 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15258_15325 = state_15210__$1;(statearr_15258_15325[2] = inst_15136);
(statearr_15258_15325[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 19))
{var inst_15112 = (state_15210[25]);var inst_15116 = cljs.core.chunk_first.call(null,inst_15112);var inst_15117 = cljs.core.chunk_rest.call(null,inst_15112);var inst_15118 = cljs.core.count.call(null,inst_15116);var inst_15092 = inst_15117;var inst_15093 = inst_15116;var inst_15094 = inst_15118;var inst_15095 = 0;var state_15210__$1 = (function (){var statearr_15259 = state_15210;(statearr_15259[14] = inst_15092);
(statearr_15259[15] = inst_15093);
(statearr_15259[16] = inst_15094);
(statearr_15259[17] = inst_15095);
return statearr_15259;
})();var statearr_15260_15326 = state_15210__$1;(statearr_15260_15326[2] = null);
(statearr_15260_15326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 20))
{var inst_15112 = (state_15210[25]);var inst_15122 = cljs.core.first.call(null,inst_15112);var inst_15123 = cljs.core.nth.call(null,inst_15122,0,null);var inst_15124 = cljs.core.nth.call(null,inst_15122,1,null);var state_15210__$1 = (function (){var statearr_15261 = state_15210;(statearr_15261[27] = inst_15123);
return statearr_15261;
})();if(cljs.core.truth_(inst_15124))
{var statearr_15262_15327 = state_15210__$1;(statearr_15262_15327[1] = 22);
} else
{var statearr_15263_15328 = state_15210__$1;(statearr_15263_15328[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 21))
{var inst_15133 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15264_15329 = state_15210__$1;(statearr_15264_15329[2] = inst_15133);
(statearr_15264_15329[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 22))
{var inst_15123 = (state_15210[27]);var inst_15126 = cljs.core.async.close_BANG_.call(null,inst_15123);var state_15210__$1 = state_15210;var statearr_15265_15330 = state_15210__$1;(statearr_15265_15330[2] = inst_15126);
(statearr_15265_15330[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 23))
{var state_15210__$1 = state_15210;var statearr_15266_15331 = state_15210__$1;(statearr_15266_15331[2] = null);
(statearr_15266_15331[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 24))
{var inst_15112 = (state_15210[25]);var inst_15129 = (state_15210[2]);var inst_15130 = cljs.core.next.call(null,inst_15112);var inst_15092 = inst_15130;var inst_15093 = null;var inst_15094 = 0;var inst_15095 = 0;var state_15210__$1 = (function (){var statearr_15267 = state_15210;(statearr_15267[28] = inst_15129);
(statearr_15267[14] = inst_15092);
(statearr_15267[15] = inst_15093);
(statearr_15267[16] = inst_15094);
(statearr_15267[17] = inst_15095);
return statearr_15267;
})();var statearr_15268_15332 = state_15210__$1;(statearr_15268_15332[2] = null);
(statearr_15268_15332[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 25))
{var inst_15154 = (state_15210[12]);var inst_15153 = (state_15210[13]);var inst_15156 = (inst_15154 < inst_15153);var inst_15157 = inst_15156;var state_15210__$1 = state_15210;if(cljs.core.truth_(inst_15157))
{var statearr_15269_15333 = state_15210__$1;(statearr_15269_15333[1] = 27);
} else
{var statearr_15270_15334 = state_15210__$1;(statearr_15270_15334[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 26))
{var inst_15201 = (state_15210[2]);var state_15210__$1 = (function (){var statearr_15271 = state_15210;(statearr_15271[29] = inst_15201);
return statearr_15271;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15210__$1,42,dchan);
} else
{if((state_val_15211 === 27))
{var inst_15152 = (state_15210[10]);var inst_15154 = (state_15210[12]);var inst_15159 = cljs.core._nth.call(null,inst_15152,inst_15154);var state_15210__$1 = (function (){var statearr_15272 = state_15210;(statearr_15272[8] = inst_15159);
return statearr_15272;
})();var statearr_15273_15335 = state_15210__$1;(statearr_15273_15335[2] = null);
(statearr_15273_15335[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 28))
{var inst_15151 = (state_15210[11]);var inst_15172 = (state_15210[9]);var inst_15172__$1 = cljs.core.seq.call(null,inst_15151);var state_15210__$1 = (function (){var statearr_15277 = state_15210;(statearr_15277[9] = inst_15172__$1);
return statearr_15277;
})();if(inst_15172__$1)
{var statearr_15278_15336 = state_15210__$1;(statearr_15278_15336[1] = 33);
} else
{var statearr_15279_15337 = state_15210__$1;(statearr_15279_15337[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 29))
{var inst_15199 = (state_15210[2]);var state_15210__$1 = state_15210;var statearr_15280_15338 = state_15210__$1;(statearr_15280_15338[2] = inst_15199);
(statearr_15280_15338[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 30))
{var inst_15152 = (state_15210[10]);var inst_15151 = (state_15210[11]);var inst_15154 = (state_15210[12]);var inst_15153 = (state_15210[13]);var inst_15168 = (state_15210[2]);var inst_15169 = (inst_15154 + 1);var tmp15274 = inst_15152;var tmp15275 = inst_15151;var tmp15276 = inst_15153;var inst_15151__$1 = tmp15275;var inst_15152__$1 = tmp15274;var inst_15153__$1 = tmp15276;var inst_15154__$1 = inst_15169;var state_15210__$1 = (function (){var statearr_15281 = state_15210;(statearr_15281[10] = inst_15152__$1);
(statearr_15281[11] = inst_15151__$1);
(statearr_15281[12] = inst_15154__$1);
(statearr_15281[13] = inst_15153__$1);
(statearr_15281[30] = inst_15168);
return statearr_15281;
})();var statearr_15282_15339 = state_15210__$1;(statearr_15282_15339[2] = null);
(statearr_15282_15339[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15211 === 31))
{var inst_15159 = (state_15210[8]);var inst_15160 = (state_15210[2]);var inst_15161 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15162 = cljs.core.async.untap_STAR_.call(null,m,inst_15159);var state_15210__$1 = (function (){var statearr_15283 = state_15210;(statearr_15283[31] = inst_15160);
(statearr_15283[32] = inst_15161);
return statearr_15283;
})();var statearr_15284_15340 = state_15210__$1;(statearr_15284_15340[2] = inst_15162);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15288 = (new Array(33));(statearr_15288[0] = state_machine__5425__auto__);
(statearr_15288[1] = 1);
return statearr_15288;
});
var state_machine__5425__auto____1 = (function (state_15210){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15289){if((e15289 instanceof Object))
{var ex__5428__auto__ = e15289;var statearr_15290_15341 = state_15210;(statearr_15290_15341[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15342 = state_15210;
state_15210 = G__15342;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15210){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15291 = f__5495__auto__.call(null);(statearr_15291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15292);
return statearr_15291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15452 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15453){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15453 = meta15453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15452.cljs$lang$type = true;
cljs.core.async.t15452.cljs$lang$ctorStr = "cljs.core.async/t15452";
cljs.core.async.t15452.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15452");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15454){var self__ = this;
var _15454__$1 = this;return self__.meta15453;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15454,meta15453__$1){var self__ = this;
var _15454__$1 = this;return (new cljs.core.async.t15452(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15453__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15452 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15452(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15453){return (new cljs.core.async.t15452(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15453));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15452(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5494__auto___15561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15519){var state_val_15520 = (state_15519[1]);if((state_val_15520 === 1))
{var inst_15458 = (state_15519[7]);var inst_15458__$1 = calc_state.call(null);var inst_15459 = cljs.core.seq_QMARK_.call(null,inst_15458__$1);var state_15519__$1 = (function (){var statearr_15521 = state_15519;(statearr_15521[7] = inst_15458__$1);
return statearr_15521;
})();if(inst_15459)
{var statearr_15522_15562 = state_15519__$1;(statearr_15522_15562[1] = 2);
} else
{var statearr_15523_15563 = state_15519__$1;(statearr_15523_15563[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 2))
{var inst_15458 = (state_15519[7]);var inst_15461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15458);var state_15519__$1 = state_15519;var statearr_15524_15564 = state_15519__$1;(statearr_15524_15564[2] = inst_15461);
(statearr_15524_15564[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 3))
{var inst_15458 = (state_15519[7]);var state_15519__$1 = state_15519;var statearr_15525_15565 = state_15519__$1;(statearr_15525_15565[2] = inst_15458);
(statearr_15525_15565[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 4))
{var inst_15458 = (state_15519[7]);var inst_15464 = (state_15519[2]);var inst_15465 = cljs.core.get.call(null,inst_15464,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15466 = cljs.core.get.call(null,inst_15464,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15467 = cljs.core.get.call(null,inst_15464,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15468 = inst_15458;var state_15519__$1 = (function (){var statearr_15526 = state_15519;(statearr_15526[8] = inst_15468);
(statearr_15526[9] = inst_15467);
(statearr_15526[10] = inst_15465);
(statearr_15526[11] = inst_15466);
return statearr_15526;
})();var statearr_15527_15566 = state_15519__$1;(statearr_15527_15566[2] = null);
(statearr_15527_15566[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 5))
{var inst_15468 = (state_15519[8]);var inst_15471 = cljs.core.seq_QMARK_.call(null,inst_15468);var state_15519__$1 = state_15519;if(inst_15471)
{var statearr_15528_15567 = state_15519__$1;(statearr_15528_15567[1] = 7);
} else
{var statearr_15529_15568 = state_15519__$1;(statearr_15529_15568[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 6))
{var inst_15517 = (state_15519[2]);var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15519__$1,inst_15517);
} else
{if((state_val_15520 === 7))
{var inst_15468 = (state_15519[8]);var inst_15473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15468);var state_15519__$1 = state_15519;var statearr_15530_15569 = state_15519__$1;(statearr_15530_15569[2] = inst_15473);
(statearr_15530_15569[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 8))
{var inst_15468 = (state_15519[8]);var state_15519__$1 = state_15519;var statearr_15531_15570 = state_15519__$1;(statearr_15531_15570[2] = inst_15468);
(statearr_15531_15570[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 9))
{var inst_15476 = (state_15519[12]);var inst_15476__$1 = (state_15519[2]);var inst_15477 = cljs.core.get.call(null,inst_15476__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15478 = cljs.core.get.call(null,inst_15476__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15479 = cljs.core.get.call(null,inst_15476__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15519__$1 = (function (){var statearr_15532 = state_15519;(statearr_15532[12] = inst_15476__$1);
(statearr_15532[13] = inst_15479);
(statearr_15532[14] = inst_15478);
return statearr_15532;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15519__$1,10,inst_15477);
} else
{if((state_val_15520 === 10))
{var inst_15484 = (state_15519[15]);var inst_15483 = (state_15519[16]);var inst_15482 = (state_15519[2]);var inst_15483__$1 = cljs.core.nth.call(null,inst_15482,0,null);var inst_15484__$1 = cljs.core.nth.call(null,inst_15482,1,null);var inst_15485 = (inst_15483__$1 == null);var inst_15486 = cljs.core._EQ_.call(null,inst_15484__$1,change);var inst_15487 = (inst_15485) || (inst_15486);var state_15519__$1 = (function (){var statearr_15533 = state_15519;(statearr_15533[15] = inst_15484__$1);
(statearr_15533[16] = inst_15483__$1);
return statearr_15533;
})();if(cljs.core.truth_(inst_15487))
{var statearr_15534_15571 = state_15519__$1;(statearr_15534_15571[1] = 11);
} else
{var statearr_15535_15572 = state_15519__$1;(statearr_15535_15572[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 11))
{var inst_15483 = (state_15519[16]);var inst_15489 = (inst_15483 == null);var state_15519__$1 = state_15519;if(cljs.core.truth_(inst_15489))
{var statearr_15536_15573 = state_15519__$1;(statearr_15536_15573[1] = 14);
} else
{var statearr_15537_15574 = state_15519__$1;(statearr_15537_15574[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 12))
{var inst_15498 = (state_15519[17]);var inst_15484 = (state_15519[15]);var inst_15479 = (state_15519[13]);var inst_15498__$1 = inst_15479.call(null,inst_15484);var state_15519__$1 = (function (){var statearr_15538 = state_15519;(statearr_15538[17] = inst_15498__$1);
return statearr_15538;
})();if(cljs.core.truth_(inst_15498__$1))
{var statearr_15539_15575 = state_15519__$1;(statearr_15539_15575[1] = 17);
} else
{var statearr_15540_15576 = state_15519__$1;(statearr_15540_15576[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 13))
{var inst_15515 = (state_15519[2]);var state_15519__$1 = state_15519;var statearr_15541_15577 = state_15519__$1;(statearr_15541_15577[2] = inst_15515);
(statearr_15541_15577[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 14))
{var inst_15484 = (state_15519[15]);var inst_15491 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15484);var state_15519__$1 = state_15519;var statearr_15542_15578 = state_15519__$1;(statearr_15542_15578[2] = inst_15491);
(statearr_15542_15578[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 15))
{var state_15519__$1 = state_15519;var statearr_15543_15579 = state_15519__$1;(statearr_15543_15579[2] = null);
(statearr_15543_15579[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 16))
{var inst_15494 = (state_15519[2]);var inst_15495 = calc_state.call(null);var inst_15468 = inst_15495;var state_15519__$1 = (function (){var statearr_15544 = state_15519;(statearr_15544[8] = inst_15468);
(statearr_15544[18] = inst_15494);
return statearr_15544;
})();var statearr_15545_15580 = state_15519__$1;(statearr_15545_15580[2] = null);
(statearr_15545_15580[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 17))
{var inst_15498 = (state_15519[17]);var state_15519__$1 = state_15519;var statearr_15546_15581 = state_15519__$1;(statearr_15546_15581[2] = inst_15498);
(statearr_15546_15581[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 18))
{var inst_15484 = (state_15519[15]);var inst_15479 = (state_15519[13]);var inst_15478 = (state_15519[14]);var inst_15501 = cljs.core.empty_QMARK_.call(null,inst_15479);var inst_15502 = inst_15478.call(null,inst_15484);var inst_15503 = cljs.core.not.call(null,inst_15502);var inst_15504 = (inst_15501) && (inst_15503);var state_15519__$1 = state_15519;var statearr_15547_15582 = state_15519__$1;(statearr_15547_15582[2] = inst_15504);
(statearr_15547_15582[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 19))
{var inst_15506 = (state_15519[2]);var state_15519__$1 = state_15519;if(cljs.core.truth_(inst_15506))
{var statearr_15548_15583 = state_15519__$1;(statearr_15548_15583[1] = 20);
} else
{var statearr_15549_15584 = state_15519__$1;(statearr_15549_15584[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 20))
{var inst_15483 = (state_15519[16]);var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15519__$1,23,out,inst_15483);
} else
{if((state_val_15520 === 21))
{var state_15519__$1 = state_15519;var statearr_15550_15585 = state_15519__$1;(statearr_15550_15585[2] = null);
(statearr_15550_15585[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 22))
{var inst_15476 = (state_15519[12]);var inst_15512 = (state_15519[2]);var inst_15468 = inst_15476;var state_15519__$1 = (function (){var statearr_15551 = state_15519;(statearr_15551[8] = inst_15468);
(statearr_15551[19] = inst_15512);
return statearr_15551;
})();var statearr_15552_15586 = state_15519__$1;(statearr_15552_15586[2] = null);
(statearr_15552_15586[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15520 === 23))
{var inst_15509 = (state_15519[2]);var state_15519__$1 = state_15519;var statearr_15553_15587 = state_15519__$1;(statearr_15553_15587[2] = inst_15509);
(statearr_15553_15587[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15557 = (new Array(20));(statearr_15557[0] = state_machine__5425__auto__);
(statearr_15557[1] = 1);
return statearr_15557;
});
var state_machine__5425__auto____1 = (function (state_15519){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15519);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15558){if((e15558 instanceof Object))
{var ex__5428__auto__ = e15558;var statearr_15559_15588 = state_15519;(statearr_15559_15588[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15589 = state_15519;
state_15519 = G__15589;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15519){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15560 = f__5495__auto__.call(null);(statearr_15560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15561);
return statearr_15560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3133__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3133__auto__,mults){
return (function (p1__15590_SHARP_){if(cljs.core.truth_(p1__15590_SHARP_.call(null,topic)))
{return p1__15590_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15590_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3133__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15715 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15716){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15716 = meta15716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15715.cljs$lang$type = true;
cljs.core.async.t15715.cljs$lang$ctorStr = "cljs.core.async/t15715";
cljs.core.async.t15715.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15715");
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15715.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15717){var self__ = this;
var _15717__$1 = this;return self__.meta15716;
});})(mults,ensure_mult))
;
cljs.core.async.t15715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15717,meta15716__$1){var self__ = this;
var _15717__$1 = this;return (new cljs.core.async.t15715(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15716__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15715 = ((function (mults,ensure_mult){
return (function __GT_t15715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15716){return (new cljs.core.async.t15715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15716));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15715(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5494__auto___15839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15791){var state_val_15792 = (state_15791[1]);if((state_val_15792 === 1))
{var state_15791__$1 = state_15791;var statearr_15793_15840 = state_15791__$1;(statearr_15793_15840[2] = null);
(statearr_15793_15840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 2))
{var state_15791__$1 = state_15791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15791__$1,4,ch);
} else
{if((state_val_15792 === 3))
{var inst_15789 = (state_15791[2]);var state_15791__$1 = state_15791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15791__$1,inst_15789);
} else
{if((state_val_15792 === 4))
{var inst_15720 = (state_15791[7]);var inst_15720__$1 = (state_15791[2]);var inst_15721 = (inst_15720__$1 == null);var state_15791__$1 = (function (){var statearr_15794 = state_15791;(statearr_15794[7] = inst_15720__$1);
return statearr_15794;
})();if(cljs.core.truth_(inst_15721))
{var statearr_15795_15841 = state_15791__$1;(statearr_15795_15841[1] = 5);
} else
{var statearr_15796_15842 = state_15791__$1;(statearr_15796_15842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 5))
{var inst_15727 = cljs.core.deref.call(null,mults);var inst_15728 = cljs.core.vals.call(null,inst_15727);var inst_15729 = cljs.core.seq.call(null,inst_15728);var inst_15730 = inst_15729;var inst_15731 = null;var inst_15732 = 0;var inst_15733 = 0;var state_15791__$1 = (function (){var statearr_15797 = state_15791;(statearr_15797[8] = inst_15730);
(statearr_15797[9] = inst_15733);
(statearr_15797[10] = inst_15732);
(statearr_15797[11] = inst_15731);
return statearr_15797;
})();var statearr_15798_15843 = state_15791__$1;(statearr_15798_15843[2] = null);
(statearr_15798_15843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 6))
{var inst_15770 = (state_15791[12]);var inst_15768 = (state_15791[13]);var inst_15720 = (state_15791[7]);var inst_15768__$1 = topic_fn.call(null,inst_15720);var inst_15769 = cljs.core.deref.call(null,mults);var inst_15770__$1 = cljs.core.get.call(null,inst_15769,inst_15768__$1);var state_15791__$1 = (function (){var statearr_15799 = state_15791;(statearr_15799[12] = inst_15770__$1);
(statearr_15799[13] = inst_15768__$1);
return statearr_15799;
})();if(cljs.core.truth_(inst_15770__$1))
{var statearr_15800_15844 = state_15791__$1;(statearr_15800_15844[1] = 19);
} else
{var statearr_15801_15845 = state_15791__$1;(statearr_15801_15845[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 7))
{var inst_15787 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15802_15846 = state_15791__$1;(statearr_15802_15846[2] = inst_15787);
(statearr_15802_15846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 8))
{var inst_15733 = (state_15791[9]);var inst_15732 = (state_15791[10]);var inst_15735 = (inst_15733 < inst_15732);var inst_15736 = inst_15735;var state_15791__$1 = state_15791;if(cljs.core.truth_(inst_15736))
{var statearr_15806_15847 = state_15791__$1;(statearr_15806_15847[1] = 10);
} else
{var statearr_15807_15848 = state_15791__$1;(statearr_15807_15848[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 9))
{var inst_15766 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15808_15849 = state_15791__$1;(statearr_15808_15849[2] = inst_15766);
(statearr_15808_15849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 10))
{var inst_15730 = (state_15791[8]);var inst_15733 = (state_15791[9]);var inst_15732 = (state_15791[10]);var inst_15731 = (state_15791[11]);var inst_15738 = cljs.core._nth.call(null,inst_15731,inst_15733);var inst_15739 = cljs.core.async.muxch_STAR_.call(null,inst_15738);var inst_15740 = cljs.core.async.close_BANG_.call(null,inst_15739);var inst_15741 = (inst_15733 + 1);var tmp15803 = inst_15730;var tmp15804 = inst_15732;var tmp15805 = inst_15731;var inst_15730__$1 = tmp15803;var inst_15731__$1 = tmp15805;var inst_15732__$1 = tmp15804;var inst_15733__$1 = inst_15741;var state_15791__$1 = (function (){var statearr_15809 = state_15791;(statearr_15809[8] = inst_15730__$1);
(statearr_15809[14] = inst_15740);
(statearr_15809[9] = inst_15733__$1);
(statearr_15809[10] = inst_15732__$1);
(statearr_15809[11] = inst_15731__$1);
return statearr_15809;
})();var statearr_15810_15850 = state_15791__$1;(statearr_15810_15850[2] = null);
(statearr_15810_15850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 11))
{var inst_15730 = (state_15791[8]);var inst_15744 = (state_15791[15]);var inst_15744__$1 = cljs.core.seq.call(null,inst_15730);var state_15791__$1 = (function (){var statearr_15811 = state_15791;(statearr_15811[15] = inst_15744__$1);
return statearr_15811;
})();if(inst_15744__$1)
{var statearr_15812_15851 = state_15791__$1;(statearr_15812_15851[1] = 13);
} else
{var statearr_15813_15852 = state_15791__$1;(statearr_15813_15852[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 12))
{var inst_15764 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15814_15853 = state_15791__$1;(statearr_15814_15853[2] = inst_15764);
(statearr_15814_15853[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 13))
{var inst_15744 = (state_15791[15]);var inst_15746 = cljs.core.chunked_seq_QMARK_.call(null,inst_15744);var state_15791__$1 = state_15791;if(inst_15746)
{var statearr_15815_15854 = state_15791__$1;(statearr_15815_15854[1] = 16);
} else
{var statearr_15816_15855 = state_15791__$1;(statearr_15816_15855[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 14))
{var state_15791__$1 = state_15791;var statearr_15817_15856 = state_15791__$1;(statearr_15817_15856[2] = null);
(statearr_15817_15856[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 15))
{var inst_15762 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15818_15857 = state_15791__$1;(statearr_15818_15857[2] = inst_15762);
(statearr_15818_15857[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 16))
{var inst_15744 = (state_15791[15]);var inst_15748 = cljs.core.chunk_first.call(null,inst_15744);var inst_15749 = cljs.core.chunk_rest.call(null,inst_15744);var inst_15750 = cljs.core.count.call(null,inst_15748);var inst_15730 = inst_15749;var inst_15731 = inst_15748;var inst_15732 = inst_15750;var inst_15733 = 0;var state_15791__$1 = (function (){var statearr_15819 = state_15791;(statearr_15819[8] = inst_15730);
(statearr_15819[9] = inst_15733);
(statearr_15819[10] = inst_15732);
(statearr_15819[11] = inst_15731);
return statearr_15819;
})();var statearr_15820_15858 = state_15791__$1;(statearr_15820_15858[2] = null);
(statearr_15820_15858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 17))
{var inst_15744 = (state_15791[15]);var inst_15753 = cljs.core.first.call(null,inst_15744);var inst_15754 = cljs.core.async.muxch_STAR_.call(null,inst_15753);var inst_15755 = cljs.core.async.close_BANG_.call(null,inst_15754);var inst_15756 = cljs.core.next.call(null,inst_15744);var inst_15730 = inst_15756;var inst_15731 = null;var inst_15732 = 0;var inst_15733 = 0;var state_15791__$1 = (function (){var statearr_15821 = state_15791;(statearr_15821[8] = inst_15730);
(statearr_15821[9] = inst_15733);
(statearr_15821[10] = inst_15732);
(statearr_15821[11] = inst_15731);
(statearr_15821[16] = inst_15755);
return statearr_15821;
})();var statearr_15822_15859 = state_15791__$1;(statearr_15822_15859[2] = null);
(statearr_15822_15859[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 18))
{var inst_15759 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15823_15860 = state_15791__$1;(statearr_15823_15860[2] = inst_15759);
(statearr_15823_15860[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 19))
{var state_15791__$1 = state_15791;var statearr_15824_15861 = state_15791__$1;(statearr_15824_15861[2] = null);
(statearr_15824_15861[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 20))
{var state_15791__$1 = state_15791;var statearr_15825_15862 = state_15791__$1;(statearr_15825_15862[2] = null);
(statearr_15825_15862[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 21))
{var inst_15784 = (state_15791[2]);var state_15791__$1 = (function (){var statearr_15826 = state_15791;(statearr_15826[17] = inst_15784);
return statearr_15826;
})();var statearr_15827_15863 = state_15791__$1;(statearr_15827_15863[2] = null);
(statearr_15827_15863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 22))
{var inst_15781 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15828_15864 = state_15791__$1;(statearr_15828_15864[2] = inst_15781);
(statearr_15828_15864[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 23))
{var inst_15768 = (state_15791[13]);var inst_15772 = (state_15791[2]);var inst_15773 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15768);var state_15791__$1 = (function (){var statearr_15829 = state_15791;(statearr_15829[18] = inst_15772);
return statearr_15829;
})();var statearr_15830_15865 = state_15791__$1;(statearr_15830_15865[2] = inst_15773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15791__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15792 === 24))
{var inst_15770 = (state_15791[12]);var inst_15720 = (state_15791[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15791,23,Object,null,22);var inst_15777 = cljs.core.async.muxch_STAR_.call(null,inst_15770);var state_15791__$1 = state_15791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15791__$1,25,inst_15777,inst_15720);
} else
{if((state_val_15792 === 25))
{var inst_15779 = (state_15791[2]);var state_15791__$1 = state_15791;var statearr_15831_15866 = state_15791__$1;(statearr_15831_15866[2] = inst_15779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15791__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15835 = (new Array(19));(statearr_15835[0] = state_machine__5425__auto__);
(statearr_15835[1] = 1);
return statearr_15835;
});
var state_machine__5425__auto____1 = (function (state_15791){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15836){if((e15836 instanceof Object))
{var ex__5428__auto__ = e15836;var statearr_15837_15867 = state_15791;(statearr_15837_15867[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15868 = state_15791;
state_15791 = G__15868;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15791){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15838 = f__5495__auto__.call(null);(statearr_15838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15839);
return statearr_15838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5494__auto___16005 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15975){var state_val_15976 = (state_15975[1]);if((state_val_15976 === 1))
{var state_15975__$1 = state_15975;var statearr_15977_16006 = state_15975__$1;(statearr_15977_16006[2] = null);
(statearr_15977_16006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 2))
{var inst_15938 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15939 = 0;var state_15975__$1 = (function (){var statearr_15978 = state_15975;(statearr_15978[7] = inst_15938);
(statearr_15978[8] = inst_15939);
return statearr_15978;
})();var statearr_15979_16007 = state_15975__$1;(statearr_15979_16007[2] = null);
(statearr_15979_16007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 3))
{var inst_15973 = (state_15975[2]);var state_15975__$1 = state_15975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15975__$1,inst_15973);
} else
{if((state_val_15976 === 4))
{var inst_15939 = (state_15975[8]);var inst_15941 = (inst_15939 < cnt);var state_15975__$1 = state_15975;if(cljs.core.truth_(inst_15941))
{var statearr_15980_16008 = state_15975__$1;(statearr_15980_16008[1] = 6);
} else
{var statearr_15981_16009 = state_15975__$1;(statearr_15981_16009[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 5))
{var inst_15959 = (state_15975[2]);var state_15975__$1 = (function (){var statearr_15982 = state_15975;(statearr_15982[9] = inst_15959);
return statearr_15982;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15975__$1,12,dchan);
} else
{if((state_val_15976 === 6))
{var state_15975__$1 = state_15975;var statearr_15983_16010 = state_15975__$1;(statearr_15983_16010[2] = null);
(statearr_15983_16010[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 7))
{var state_15975__$1 = state_15975;var statearr_15984_16011 = state_15975__$1;(statearr_15984_16011[2] = null);
(statearr_15984_16011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 8))
{var inst_15957 = (state_15975[2]);var state_15975__$1 = state_15975;var statearr_15985_16012 = state_15975__$1;(statearr_15985_16012[2] = inst_15957);
(statearr_15985_16012[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 9))
{var inst_15939 = (state_15975[8]);var inst_15952 = (state_15975[2]);var inst_15953 = (inst_15939 + 1);var inst_15939__$1 = inst_15953;var state_15975__$1 = (function (){var statearr_15986 = state_15975;(statearr_15986[8] = inst_15939__$1);
(statearr_15986[10] = inst_15952);
return statearr_15986;
})();var statearr_15987_16013 = state_15975__$1;(statearr_15987_16013[2] = null);
(statearr_15987_16013[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 10))
{var inst_15943 = (state_15975[2]);var inst_15944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15975__$1 = (function (){var statearr_15988 = state_15975;(statearr_15988[11] = inst_15943);
return statearr_15988;
})();var statearr_15989_16014 = state_15975__$1;(statearr_15989_16014[2] = inst_15944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 11))
{var inst_15939 = (state_15975[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15975,10,Object,null,9);var inst_15948 = chs__$1.call(null,inst_15939);var inst_15949 = done.call(null,inst_15939);var inst_15950 = cljs.core.async.take_BANG_.call(null,inst_15948,inst_15949);var state_15975__$1 = state_15975;var statearr_15990_16015 = state_15975__$1;(statearr_15990_16015[2] = inst_15950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 12))
{var inst_15961 = (state_15975[12]);var inst_15961__$1 = (state_15975[2]);var inst_15962 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15961__$1);var state_15975__$1 = (function (){var statearr_15991 = state_15975;(statearr_15991[12] = inst_15961__$1);
return statearr_15991;
})();if(cljs.core.truth_(inst_15962))
{var statearr_15992_16016 = state_15975__$1;(statearr_15992_16016[1] = 13);
} else
{var statearr_15993_16017 = state_15975__$1;(statearr_15993_16017[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 13))
{var inst_15964 = cljs.core.async.close_BANG_.call(null,out);var state_15975__$1 = state_15975;var statearr_15994_16018 = state_15975__$1;(statearr_15994_16018[2] = inst_15964);
(statearr_15994_16018[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 14))
{var inst_15961 = (state_15975[12]);var inst_15966 = cljs.core.apply.call(null,f,inst_15961);var state_15975__$1 = state_15975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15975__$1,16,out,inst_15966);
} else
{if((state_val_15976 === 15))
{var inst_15971 = (state_15975[2]);var state_15975__$1 = state_15975;var statearr_15995_16019 = state_15975__$1;(statearr_15995_16019[2] = inst_15971);
(statearr_15995_16019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15976 === 16))
{var inst_15968 = (state_15975[2]);var state_15975__$1 = (function (){var statearr_15996 = state_15975;(statearr_15996[13] = inst_15968);
return statearr_15996;
})();var statearr_15997_16020 = state_15975__$1;(statearr_15997_16020[2] = null);
(statearr_15997_16020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16001 = (new Array(14));(statearr_16001[0] = state_machine__5425__auto__);
(statearr_16001[1] = 1);
return statearr_16001;
});
var state_machine__5425__auto____1 = (function (state_15975){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15975);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16002){if((e16002 instanceof Object))
{var ex__5428__auto__ = e16002;var statearr_16003_16021 = state_15975;(statearr_16003_16021[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16022 = state_15975;
state_15975 = G__16022;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15975){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16004 = f__5495__auto__.call(null);(statearr_16004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16005);
return statearr_16004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16106){var state_val_16107 = (state_16106[1]);if((state_val_16107 === 1))
{var inst_16077 = cljs.core.vec.call(null,chs);var inst_16078 = inst_16077;var state_16106__$1 = (function (){var statearr_16108 = state_16106;(statearr_16108[7] = inst_16078);
return statearr_16108;
})();var statearr_16109_16131 = state_16106__$1;(statearr_16109_16131[2] = null);
(statearr_16109_16131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 2))
{var inst_16078 = (state_16106[7]);var inst_16080 = cljs.core.count.call(null,inst_16078);var inst_16081 = (inst_16080 > 0);var state_16106__$1 = state_16106;if(cljs.core.truth_(inst_16081))
{var statearr_16110_16132 = state_16106__$1;(statearr_16110_16132[1] = 4);
} else
{var statearr_16111_16133 = state_16106__$1;(statearr_16111_16133[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 3))
{var inst_16104 = (state_16106[2]);var state_16106__$1 = state_16106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16106__$1,inst_16104);
} else
{if((state_val_16107 === 4))
{var inst_16078 = (state_16106[7]);var state_16106__$1 = state_16106;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16106__$1,7,inst_16078);
} else
{if((state_val_16107 === 5))
{var inst_16100 = cljs.core.async.close_BANG_.call(null,out);var state_16106__$1 = state_16106;var statearr_16112_16134 = state_16106__$1;(statearr_16112_16134[2] = inst_16100);
(statearr_16112_16134[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 6))
{var inst_16102 = (state_16106[2]);var state_16106__$1 = state_16106;var statearr_16113_16135 = state_16106__$1;(statearr_16113_16135[2] = inst_16102);
(statearr_16113_16135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 7))
{var inst_16085 = (state_16106[8]);var inst_16086 = (state_16106[9]);var inst_16085__$1 = (state_16106[2]);var inst_16086__$1 = cljs.core.nth.call(null,inst_16085__$1,0,null);var inst_16087 = cljs.core.nth.call(null,inst_16085__$1,1,null);var inst_16088 = (inst_16086__$1 == null);var state_16106__$1 = (function (){var statearr_16114 = state_16106;(statearr_16114[8] = inst_16085__$1);
(statearr_16114[10] = inst_16087);
(statearr_16114[9] = inst_16086__$1);
return statearr_16114;
})();if(cljs.core.truth_(inst_16088))
{var statearr_16115_16136 = state_16106__$1;(statearr_16115_16136[1] = 8);
} else
{var statearr_16116_16137 = state_16106__$1;(statearr_16116_16137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 8))
{var inst_16085 = (state_16106[8]);var inst_16078 = (state_16106[7]);var inst_16087 = (state_16106[10]);var inst_16086 = (state_16106[9]);var inst_16090 = (function (){var c = inst_16087;var v = inst_16086;var vec__16083 = inst_16085;var cs = inst_16078;return ((function (c,v,vec__16083,cs,inst_16085,inst_16078,inst_16087,inst_16086,state_val_16107){
return (function (p1__16023_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16023_SHARP_);
});
;})(c,v,vec__16083,cs,inst_16085,inst_16078,inst_16087,inst_16086,state_val_16107))
})();var inst_16091 = cljs.core.filterv.call(null,inst_16090,inst_16078);var inst_16078__$1 = inst_16091;var state_16106__$1 = (function (){var statearr_16117 = state_16106;(statearr_16117[7] = inst_16078__$1);
return statearr_16117;
})();var statearr_16118_16138 = state_16106__$1;(statearr_16118_16138[2] = null);
(statearr_16118_16138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 9))
{var inst_16086 = (state_16106[9]);var state_16106__$1 = state_16106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16106__$1,11,out,inst_16086);
} else
{if((state_val_16107 === 10))
{var inst_16098 = (state_16106[2]);var state_16106__$1 = state_16106;var statearr_16120_16139 = state_16106__$1;(statearr_16120_16139[2] = inst_16098);
(statearr_16120_16139[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16107 === 11))
{var inst_16078 = (state_16106[7]);var inst_16095 = (state_16106[2]);var tmp16119 = inst_16078;var inst_16078__$1 = tmp16119;var state_16106__$1 = (function (){var statearr_16121 = state_16106;(statearr_16121[11] = inst_16095);
(statearr_16121[7] = inst_16078__$1);
return statearr_16121;
})();var statearr_16122_16140 = state_16106__$1;(statearr_16122_16140[2] = null);
(statearr_16122_16140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16126 = (new Array(12));(statearr_16126[0] = state_machine__5425__auto__);
(statearr_16126[1] = 1);
return statearr_16126;
});
var state_machine__5425__auto____1 = (function (state_16106){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16127){if((e16127 instanceof Object))
{var ex__5428__auto__ = e16127;var statearr_16128_16141 = state_16106;(statearr_16128_16141[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16142 = state_16106;
state_16106 = G__16142;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16106){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16129 = f__5495__auto__.call(null);(statearr_16129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16130);
return statearr_16129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16212){var state_val_16213 = (state_16212[1]);if((state_val_16213 === 1))
{var inst_16189 = 0;var state_16212__$1 = (function (){var statearr_16214 = state_16212;(statearr_16214[7] = inst_16189);
return statearr_16214;
})();var statearr_16215_16236 = state_16212__$1;(statearr_16215_16236[2] = null);
(statearr_16215_16236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 2))
{var inst_16189 = (state_16212[7]);var inst_16191 = (inst_16189 < n);var state_16212__$1 = state_16212;if(cljs.core.truth_(inst_16191))
{var statearr_16216_16237 = state_16212__$1;(statearr_16216_16237[1] = 4);
} else
{var statearr_16217_16238 = state_16212__$1;(statearr_16217_16238[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 3))
{var inst_16209 = (state_16212[2]);var inst_16210 = cljs.core.async.close_BANG_.call(null,out);var state_16212__$1 = (function (){var statearr_16218 = state_16212;(statearr_16218[8] = inst_16209);
return statearr_16218;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16212__$1,inst_16210);
} else
{if((state_val_16213 === 4))
{var state_16212__$1 = state_16212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16212__$1,7,ch);
} else
{if((state_val_16213 === 5))
{var state_16212__$1 = state_16212;var statearr_16219_16239 = state_16212__$1;(statearr_16219_16239[2] = null);
(statearr_16219_16239[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 6))
{var inst_16207 = (state_16212[2]);var state_16212__$1 = state_16212;var statearr_16220_16240 = state_16212__$1;(statearr_16220_16240[2] = inst_16207);
(statearr_16220_16240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 7))
{var inst_16194 = (state_16212[9]);var inst_16194__$1 = (state_16212[2]);var inst_16195 = (inst_16194__$1 == null);var inst_16196 = cljs.core.not.call(null,inst_16195);var state_16212__$1 = (function (){var statearr_16221 = state_16212;(statearr_16221[9] = inst_16194__$1);
return statearr_16221;
})();if(inst_16196)
{var statearr_16222_16241 = state_16212__$1;(statearr_16222_16241[1] = 8);
} else
{var statearr_16223_16242 = state_16212__$1;(statearr_16223_16242[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 8))
{var inst_16194 = (state_16212[9]);var state_16212__$1 = state_16212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16212__$1,11,out,inst_16194);
} else
{if((state_val_16213 === 9))
{var state_16212__$1 = state_16212;var statearr_16224_16243 = state_16212__$1;(statearr_16224_16243[2] = null);
(statearr_16224_16243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 10))
{var inst_16204 = (state_16212[2]);var state_16212__$1 = state_16212;var statearr_16225_16244 = state_16212__$1;(statearr_16225_16244[2] = inst_16204);
(statearr_16225_16244[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16213 === 11))
{var inst_16189 = (state_16212[7]);var inst_16199 = (state_16212[2]);var inst_16200 = (inst_16189 + 1);var inst_16189__$1 = inst_16200;var state_16212__$1 = (function (){var statearr_16226 = state_16212;(statearr_16226[7] = inst_16189__$1);
(statearr_16226[10] = inst_16199);
return statearr_16226;
})();var statearr_16227_16245 = state_16212__$1;(statearr_16227_16245[2] = null);
(statearr_16227_16245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16231 = (new Array(11));(statearr_16231[0] = state_machine__5425__auto__);
(statearr_16231[1] = 1);
return statearr_16231;
});
var state_machine__5425__auto____1 = (function (state_16212){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16232){if((e16232 instanceof Object))
{var ex__5428__auto__ = e16232;var statearr_16233_16246 = state_16212;(statearr_16233_16246[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16247 = state_16212;
state_16212 = G__16247;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16212){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16234 = f__5495__auto__.call(null);(statearr_16234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16235);
return statearr_16234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16319){var state_val_16320 = (state_16319[1]);if((state_val_16320 === 1))
{var inst_16296 = null;var state_16319__$1 = (function (){var statearr_16321 = state_16319;(statearr_16321[7] = inst_16296);
return statearr_16321;
})();var statearr_16322_16345 = state_16319__$1;(statearr_16322_16345[2] = null);
(statearr_16322_16345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 2))
{var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16319__$1,4,ch);
} else
{if((state_val_16320 === 3))
{var inst_16316 = (state_16319[2]);var inst_16317 = cljs.core.async.close_BANG_.call(null,out);var state_16319__$1 = (function (){var statearr_16323 = state_16319;(statearr_16323[8] = inst_16316);
return statearr_16323;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16319__$1,inst_16317);
} else
{if((state_val_16320 === 4))
{var inst_16299 = (state_16319[9]);var inst_16299__$1 = (state_16319[2]);var inst_16300 = (inst_16299__$1 == null);var inst_16301 = cljs.core.not.call(null,inst_16300);var state_16319__$1 = (function (){var statearr_16324 = state_16319;(statearr_16324[9] = inst_16299__$1);
return statearr_16324;
})();if(inst_16301)
{var statearr_16325_16346 = state_16319__$1;(statearr_16325_16346[1] = 5);
} else
{var statearr_16326_16347 = state_16319__$1;(statearr_16326_16347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 5))
{var inst_16299 = (state_16319[9]);var inst_16296 = (state_16319[7]);var inst_16303 = cljs.core._EQ_.call(null,inst_16299,inst_16296);var state_16319__$1 = state_16319;if(inst_16303)
{var statearr_16327_16348 = state_16319__$1;(statearr_16327_16348[1] = 8);
} else
{var statearr_16328_16349 = state_16319__$1;(statearr_16328_16349[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 6))
{var state_16319__$1 = state_16319;var statearr_16330_16350 = state_16319__$1;(statearr_16330_16350[2] = null);
(statearr_16330_16350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 7))
{var inst_16314 = (state_16319[2]);var state_16319__$1 = state_16319;var statearr_16331_16351 = state_16319__$1;(statearr_16331_16351[2] = inst_16314);
(statearr_16331_16351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 8))
{var inst_16296 = (state_16319[7]);var tmp16329 = inst_16296;var inst_16296__$1 = tmp16329;var state_16319__$1 = (function (){var statearr_16332 = state_16319;(statearr_16332[7] = inst_16296__$1);
return statearr_16332;
})();var statearr_16333_16352 = state_16319__$1;(statearr_16333_16352[2] = null);
(statearr_16333_16352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 9))
{var inst_16299 = (state_16319[9]);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16319__$1,11,out,inst_16299);
} else
{if((state_val_16320 === 10))
{var inst_16311 = (state_16319[2]);var state_16319__$1 = state_16319;var statearr_16334_16353 = state_16319__$1;(statearr_16334_16353[2] = inst_16311);
(statearr_16334_16353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16320 === 11))
{var inst_16299 = (state_16319[9]);var inst_16308 = (state_16319[2]);var inst_16296 = inst_16299;var state_16319__$1 = (function (){var statearr_16335 = state_16319;(statearr_16335[10] = inst_16308);
(statearr_16335[7] = inst_16296);
return statearr_16335;
})();var statearr_16336_16354 = state_16319__$1;(statearr_16336_16354[2] = null);
(statearr_16336_16354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16340 = (new Array(11));(statearr_16340[0] = state_machine__5425__auto__);
(statearr_16340[1] = 1);
return statearr_16340;
});
var state_machine__5425__auto____1 = (function (state_16319){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16341){if((e16341 instanceof Object))
{var ex__5428__auto__ = e16341;var statearr_16342_16355 = state_16319;(statearr_16342_16355[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16356 = state_16319;
state_16319 = G__16356;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16319){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16343 = f__5495__auto__.call(null);(statearr_16343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16344);
return statearr_16343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16461){var state_val_16462 = (state_16461[1]);if((state_val_16462 === 1))
{var inst_16424 = (new Array(n));var inst_16425 = inst_16424;var inst_16426 = 0;var state_16461__$1 = (function (){var statearr_16463 = state_16461;(statearr_16463[7] = inst_16426);
(statearr_16463[8] = inst_16425);
return statearr_16463;
})();var statearr_16464_16492 = state_16461__$1;(statearr_16464_16492[2] = null);
(statearr_16464_16492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 2))
{var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16461__$1,4,ch);
} else
{if((state_val_16462 === 3))
{var inst_16459 = (state_16461[2]);var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16461__$1,inst_16459);
} else
{if((state_val_16462 === 4))
{var inst_16429 = (state_16461[9]);var inst_16429__$1 = (state_16461[2]);var inst_16430 = (inst_16429__$1 == null);var inst_16431 = cljs.core.not.call(null,inst_16430);var state_16461__$1 = (function (){var statearr_16465 = state_16461;(statearr_16465[9] = inst_16429__$1);
return statearr_16465;
})();if(inst_16431)
{var statearr_16466_16493 = state_16461__$1;(statearr_16466_16493[1] = 5);
} else
{var statearr_16467_16494 = state_16461__$1;(statearr_16467_16494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 5))
{var inst_16429 = (state_16461[9]);var inst_16434 = (state_16461[10]);var inst_16426 = (state_16461[7]);var inst_16425 = (state_16461[8]);var inst_16433 = (inst_16425[inst_16426] = inst_16429);var inst_16434__$1 = (inst_16426 + 1);var inst_16435 = (inst_16434__$1 < n);var state_16461__$1 = (function (){var statearr_16468 = state_16461;(statearr_16468[11] = inst_16433);
(statearr_16468[10] = inst_16434__$1);
return statearr_16468;
})();if(cljs.core.truth_(inst_16435))
{var statearr_16469_16495 = state_16461__$1;(statearr_16469_16495[1] = 8);
} else
{var statearr_16470_16496 = state_16461__$1;(statearr_16470_16496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 6))
{var inst_16426 = (state_16461[7]);var inst_16447 = (inst_16426 > 0);var state_16461__$1 = state_16461;if(cljs.core.truth_(inst_16447))
{var statearr_16472_16497 = state_16461__$1;(statearr_16472_16497[1] = 12);
} else
{var statearr_16473_16498 = state_16461__$1;(statearr_16473_16498[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 7))
{var inst_16457 = (state_16461[2]);var state_16461__$1 = state_16461;var statearr_16474_16499 = state_16461__$1;(statearr_16474_16499[2] = inst_16457);
(statearr_16474_16499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 8))
{var inst_16434 = (state_16461[10]);var inst_16425 = (state_16461[8]);var tmp16471 = inst_16425;var inst_16425__$1 = tmp16471;var inst_16426 = inst_16434;var state_16461__$1 = (function (){var statearr_16475 = state_16461;(statearr_16475[7] = inst_16426);
(statearr_16475[8] = inst_16425__$1);
return statearr_16475;
})();var statearr_16476_16500 = state_16461__$1;(statearr_16476_16500[2] = null);
(statearr_16476_16500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 9))
{var inst_16425 = (state_16461[8]);var inst_16439 = cljs.core.vec.call(null,inst_16425);var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16461__$1,11,out,inst_16439);
} else
{if((state_val_16462 === 10))
{var inst_16445 = (state_16461[2]);var state_16461__$1 = state_16461;var statearr_16477_16501 = state_16461__$1;(statearr_16477_16501[2] = inst_16445);
(statearr_16477_16501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 11))
{var inst_16441 = (state_16461[2]);var inst_16442 = (new Array(n));var inst_16425 = inst_16442;var inst_16426 = 0;var state_16461__$1 = (function (){var statearr_16478 = state_16461;(statearr_16478[7] = inst_16426);
(statearr_16478[8] = inst_16425);
(statearr_16478[12] = inst_16441);
return statearr_16478;
})();var statearr_16479_16502 = state_16461__$1;(statearr_16479_16502[2] = null);
(statearr_16479_16502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 12))
{var inst_16425 = (state_16461[8]);var inst_16449 = cljs.core.vec.call(null,inst_16425);var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16461__$1,15,out,inst_16449);
} else
{if((state_val_16462 === 13))
{var state_16461__$1 = state_16461;var statearr_16480_16503 = state_16461__$1;(statearr_16480_16503[2] = null);
(statearr_16480_16503[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 14))
{var inst_16454 = (state_16461[2]);var inst_16455 = cljs.core.async.close_BANG_.call(null,out);var state_16461__$1 = (function (){var statearr_16481 = state_16461;(statearr_16481[13] = inst_16454);
return statearr_16481;
})();var statearr_16482_16504 = state_16461__$1;(statearr_16482_16504[2] = inst_16455);
(statearr_16482_16504[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 15))
{var inst_16451 = (state_16461[2]);var state_16461__$1 = state_16461;var statearr_16483_16505 = state_16461__$1;(statearr_16483_16505[2] = inst_16451);
(statearr_16483_16505[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16487 = (new Array(14));(statearr_16487[0] = state_machine__5425__auto__);
(statearr_16487[1] = 1);
return statearr_16487;
});
var state_machine__5425__auto____1 = (function (state_16461){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16488){if((e16488 instanceof Object))
{var ex__5428__auto__ = e16488;var statearr_16489_16506 = state_16461;(statearr_16489_16506[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16507 = state_16461;
state_16461 = G__16507;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16461){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16490 = f__5495__auto__.call(null);(statearr_16490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16491);
return statearr_16490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16620){var state_val_16621 = (state_16620[1]);if((state_val_16621 === 1))
{var inst_16579 = (new Array(0));var inst_16580 = inst_16579;var inst_16581 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16620__$1 = (function (){var statearr_16622 = state_16620;(statearr_16622[7] = inst_16581);
(statearr_16622[8] = inst_16580);
return statearr_16622;
})();var statearr_16623_16651 = state_16620__$1;(statearr_16623_16651[2] = null);
(statearr_16623_16651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 2))
{var state_16620__$1 = state_16620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16620__$1,4,ch);
} else
{if((state_val_16621 === 3))
{var inst_16618 = (state_16620[2]);var state_16620__$1 = state_16620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16620__$1,inst_16618);
} else
{if((state_val_16621 === 4))
{var inst_16584 = (state_16620[9]);var inst_16584__$1 = (state_16620[2]);var inst_16585 = (inst_16584__$1 == null);var inst_16586 = cljs.core.not.call(null,inst_16585);var state_16620__$1 = (function (){var statearr_16624 = state_16620;(statearr_16624[9] = inst_16584__$1);
return statearr_16624;
})();if(inst_16586)
{var statearr_16625_16652 = state_16620__$1;(statearr_16625_16652[1] = 5);
} else
{var statearr_16626_16653 = state_16620__$1;(statearr_16626_16653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 5))
{var inst_16588 = (state_16620[10]);var inst_16581 = (state_16620[7]);var inst_16584 = (state_16620[9]);var inst_16588__$1 = f.call(null,inst_16584);var inst_16589 = cljs.core._EQ_.call(null,inst_16588__$1,inst_16581);var inst_16590 = cljs.core.keyword_identical_QMARK_.call(null,inst_16581,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16591 = (inst_16589) || (inst_16590);var state_16620__$1 = (function (){var statearr_16627 = state_16620;(statearr_16627[10] = inst_16588__$1);
return statearr_16627;
})();if(cljs.core.truth_(inst_16591))
{var statearr_16628_16654 = state_16620__$1;(statearr_16628_16654[1] = 8);
} else
{var statearr_16629_16655 = state_16620__$1;(statearr_16629_16655[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 6))
{var inst_16580 = (state_16620[8]);var inst_16605 = inst_16580.length;var inst_16606 = (inst_16605 > 0);var state_16620__$1 = state_16620;if(cljs.core.truth_(inst_16606))
{var statearr_16631_16656 = state_16620__$1;(statearr_16631_16656[1] = 12);
} else
{var statearr_16632_16657 = state_16620__$1;(statearr_16632_16657[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 7))
{var inst_16616 = (state_16620[2]);var state_16620__$1 = state_16620;var statearr_16633_16658 = state_16620__$1;(statearr_16633_16658[2] = inst_16616);
(statearr_16633_16658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 8))
{var inst_16588 = (state_16620[10]);var inst_16584 = (state_16620[9]);var inst_16580 = (state_16620[8]);var inst_16593 = inst_16580.push(inst_16584);var tmp16630 = inst_16580;var inst_16580__$1 = tmp16630;var inst_16581 = inst_16588;var state_16620__$1 = (function (){var statearr_16634 = state_16620;(statearr_16634[7] = inst_16581);
(statearr_16634[11] = inst_16593);
(statearr_16634[8] = inst_16580__$1);
return statearr_16634;
})();var statearr_16635_16659 = state_16620__$1;(statearr_16635_16659[2] = null);
(statearr_16635_16659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 9))
{var inst_16580 = (state_16620[8]);var inst_16596 = cljs.core.vec.call(null,inst_16580);var state_16620__$1 = state_16620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16620__$1,11,out,inst_16596);
} else
{if((state_val_16621 === 10))
{var inst_16603 = (state_16620[2]);var state_16620__$1 = state_16620;var statearr_16636_16660 = state_16620__$1;(statearr_16636_16660[2] = inst_16603);
(statearr_16636_16660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 11))
{var inst_16588 = (state_16620[10]);var inst_16584 = (state_16620[9]);var inst_16598 = (state_16620[2]);var inst_16599 = (new Array(0));var inst_16600 = inst_16599.push(inst_16584);var inst_16580 = inst_16599;var inst_16581 = inst_16588;var state_16620__$1 = (function (){var statearr_16637 = state_16620;(statearr_16637[7] = inst_16581);
(statearr_16637[12] = inst_16598);
(statearr_16637[8] = inst_16580);
(statearr_16637[13] = inst_16600);
return statearr_16637;
})();var statearr_16638_16661 = state_16620__$1;(statearr_16638_16661[2] = null);
(statearr_16638_16661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 12))
{var inst_16580 = (state_16620[8]);var inst_16608 = cljs.core.vec.call(null,inst_16580);var state_16620__$1 = state_16620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16620__$1,15,out,inst_16608);
} else
{if((state_val_16621 === 13))
{var state_16620__$1 = state_16620;var statearr_16639_16662 = state_16620__$1;(statearr_16639_16662[2] = null);
(statearr_16639_16662[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 14))
{var inst_16613 = (state_16620[2]);var inst_16614 = cljs.core.async.close_BANG_.call(null,out);var state_16620__$1 = (function (){var statearr_16640 = state_16620;(statearr_16640[14] = inst_16613);
return statearr_16640;
})();var statearr_16641_16663 = state_16620__$1;(statearr_16641_16663[2] = inst_16614);
(statearr_16641_16663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16621 === 15))
{var inst_16610 = (state_16620[2]);var state_16620__$1 = state_16620;var statearr_16642_16664 = state_16620__$1;(statearr_16642_16664[2] = inst_16610);
(statearr_16642_16664[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16646 = (new Array(15));(statearr_16646[0] = state_machine__5425__auto__);
(statearr_16646[1] = 1);
return statearr_16646;
});
var state_machine__5425__auto____1 = (function (state_16620){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16647){if((e16647 instanceof Object))
{var ex__5428__auto__ = e16647;var statearr_16648_16665 = state_16620;(statearr_16648_16665[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16666 = state_16620;
state_16620 = G__16666;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16620){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16649 = f__5495__auto__.call(null);(statearr_16649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16650);
return statearr_16649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map