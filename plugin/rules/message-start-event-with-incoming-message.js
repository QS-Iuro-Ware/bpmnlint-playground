const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports catch event with incoming message flow must be message or multiple.
 */
module.exports = function() {

  function check(node, reporter) {

    if (is(node, 'bpmn:MessageFlow') ){
      console.log(node)
			if(is(node.targetRef, 'bpmn:StartEvent')){
        if(!(node.targetRef.eventDefinitions && is(node.targetRef.eventDefinitions[0], 'bpmn:MessageEventDefinition')))
        
          reporter.report(node.id, 'A Start Event with incoming Message Flow must be of type Message');
      }
		}
  }

  return {
    check: check
  };
};