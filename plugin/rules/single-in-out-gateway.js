const {
  isAny
} = require('bpmnlint-utils');


/**
 * Rule that reports bpmn:ExclusiveGateway with only one sequence flow.
 */
module.exports = function() {

  function check(node, reporter) {
    if (isAny(node, ['bpmn:ExclusiveGateway', 'bpmn:ParallelGateway', 'bpmn:InclusiveGateway', 'bpmn:ComplexGateway', 'bpmn:EventBasedGateway']) && ( node.incoming.length == 1 && node.outgoing.length == 1)) {
      reporter.report(node.id, 'Gateway must split or merge a flow');
    }
  }

  return {
    check: check
  };
};
