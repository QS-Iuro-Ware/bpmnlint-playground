const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports catch event with incoming message flow must be message or multiple.
 */
module.exports = function() {

  function check(node, reporter) {

    if (is(node, 'bpmn:MessageFlow') ){
			if(!(node.name)){        
        reporter.report(node.id, 'A message flow should be labeled with the name of the message.');
      }
		}
  }

  return {
    check: check
  };
};