const {
	is
} = require('bpmnlint-utils');

/**
 * Rule that reports elements with duplicated name.
 */

module.exports = function() {
	var names = [];
  function check(node, reporter) {
		if (node.name){
			var name  = node.name;
			var search = names.find(element => element == name);

			if(search)
      	reporter.report(node.id, 'Duplicated label');
			
			else names.push(name)
		
		}
  
  }

  return {
    check: check
  };
};
