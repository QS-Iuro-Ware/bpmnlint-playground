const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing Timer Intermediate Event on bpmn:EventBasedGateway.
 */
module.exports = function() {

  function check(node, reporter) {

    if (is(node, 'bpmn:EventBasedGateway') && node.outgoing){
			var containsTimerEvent = node.outgoing.find(element => {
				if(element.targetRef.eventDefinitions)	
						if(element.targetRef.eventDefinitions[0].$type == "bpmn:TimerEventDefinition") 
							return true
			})
			
  		if(!containsTimerEvent)
      	reporter.report(node.id, 'Event Based Gateway requires a Timer Intermediate Event');
		}
  }

  return {
    check: check
  };
};
