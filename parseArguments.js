function handleAssignments(value, resultArgs) {
  const oIndex = value.indexOf('=');
  const key = value.substring(0, oIndex);
  resultArgs[key] = value.substring(oIndex+1);
}

/*
['ignoreInstall', 'skipInputs', '-build', 'prod', '--gh=46', '--ph', '-ou=99', '-gu']
returns Args {
    ignoreInstall: true,
    skipInputs: true,
    build: 'prod',
    gh: '46',
    ph: true,
    ou: '99',
    gu: undefined
}
*/
function processArgs(passedArgs) {
  const resultArgs={};

  var argsIterator = passedArgs[Symbol.iterator]();

  let currentArg = argsIterator.next();
  while (!currentArg.done) {
    let { value } = currentArg;
    if(value.startsWith('--')) {
      value=value.substring(2);
      if(value.includes('=')) {
        handleAssignments(value, resultArgs)
      } else {
        resultArgs[value] = true;
      }
    } else if(value.startsWith('-')) {
      value=value.substring(1);
      if(value.includes('=')) {
        handleAssignments(value, resultArgs)
      } else {
        const nextValue = argsIterator.next().value;
        resultArgs[value] = nextValue;
      }
    } else {
      resultArgs[value] = true;
    }
    currentArg = argsIterator.next();
  }
  // console.log('Passed Args', resultArgs);
  return resultArgs;
}

module.exports = processArgs