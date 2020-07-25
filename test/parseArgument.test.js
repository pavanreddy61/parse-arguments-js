const processArgs = require('../parseArguments');

describe('parseArguments', () => {
    test('should parse as expected', () => {
        const result = processArgs(['ignoreInstall', 'skipInputs', '-build', 'prod', '--gh=46', '--ph', '-ou=99', '-gu']);
        expect(result).toEqual({
            ignoreInstall: true,
            skipInputs: true,
            build: 'prod',
            gh: '46',
            ph: true,
            ou: '99',
            gu: undefined
          });
    });
});