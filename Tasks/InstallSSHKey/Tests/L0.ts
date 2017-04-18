import fs = require('fs');
import assert = require('assert');
import path = require('path');
import * as ttm from 'vsts-task-lib/mock-test';

describe('InstallSSHKey Suite', function () {
    this.timeout(20000);
    before(() => {
    });

    after(() => {
    });

    it('Defaults: install from SecureFile', (done: MochaDone) => {
        this.timeout(1000);

        let tp: string = path.join(__dirname, 'L0SecureFile.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(tr.stderr.length === 0, 'should not have written to stderr');
        assert(tr.succeeded, 'task should have succeeded');

        done();
    });

});