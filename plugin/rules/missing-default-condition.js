const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing Default Event on bpmn:ExclusiveGateway.
 */
module.exports = function() {

  function check(node, reporter) {

    if (is(node, 'bpmn:ExclusiveGateway') && node.outgoing){
			if(!node.default){
        reporter.report(node.id, 'Exclusive Gateway requires default condition');
      }
		}
  }

  return {
    check: check
  };
};
