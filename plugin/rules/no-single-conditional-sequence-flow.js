const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing Timer Intermediate Event on bpmn:EventBasedGateway.
 */
module.exports = function() {

  function check(node, reporter) {

    if (is(node, 'bpmn:SequenceFlow') && node.conditionExpression){
			if(node.sourceRef.outgoing.length == 1){
        reporter.report(node.id, 'A conditional Sequence Flow cannot be used if there is only one sequence flow out of the element');
      }
		}
  }

  return {
    check: check
  };
};