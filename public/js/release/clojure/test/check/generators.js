// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7031__auto____$1,k__7032__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k9765,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__9767 = (((k9765 instanceof cljs.core.Keyword))?k9765.fqn:null);
switch (G__9767) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9765,else__7034__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer(writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7046__auto__,pr_pair__7048__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__7047__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$ = true;

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9764){
var self__ = this;
var G__9764__$1 = this;
return (new cljs.core.RecordIter((0),G__9764__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen], null),cljs.core._iterator(self__.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap(this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map(this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gen,null], null), null),k__7041__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7041__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__9764){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__9768 = cljs.core.keyword_identical_QMARK_;
var expr__9769 = k__7039__auto__;
if(cljs.core.truth_((function (){var G__9771 = cljs.core.cst$kw$gen;
var G__9772 = expr__9769;
return (pred__9768.cljs$core$IFn$_invoke$arity$2 ? pred__9768.cljs$core$IFn$_invoke$arity$2(G__9771,G__9772) : pred__9768.call(null,G__9771,G__9772));
})())){
return (new clojure.test.check.generators.Generator(G__9764,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7039__auto__,G__9764),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__9764){
var self__ = this;
var this__7030__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__9764,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7037__auto__)){
return cljs.core._assoc(this__7036__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gen], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write(writer__7066__auto__,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__9766){
return (new clojure.test.check.generators.Generator(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(G__9766),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9766,cljs.core.cst$kw$gen),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__9774,rnd,size){
var map__9777 = p__9774;
var map__9777__$1 = ((((!((map__9777 == null)))?((((map__9777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9777):map__9777);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9777__$1,cljs.core.cst$kw$gen);
return (generator_fn.cljs$core$IFn$_invoke$arity$2 ? generator_fn.cljs$core$IFn$_invoke$arity$2(rnd,size) : generator_fn.call(null,rnd,size));
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen((function (rnd,size){
return value;
}));
});
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__9779){
var map__9783 = p__9779;
var map__9783__$1 = ((((!((map__9783 == null)))?((((map__9783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9783):map__9783);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9783__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__9783,map__9783__$1,h){
return (function (rnd,size){
var G__9785 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__9785) : k.call(null,G__9785));
});})(map__9783,map__9783__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__9786,k){
var map__9794 = p__9786;
var map__9794__$1 = ((((!((map__9794 == null)))?((((map__9794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9794):map__9794);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9794__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__9794,map__9794__$1,h){
return (function (rnd,size){
var vec__9796 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9796,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9796,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__9799 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__9799__$1 = ((((!((map__9799 == null)))?((((map__9799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9799):map__9799);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9799__$1,cljs.core.cst$kw$gen);
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
});})(map__9794,map__9794__$1,h))
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__9804 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9804,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9804,(1),null);
return cljs.core.cons(r1,clojure$test$check$generators$lazy_random_states(r2));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen((function (rnd,size){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__9807_SHARP_,p2__9808_SHARP_){
return clojure.test.check.generators.call_gen(p1__9807_SHARP_,p2__9808_SHARP_,size);
}),gens,clojure.test.check.random.split_n(rnd,cljs.core.count(gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to fmap must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_fmap((function (p1__9809_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__9809_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.pure(value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap(clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen((function (rnd,size){
return clojure.test.check.rose_tree.fmap((function (p1__9810_SHARP_){
return clojure.test.check.generators.call_gen(p1__9810_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap(k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to bind must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind(generator,clojure.test.check.generators.bind_helper(k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var args9813 = [];
var len__7484__auto___9816 = arguments.length;
var i__7485__auto___9817 = (0);
while(true){
if((i__7485__auto___9817 < len__7484__auto___9816)){
args9813.push((arguments[i__7485__auto___9817]));

var G__9818 = (i__7485__auto___9817 + (1));
i__7485__auto___9817 = G__9818;
continue;
} else {
}
break;
}

var G__9815 = args9813.length;
switch (G__9815) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9813.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2(generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (r,size_seq){
return (function (p1__9811_SHARP_,p2__9812_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,p1__9811_SHARP_,p2__9812_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states(r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var args9820 = [];
var len__7484__auto___9823 = arguments.length;
var i__7485__auto___9824 = (0);
while(true){
if((i__7485__auto___9824 < len__7484__auto___9823)){
args9820.push((arguments[i__7485__auto___9824]));

var G__9825 = (i__7485__auto___9824 + (1));
i__7485__auto___9824 = G__9825;
continue;
} else {
}
break;
}

var G__9822 = args9820.length;
switch (G__9822) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9820.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2(generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sample must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_samples,clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1(generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var args9827 = [];
var len__7484__auto___9830 = arguments.length;
var i__7485__auto___9831 = (0);
while(true){
if((i__7485__auto___9831 < len__7484__auto___9830)){
args9827.push((arguments[i__7485__auto___9831]));

var G__9832 = (i__7485__auto___9831 + (1));
i__7485__auto___9831 = G__9832;
continue;
} else {
}
break;
}

var G__9829 = args9827.length;
switch (G__9829) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9827.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2(generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__9834_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__9834_SHARP_);
}),cljs.core.iterate((function (p1__9835_SHARP_){
return cljs.core.quot(p1__9835_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9836_SHARP_){
return (integer - p1__9836_SHARP_);
}),clojure.test.check.generators.halfs(integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose(value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure$test$check$generators$int_rose_tree,clojure.test.check.generators.shrink_int(value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$((function (){var G__9838 = (lower + ((factor * (1.0 + upper)) - (factor * lower)));
return Math.floor(G__9838);
})());
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long(clojure.test.check.random.rand_double(rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen((function (rnd,size){
var sized_gen__$1 = (sized_gen.cljs$core$IFn$_invoke$arity$1 ? sized_gen.cljs$core$IFn$_invoke$arity$1(size) : sized_gen.call(null,size));
return clojure.test.check.generators.call_gen(sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to resize must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

var map__9841 = generator;
var map__9841__$1 = ((((!((map__9841 == null)))?((((map__9841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9841):map__9841);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9841__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__9841,map__9841__$1,gen){
return (function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
});})(map__9841,map__9841__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized((function (n){
return clojure.test.check.generators.resize((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen((function (rnd,_size){
var value = clojure.test.check.generators.rand_range(rnd,lower,upper);
return clojure.test.check.rose_tree.filter(((function (value){
return (function (p1__9843_SHARP_){
return ((p1__9843_SHARP_ >= lower)) && ((p1__9843_SHARP_ <= upper));
});})(value))
,clojure.test.check.generators.int_rose_tree(value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to one-of must be a collection of generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(cljs.core.count(generators) - (1))),(function (p1__9844_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__9844_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__9845,n){
while(true){
var vec__9852 = p__9845;
var seq__9853 = cljs.core.seq(vec__9852);
var first__9854 = cljs.core.first(seq__9853);
var seq__9853__$1 = cljs.core.next(seq__9853);
var h = first__9854;
var tail = seq__9853__$1;
var vec__9855 = h;
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9855,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9855,(1),null);
if((n <= chance)){
return gen;
} else {
var G__9858 = tail;
var G__9859 = (n - chance);
p__9845 = G__9858;
n = G__9859;
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_((function (p__9865){
var vec__9866 = p__9865;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9866,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9866,(1),null);
var and__6397__auto__ = typeof x === 'number';
if(and__6397__auto__){
return clojure.test.check.generators.generator_QMARK_(g);
} else {
return and__6397__auto__;
}
}),pairs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to frequency must be a list of [num generator] pairs"),cljs.core.str("\n"),cljs.core.str("(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)")].join('')));
}

var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((1),total),((function (total){
return (function (p1__9860_SHARP_){
return clojure.test.check.generators.pick(pairs,clojure.test.check.rose_tree.root(p1__9860_SHARP_));
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq(coll)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("elements cannot be called with an empty collection"),cljs.core.str("\n"),cljs.core.str("(seq coll)")].join('')));
}

var v = cljs.core.vec(coll);
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(cljs.core.count(v) - (1))),((function (v){
return (function (p1__9869_SHARP_){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.fmap(v,p1__9869_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Couldn't satisfy such-that predicate after "),cljs.core.str(max_tries),cljs.core.str(" tries.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__9874 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(1),null);
var value = clojure.test.check.generators.call_gen(gen,r1,size);
if(cljs.core.truth_((function (){var G__9877 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__9877) : pred.call(null,G__9877));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__9878 = max_tries;
var G__9879 = pred;
var G__9880 = gen;
var G__9881 = (tries_left - (1));
var G__9882 = r2;
var G__9883 = (size + (1));
max_tries = G__9878;
pred = G__9879;
gen = G__9880;
tries_left = G__9881;
rng = G__9882;
size = G__9883;
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var args9884 = [];
var len__7484__auto___9887 = arguments.length;
var i__7485__auto___9888 = (0);
while(true){
if((i__7485__auto___9888 < len__7484__auto___9887)){
args9884.push((arguments[i__7485__auto___9888]));

var G__9889 = (i__7485__auto___9888 + (1));
i__7485__auto___9888 = G__9889;
continue;
} else {
}
break;
}

var G__9886 = args9884.length;
switch (G__9886) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9884.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to such-that must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.make_gen((function (rand_seed,size){
return clojure.test.check.generators.such_that_helper(max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to not-empty must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to no-shrink must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind(gen,(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to shrink-2 must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind(gen,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__7491__auto__ = [];
var len__7484__auto___9892 = arguments.length;
var i__7485__auto___9893 = (0);
while(true){
if((i__7485__auto___9893 < len__7484__auto___9892)){
args__7491__auto__.push((arguments[i__7485__auto___9893]));

var G__9894 = (i__7485__auto___9893 + (1));
i__7485__auto___9893 = G__9894;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Args to tuple must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(generators),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.zip(cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq9891){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9891));
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.choose((- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap((function (p1__9895_SHARP_){
var G__9896 = cljs.core.long$(p1__9895_SHARP_);
return Math.abs(G__9896);
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap((function (p1__9897_SHARP_){
return ((-1) * p1__9897_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap(cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap(cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var args9899 = [];
var len__7484__auto___9902 = arguments.length;
var i__7485__auto___9903 = (0);
while(true){
if((i__7485__auto___9903 < len__7484__auto___9902)){
args9899.push((arguments[i__7485__auto___9903]));

var G__9904 = (i__7485__auto___9903 + (1));
i__7485__auto___9903 = G__9904;
continue;
} else {
}
break;
}

var G__9901 = args9899.length;
switch (G__9901) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9899.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__9898_SHARP_){
return clojure.test.check.generators.choose((0),p1__9898_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose(min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.filter((function (v){
return ((cljs.core.count(v) >= min_elements)) && ((cljs.core.count(v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__9906_SHARP_){
return clojure.test.check.generators.choose((0),p1__9906_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__9907){
var vec__9911 = p__9907;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.array_seq([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose((0),(cljs.core.count(coll) - (1)));
return clojure.test.check.generators.fmap(((function (index_gen){
return (function (p1__9914_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.swap,cljs.core.vec(coll),p1__9914_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([index_gen,index_gen], 0)),(0),((2) * cljs.core.count(coll))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__7491__auto__ = [];
var len__7484__auto___9917 = arguments.length;
var i__7485__auto___9918 = (0);
while(true){
if((i__7485__auto___9918 < len__7484__auto___9917)){
args__7491__auto__.push((arguments[i__7485__auto___9918]));

var G__9919 = (i__7485__auto___9918 + (1));
i__7485__auto___9918 = G__9919;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),kvs);
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(kvs));
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Value args to hash-map must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? vs)")].join('')));
}

return clojure.test.check.generators.fmap(((function (ks,vs){
return (function (p1__9915_SHARP_){
return cljs.core.zipmap(ks,p1__9915_SHARP_);
});})(ks,vs))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq9916){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9916));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return cljs.core.some_QMARK_(cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(s,k));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) && ((cljs.core.count(rose_trees) < min_elements))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gen,gen,cljs.core.cst$kw$max_DASH_tries,max_tries,cljs.core.cst$kw$num_DASH_elements,num_elements,cljs.core.cst$kw$so_DASH_far,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_(rose_trees))], null));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rose_trees),num_elements))){
return clojure.test.check.rose_tree.shrink(((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__9931__delegate = function (rest__9920_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__9920_SHARP_);
};
var G__9931 = function (var_args){
var rest__9920_SHARP_ = null;
if (arguments.length > 0) {
var G__9932__i = 0, G__9932__a = new Array(arguments.length -  0);
while (G__9932__i < G__9932__a.length) {G__9932__a[G__9932__i] = arguments[G__9932__i + 0]; ++G__9932__i;}
  rest__9920_SHARP_ = new cljs.core.IndexedSeq(G__9932__a,0);
} 
return G__9931__delegate.call(this,rest__9920_SHARP_);};
G__9931.cljs$lang$maxFixedArity = 0;
G__9931.cljs$lang$applyTo = (function (arglist__9933){
var rest__9920_SHARP_ = cljs.core.seq(arglist__9933);
return G__9931__delegate(rest__9920_SHARP_);
});
G__9931.cljs$core$IFn$_invoke$arity$variadic = G__9931__delegate;
return G__9931;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__9926 = rng__$1;
var G__9927 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__9926,G__9927) : shuffle_fn.call(null,G__9926,G__9927));
})());
} else {
var vec__9928 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9928,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9928,(1),null);
var rose = clojure.test.check.generators.call_gen(gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root(rose);
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(root) : key_fn.call(null,root));
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_(s,k))){
var G__9934 = rose_trees;
var G__9935 = s;
var G__9936 = rng2;
var G__9937 = (size__$1 + (1));
var G__9938 = (tries + (1));
rose_trees = G__9934;
s = G__9935;
rng__$1 = G__9936;
size__$1 = G__9937;
tries = G__9938;
continue;
} else {
var G__9939 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__9940 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__9941 = rng2;
var G__9942 = size__$1;
var G__9943 = (0);
rose_trees = G__9939;
s = G__9940;
rng__$1 = G__9941;
size__$1 = G__9942;
tries = G__9943;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__6409__auto__ = cljs.core.empty_QMARK_(coll);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty(coll);
var v = cljs.core.vec(coll);
var card = cljs.core.count(coll);
var dec_card = (card - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (empty_coll,v,card,dec_card){
return (function (p__9951,idx){
var vec__9952 = p__9951;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,(1),null);
var vec__9955 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9955,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9955,(1),null);
var swap_idx = clojure.test.check.generators.rand_range(rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__9964){
var map__9967 = p__9964;
var map__9967__$1 = ((((!((map__9967 == null)))?((((map__9967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9967):map__9967);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9967__$1,cljs.core.cst$kw$num_DASH_elements);
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9967__$1,cljs.core.cst$kw$min_DASH_elements);
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9967__$1,cljs.core.cst$kw$max_DASH_elements);
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9967__$1,cljs.core.cst$kw$max_DASH_tries,(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
);
var hard_min_elements = (function (){var or__6409__auto__ = num_elements;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = min_elements;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9958_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__9958_SHARP_));
});})(shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
;
if(((min_elements == null)) && ((max_elements == null))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen(((function (size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9959_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__9959_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
);
} else {
var min_elements__$1 = (function (){var or__6409__auto__ = min_elements;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9960_SHARP_){
return ((min_elements__$1 <= cljs.core.count(p1__9960_SHARP_))) && ((cljs.core.count(p1__9960_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9961_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__9961_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators.choose(min_elements__$1,max_elements):clojure.test.check.generators.sized(((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9962_SHARP_){
return clojure.test.check.generators.choose(min_elements__$1,(min_elements__$1 + p1__9962_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators.make_gen(((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__9963_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__9963_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__9967,map__9967__$1,num_elements,min_elements,max_elements,max_tries))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var args9969 = [];
var len__7484__auto___9972 = arguments.length;
var i__7485__auto___9973 = (0);
while(true){
if((i__7485__auto___9973 < len__7484__auto___9972)){
args9969.push((arguments[i__7485__auto___9973]));

var G__9974 = (i__7485__auto___9973 + (1));
i__7485__auto___9973 = G__9974;
continue;
} else {
}
break;
}

var G__9971 = args9969.length;
switch (G__9971) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9969.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var args9976 = [];
var len__7484__auto___9979 = arguments.length;
var i__7485__auto___9980 = (0);
while(true){
if((i__7485__auto___9980 < len__7484__auto___9979)){
args9976.push((arguments[i__7485__auto___9980]));

var G__9981 = (i__7485__auto___9980 + (1));
i__7485__auto___9980 = G__9981;
continue;
} else {
}
break;
}

var G__9978 = args9976.length;
switch (G__9978) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9976.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var args9983 = [];
var len__7484__auto___9986 = arguments.length;
var i__7485__auto___9987 = (0);
while(true){
if((i__7485__auto___9987 < len__7484__auto___9986)){
args9983.push((arguments[i__7485__auto___9987]));

var G__9988 = (i__7485__auto___9987 + (1));
i__7485__auto___9987 = G__9988;
continue;
} else {
}
break;
}

var G__9985 = args9983.length;
switch (G__9985) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9983.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var args9990 = [];
var len__7484__auto___9993 = arguments.length;
var i__7485__auto___9994 = (0);
while(true){
if((i__7485__auto___9994 < len__7484__auto___9993)){
args9990.push((arguments[i__7485__auto___9994]));

var G__9995 = (i__7485__auto___9994 + (1));
i__7485__auto___9994 = G__9995;
continue;
} else {
}
break;
}

var G__9992 = args9990.length;
switch (G__9992) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9990.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var args9997 = [];
var len__7484__auto___10000 = arguments.length;
var i__7485__auto___10001 = (0);
while(true){
if((i__7485__auto___10001 < len__7484__auto___10000)){
args9997.push((arguments[i__7485__auto___10001]));

var G__10002 = (i__7485__auto___10001 + (1));
i__7485__auto___10001 = G__10002;
continue;
} else {
}
break;
}

var G__9999 = args9997.length;
switch (G__9999) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9997.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var args10004 = [];
var len__7484__auto___10007 = arguments.length;
var i__7485__auto___10008 = (0);
while(true){
if((i__7485__auto___10008 < len__7484__auto___10007)){
args10004.push((arguments[i__7485__auto___10008]));

var G__10009 = (i__7485__auto___10008 + (1));
i__7485__auto___10008 = G__10009;
continue;
} else {
}
break;
}

var G__10006 = args10004.length;
switch (G__10006) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10004.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sorted-set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.sorted_set(),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var args10011 = [];
var len__7484__auto___10014 = arguments.length;
var i__7485__auto___10015 = (0);
while(true){
if((i__7485__auto___10015 < len__7484__auto___10014)){
args10011.push((arguments[i__7485__auto___10015]));

var G__10016 = (i__7485__auto___10015 + (1));
i__7485__auto___10015 = G__10016;
continue;
} else {
}
break;
}

var G__10013 = args10011.length;
switch (G__10013) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10011.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([key_gen,val_gen], 0)),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen((function (rnd,_size){
return clojure.test.check.rose_tree.pure(clojure.test.check.random.rand_long(rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__10020 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs(G__10020);
} else {
return G__10020;
}
})();
while(true){
if(((min <= res)) && ((res <= max))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if(((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max))){
return res_SINGLEQUOTE_;
} else {
var G__10022 = ((function (){var G__10021 = res;
if(cljs.core.odd_QMARK_(res)){
return (((res < (0)))?cljs.core.inc:cljs.core.dec).call(null,G__10021);
} else {
return G__10021;
}
})() / (2));
res = G__10022;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized((function (size){
var size__$1 = (function (){var x__6740__auto__ = size;
var y__6741__auto__ = (1);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})();
var max_bit_count = (function (){var x__6747__auto__ = size__$1;
var y__6748__auto__ = (54);
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})();
return clojure.test.check.generators.gen_fmap(((function (size__$1,max_bit_count){
return (function (rose){
var vec__10026 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10026,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10026,(1),null);
return clojure.test.check.generators.int_rose_tree(clojure.test.check.generators.long__GT_large_integer(bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.choose((1),max_bit_count),clojure.test.check.generators.gen_raw_long], 0)));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__10032){
var map__10035 = p__10032;
var map__10035__$1 = ((((!((map__10035 == null)))?((((map__10035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10035):map__10035);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10035__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10035__$1,cljs.core.cst$kw$max);
var min__$1 = (function (){var or__6409__auto__ = min;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__6409__auto__ = max;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(((function (min__$1,max__$1,map__10035,map__10035__$1,min,max){
return (function (p1__10029_SHARP_){
return ((min__$1 <= p1__10029_SHARP_)) && ((p1__10029_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__10035,map__10035__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__10035,map__10035__$1,min,max){
return (function (p1__10030_SHARP_){
return (max__$1 + p1__10030_SHARP_);
});})(min__$1,max__$1,map__10035,map__10035__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__10035,map__10035__$1,min,max){
return (function (p1__10031_SHARP_){
return (min__$1 + p1__10031_SHARP_);
});})(min__$1,max__$1,map__10035,map__10035__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_(cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose((0),(function (){var G__10043 = cljs.core.long$(bit_count);
switch (G__10043) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap((function (p__10044){
var vec__10045 = p__10044;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10045,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10045,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure$test$check$generators$uniform_integer((bit_count - (32))),clojure$test$check$generators$uniform_integer((32))], 0)));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__10049 = ((out * (2)) + (n__$1 & (1)));
var G__10050 = (n__$1 / (2));
var G__10051 = (out_shifter / (2));
out = G__10049;
n__$1 = G__10050;
out_shifter = G__10051;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap(clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(function (){var x__6747__auto__ = size;
var y__6748__auto__ = (52);
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer(clojure.test.check.rose_tree.root(rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = (function (){var G__10053 = (Math.log(x__$1) * Math.LOG2E);
return Math.floor(G__10053);
})();
var t = clojure.test.check.generators.scalb(x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized((function (size){
var qs8 = ((1) << cljs.core.quot((function (){var x__6747__auto__ = (200);
var y__6748__auto__ = size;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose((function (){var x__6740__auto__ = lb;
var y__6741__auto__ = (- qs8);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})(),(function (){var x__6747__auto__ = ub;
var y__6748__auto__ = qs8;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose((function (){var x__6740__auto__ = lb;
var y__6741__auto__ = (ub - qs8);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose(lb,(function (){var x__6747__auto__ = ub;
var y__6748__auto__ = (lb + qs8);
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gen_exp((-1023),(1023)),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0));
} else {
var lower_bound__$1 = (function (){var or__6409__auto__ = lower_bound;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__6409__auto__ = upper_bound;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__6740__auto__ = (-1023);
var y__6741__auto__ = clojure.test.check.generators.get_exponent(lower_bound__$1);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})();
var ubexp = (function (){var x__6740__auto__ = (-1023);
var y__6741__auto__ = clojure.test.check.generators.get_exponent(upper_bound__$1);
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gen_exp(lbexp,ubexp),clojure.test.check.generators.return$(1.0)], 0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gen_exp(ubexp,lbexp),clojure.test.check.generators.return$(-1.0)], 0));
} else {
return clojure.test.check.generators.fmap(((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__10058){
var vec__10059 = p__10058;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,(1),null);
var pair = vec__10059;
if((((sign < (0))) && ((lbexp < exp))) || (((sign > (0))) && ((ubexp < exp)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gen_exp((-1023),(function (){var x__6740__auto__ = ubexp;
var y__6741__auto__ = lbexp;
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})()),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0)));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__10067 = clojure$test$check$generators$block_bounds(exp,(- sign));
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10067,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10067,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb(1.0,exp),clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if(((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__10070_SHARP_){
return ((lower_bound <= p1__10070_SHARP_)) && ((p1__10070_SHARP_ <= upper_bound));
}):(function (p1__10071_SHARP_){
return (lower_bound <= p1__10071_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__10072_SHARP_){
return (p1__10072_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap(((function (pred){
return (function (p__10086){
var vec__10087 = p__10086;
var vec__10090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10090,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10090,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10087,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb(base,exp) * sign);
if(cljs.core.truth_((function (){var or__6409__auto__ = (pred == null);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
})())){
return x;
} else {
var vec__10093 = clojure.test.check.generators.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(1),null);
var block_lb = (function (){var G__10096 = low;
if(cljs.core.truth_(lower_bound)){
var x__6740__auto__ = G__10096;
var y__6741__auto__ = lower_bound;
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
} else {
return G__10096;
}
})();
var block_ub = (function (){var G__10097 = high;
if(cljs.core.truth_(upper_bound)){
var x__6747__auto__ = G__10097;
var y__6748__auto__ = upper_bound;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
} else {
return G__10097;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__6740__auto__ = (function (){var x__6747__auto__ = x__$1;
var y__6748__auto__ = block_ub;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})();
var y__6741__auto__ = block_lb;
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.double_exp_and_sign(lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand], 0)));
var G__10098 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__10098);
} else {
return G__10098;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__10099){
var map__10103 = p__10099;
var map__10103__$1 = ((((!((map__10103 == null)))?((((map__10103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10103):map__10103);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10103__$1,cljs.core.cst$kw$infinite_QMARK_,true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10103__$1,cljs.core.cst$kw$NaN_QMARK_,true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10103__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10103__$1,cljs.core.cst$kw$max);
var frequency_arg = (function (){var G__10105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite(min,max)], null)], null);
var G__10105__$1 = (((((min == null))?((max == null)) || ((0.0 <= max)):(((max == null))?(min <= 0.0):((min <= 0.0)) && ((0.0 <= max)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__10105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(0.0)], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(-0.0)], null)], 0)):G__10105);
var G__10105__$2 = (cljs.core.truth_((function (){var and__6397__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return (max == null);
} else {
return and__6397__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10105__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.POS_INFINITY)], null)):G__10105__$1);
var G__10105__$3 = (cljs.core.truth_((function (){var and__6397__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return (min == null);
} else {
return and__6397__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10105__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NEG_INFINITY)], null)):G__10105__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10105__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NAN)], null));
} else {
return G__10105__$3;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(frequency_arg))){
return cljs.core.second(cljs.core.first(frequency_arg));
} else {
return clojure.test.check.generators.frequency(frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((48),(57)),clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$((function (){var and__6397__auto__ = d;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (("+" === c)) || (("-" === c));
if(and__6397__auto____$1){
return clojure.test.check.generators.digit_QMARK_(d);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap((function (p__10106){
var vec__10107 = p__10106;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__10110){
var vec__10111 = p__10110;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10111,(0),null);
var vec__10114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10111,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10114,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap((function (v){
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap((function (p__10117){
var vec__10118 = p__10117;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10118,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10118,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap((function (p__10121){
var vec__10122 = p__10121;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10122,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10122,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap((function (p__10125){
var vec__10126 = p__10125;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.keyword_segment_rest)], 0)));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap((function (p__10129){
var vec__10130 = p__10129;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10130,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10130,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10130,(2),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__10133){
var vec__10134 = p__10133;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10134,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10134,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__10137){
var vec__10138 = p__10137;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10138,(0),null);
var vec__10141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10138,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10141,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__10144){
var vec__10145 = p__10144;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(2),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__10148){
var vec__10149 = p__10148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(1),null);
var vec__10152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap((function (p__10155){
var vec__10156 = p__10155;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10156,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10156,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.test.check.generators.int$,clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.zero_QMARK_),clojure.test.check.generators.int$)], 0)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink(clojure.test.check.generators.fmap((function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return (nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1(idx) : nibbles.call(null,idx)).toString((16));
});
var rhex = (((nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1((15)) : nibbles.call(null,(15))) & (3)) + (8)).toString((16));
return cljs.core.uuid([cljs.core.str(hex((0))),cljs.core.str(hex((1))),cljs.core.str(hex((2))),cljs.core.str(hex((3))),cljs.core.str(hex((4))),cljs.core.str(hex((5))),cljs.core.str(hex((6))),cljs.core.str(hex((7))),cljs.core.str("-"),cljs.core.str(hex((8))),cljs.core.str(hex((9))),cljs.core.str(hex((10))),cljs.core.str(hex((11))),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex((12))),cljs.core.str(hex((13))),cljs.core.str(hex((14))),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex((16))),cljs.core.str(hex((17))),cljs.core.str(hex((18))),cljs.core.str("-"),cljs.core.str(hex((19))),cljs.core.str(hex((20))),cljs.core.str(hex((21))),cljs.core.str(hex((22))),cljs.core.str(hex((23))),cljs.core.str(hex((24))),cljs.core.str(hex((25))),cljs.core.str(hex((26))),cljs.core.str(hex((27))),cljs.core.str(hex((28))),cljs.core.str(hex((29))),cljs.core.str(hex((30)))].join(''));
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.choose((0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(inner_type),clojure.test.check.generators.list(inner_type),clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize(scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize(children_size,(function (){var G__10165 = clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,(height - (1)));
return (container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(G__10165) : container_gen_fn.call(null,G__10165));
})());
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(scalar_gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to recursive-gen must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? scalar-gen)")].join('')));
}

return clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((1),(5)),(function (height){
var children_size = (function (){var G__10168 = size;
var G__10169 = ((1) / height);
return Math.pow(G__10168,G__10169);
})();
return clojure.test.check.generators.recursive_helper(container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10178 = arguments.length;
var i__7485__auto___10179 = (0);
while(true){
if((i__7485__auto___10179 < len__7484__auto___10178)){
args__7491__auto__.push((arguments[i__7485__auto___10179]));

var G__10180 = (i__7485__auto___10179 + (1));
i__7485__auto___10179 = G__10180;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to gen/let must be a vector of bindings."),cljs.core.str("\n"),cljs.core.str("(vector? bindings)")].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("gen/let requires an even number of forms in binding vector"),cljs.core.str("\n"),cljs.core.str("(even? (count bindings))")].join('')));
}

if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__10170__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__10170__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__10170__auto__),(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__10170__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0))));
} else {
var vec__10175 = bindings;
var seq__10176 = cljs.core.seq(vec__10175);
var first__10177 = cljs.core.first(seq__10176);
var seq__10176__$1 = cljs.core.next(seq__10176);
var binding = first__10177;
var first__10177__$1 = cljs.core.first(seq__10176__$1);
var seq__10176__$2 = cljs.core.next(seq__10176__$1);
var gen = first__10177__$1;
var more = seq__10176__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),(function (){var x__7243__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7243__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7243__auto__ = binding;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_let),(function (){var x__7243__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(more))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0))));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq10171){
var G__10172 = cljs.core.first(seq10171);
var seq10171__$1 = cljs.core.next(seq10171);
var G__10173 = cljs.core.first(seq10171__$1);
var seq10171__$2 = cljs.core.next(seq10171__$1);
var G__10174 = cljs.core.first(seq10171__$2);
var seq10171__$3 = cljs.core.next(seq10171__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__10172,G__10173,G__10174,seq10171__$3);
});


clojure.test.check.generators.let$.cljs$lang$macro = true;
