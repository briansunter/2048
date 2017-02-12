// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('tester.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.test.check.generators');
goog.require('cljs.spec.impl.gen');
goog.require('cljs.spec');
tester.core.directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tester$core_SLASH_right,null,cljs.core.cst$kw$tester$core_SLASH_left,null,cljs.core.cst$kw$tester$core_SLASH_down,null,cljs.core.cst$kw$tester$core_SLASH_up,null], null), null);
tester.core.board_size = (4);
tester.core.screen_width = window.innerWidth;
tester.core.screen_height = window.innerHeight;
tester.core.tile_width = ((function (){var x__6747__auto__ = tester.core.screen_height;
var y__6748__auto__ = tester.core.screen_width;
return ((x__6747__auto__ < y__6748__auto__) ? x__6747__auto__ : y__6748__auto__);
})() / tester.core.board_size);
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_int_DASH_in,(1),cljs.core.cst$sym$tester$core_SLASH_board_DASH_size),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__10422__10423__auto__], null),cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_int_DASH_in_DASH_range_QMARK_,(1),cljs.core.cst$sym$tester$core_SLASH_board_DASH_size,cljs.core.cst$sym$p1__10422__10423__auto__))),cljs.spec.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_int_DASH_in_DASH_range_QMARK_,(1),cljs.core.cst$sym$tester$core_SLASH_board_DASH_size,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__10422__10423__auto__){
return cljs.spec.int_in_range_QMARK_((1),tester.core.board_size,p1__10422__10423__auto__);
})], null),null),(function (){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,(tester.core.board_size - (1))], null)], 0));
}),null));
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_x,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board);
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_y,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board);
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_value,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_direction,cljs.core.cst$sym$tester$core_SLASH_directions,tester.core.directions);
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_position,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_tuple,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board),cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_inside_DASH_game_DASH_board], null)));
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_tile,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_value], null)),cljs.spec.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__10268__10269__auto__){
return cljs.core.contains_QMARK_(p1__10268__10269__auto__,cljs.core.cst$kw$tester$core_SLASH_value);
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_value], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$tester$core_SLASH_value))], null),null])));
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_map_DASH_of,cljs.core.cst$kw$tester$core_SLASH_position,cljs.core.cst$kw$tester$core_SLASH_tile,cljs.core.cst$kw$max_DASH_count,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__STAR_,cljs.core.cst$sym$tester$core_SLASH_board_DASH_size,cljs.core.cst$sym$tester$core_SLASH_board_DASH_size),cljs.core.cst$kw$min_DASH_count,(2)),cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_tuple,cljs.core.cst$kw$tester$core_SLASH_position,cljs.core.cst$kw$tester$core_SLASH_tile),cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_position,cljs.core.cst$kw$tester$core_SLASH_tile], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_position,cljs.core.cst$kw$tester$core_SLASH_tile], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec_SLASH_kfn,(function (i__10315__auto__,v__10316__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__10316__auto__,(0));
}),cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all,true,cljs.core.cst$kw$min_DASH_count,(2),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$max_DASH_count,(tester.core.board_size * tester.core.board_size)], null),null));
cljs.spec.def_impl(cljs.core.cst$kw$tester$core_SLASH_app_DASH_db,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null)),cljs.spec.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__10268__10269__auto__){
return cljs.core.contains_QMARK_(p1__10268__10269__auto__,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board);
}),(function (p1__10268__10269__auto__){
return cljs.core.contains_QMARK_(p1__10268__10269__auto__,cljs.core.cst$kw$tester$core_SLASH_direction);
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$tester$core_SLASH_direction))], null),null])));
tester.core.initial_state = (function tester$core$initial_state(){
return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tester$core_SLASH_app_DASH_db));
});
if(typeof tester.core.app_db !== 'undefined'){
} else {
tester.core.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tester.core.initial_state());
}
cljs.spec.def_impl(cljs.core.cst$sym$tester$core_SLASH_move_DASH_direction,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.cst$kw$board,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$direction,cljs.core.cst$kw$tester$core_SLASH_direction),cljs.core.cst$kw$ret,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board),cljs.spec.fspec_impl(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.cst$kw$board,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$direction,cljs.core.cst$kw$tester$core_SLASH_direction),cljs.spec.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_direction], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.cst$kw$board,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$direction,cljs.core.cst$kw$tester$core_SLASH_direction),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,null,null),cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,null,null,null));
tester.core.move_direction = (function tester$core$move_direction(board,direction){
return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tester$core_SLASH_game_DASH_board));
});
tester.core.update_state = (function tester$core$update_state(state,p__11124){
var vec__11132 = p__11124;
var seq__11133 = cljs.core.seq(vec__11132);
var first__11134 = cljs.core.first(seq__11133);
var seq__11133__$1 = cljs.core.next(seq__11133);
var event_type = first__11134;
var params = seq__11133__$1;
var G__11135 = (((event_type instanceof cljs.core.Keyword))?event_type.fqn:null);
switch (G__11135) {
case "tester.core/move-direction":
var vec__11136 = params;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tester$core_SLASH_game_DASH_board,((function (vec__11136,direction,G__11135,vec__11132,seq__11133,first__11134,seq__11133__$1,event_type,params){
return (function (p1__11123_SHARP_){
return tester.core.move_direction(p1__11123_SHARP_,tester.core.directions);
});})(vec__11136,direction,G__11135,vec__11132,seq__11133,first__11134,seq__11133__$1,event_type,params))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event_type)].join('')));

}
});
tester.core.dispatch_event_BANG_ = (function tester$core$dispatch_event_BANG_(event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tester.core.app_db,tester.core.update_state,event);
});
tester.core.key_code__GT_direction = new cljs.core.PersistentArrayMap(null, 4, [(38),cljs.core.cst$kw$tester$core_SLASH_up,(40),cljs.core.cst$kw$tester$core_SLASH_down,(37),cljs.core.cst$kw$tester$core_SLASH_left,(39),cljs.core.cst$kw$tester$core_SLASH_right], null);
tester.core.event_for_key = (function tester$core$event_for_key(event){
var key_code = event.keyCode;
var temp__4657__auto__ = (tester.core.key_code__GT_direction.cljs$core$IFn$_invoke$arity$1 ? tester.core.key_code__GT_direction.cljs$core$IFn$_invoke$arity$1(key_code) : tester.core.key_code__GT_direction.call(null,key_code));
if(cljs.core.truth_(temp__4657__auto__)){
var direction = temp__4657__auto__;
return tester.core.dispatch_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tester$core_SLASH_move_DASH_direction,direction], null));
} else {
return null;
}
});
tester.core.watch_keys_BANG_ = (function tester$core$watch_keys_BANG_(){
return document.addEventListener("keydown",tester.core.event_for_key);
});
tester.core.position__GT_coordinates = (function tester$core$position__GT_coordinates(position){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__11140_SHARP_){
return (tester.core.tile_width * p1__11140_SHARP_);
})),position);
});
tester.core.game_board = (function tester$core$game_board(){
var game_board__$1 = cljs.core.cst$kw$tester$core_SLASH_game_DASH_board.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tester.core.app_db) : cljs.core.deref.call(null,tester.core.app_db)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding,"10%",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),(function (){var iter__7189__auto__ = ((function (game_board__$1){
return (function tester$core$game_board_$_iter__11171(s__11172){
return (new cljs.core.LazySeq(null,((function (game_board__$1){
return (function (){
var s__11172__$1 = s__11172;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__11172__$1);
if(temp__4657__auto__){
var s__11172__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11172__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__11172__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__11174 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__11173 = (0);
while(true){
if((i__11173 < size__7188__auto__)){
var location = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__11173);
var vec__11189 = location;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11189,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11189,(1),null);
var vec__11192 = tester.core.position__GT_coordinates(position);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11192,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11192,(1),null);
cljs.core.chunk_append(b__11174,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$font_DASH_color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["solid","center","black",(20),y,"orange",tester.core.tile_width,(4),"center","flex","absolute",tester.core.tile_width,x])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$tester$core_SLASH_value.cljs$core$IFn$_invoke$arity$1(tile)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(location)], null)));

var G__11201 = (i__11173 + (1));
i__11173 = G__11201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11174),tester$core$game_board_$_iter__11171(cljs.core.chunk_rest(s__11172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11174),null);
}
} else {
var location = cljs.core.first(s__11172__$2);
var vec__11195 = location;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(1),null);
var vec__11198 = tester.core.position__GT_coordinates(position);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11198,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11198,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$font_DASH_color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["solid","center","black",(20),y,"orange",tester.core.tile_width,(4),"center","flex","absolute",tester.core.tile_width,x])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$tester$core_SLASH_value.cljs$core$IFn$_invoke$arity$1(tile)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.hash(location)], null)),tester$core$game_board_$_iter__11171(cljs.core.rest(s__11172__$2)));
}
} else {
return null;
}
break;
}
});})(game_board__$1))
,null,null));
});})(game_board__$1))
;
return iter__7189__auto__(game_board__$1);
})()], null);
});
tester.core.game = (function tester$core$game(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tester.core.game_board], null);
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (_){
return tester.core.watch_keys_BANG_();
})], null));
});
tester.core.home_page = (function tester$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tester.core.game], null)], null);
});
tester.core.mount_root = (function tester$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tester.core.home_page], null),document.getElementById("app"));
});
tester.core.init_BANG_ = (function tester$core$init_BANG_(){
return tester.core.mount_root();
});
