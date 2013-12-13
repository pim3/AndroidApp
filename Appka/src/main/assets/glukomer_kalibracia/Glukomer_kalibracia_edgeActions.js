/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_next_to_3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back_to_1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_to_2}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play("Start2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_refresh1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start1");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4024, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1976, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3413, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");// stop the timeline at the given position (ms or label)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back_to_2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_to_4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back_to_3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("start_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5609, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_to_5}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_refresh}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("StartP");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8065, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Start6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9884, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Blik");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-Glukomer_kalibracia");