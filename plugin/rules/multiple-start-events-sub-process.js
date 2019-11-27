const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports catch event with incoming message flow must be message or multiple.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:SubProcess')){
      var i = 0;
      node.flowElements.forEach(element => {
        if(is(element, 'bpmn:StartEvent'))
          i++;
      });

      if(i > 1)
        reporter.report(node.id, 'A Sub Process shouldn\'t have more than one Start Event');
    }

  }

  return {
    check: check
  };
};