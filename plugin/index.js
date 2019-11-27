module.exports = {
  configs: {
    recommended: {
      rules: {
        'playground/target-namespace': 'error',
        'playground/missing-default-condition': 'error',
        'playground/no-single-conditional-sequence-flow': 'error',
        'playground/no-unnamed-message': 'warn',
        'playground/message-start-event-with-incoming-message': 'error',
        'playground/duplicates': 'error',
        'playground/single-in-out-gateway': 'error',
        'playground/no-timer-event': 'error',
        'playground/multiple-start-events-sub-process': 'error',
      }
    },
    all: {
      rules: {
        'playground/target-namespace': 'warn',
        'playground/no-manual-task': 'warn',
        'playground/missing-default-condition': 'error',
        'playground/no-single-conditional-sequence-flow': 'error',
        'playground/no-unnamed-message': 'error',
        'playground/message-start-event-with-incoming-message': 'error',
        'playground/duplicates': 'error',
        'playground/single-in-out-gateway': 'error',
        'playground/no-timer-event': 'error',
        'playground/multiple-start-events-sub-process': 'error',
      }
    }
  }
}