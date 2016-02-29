import QUnit from 'steal-qunit';
import ViewModel from './viewmodel';

import fixture, { tournamentData } from 'bitballs/models/tournament/fixture';

QUnit.module('tournament-list', function(){

	QUnit.test('creating tournament fails without a name', function(assert){
		var done = assert.async();

		assert.expect(1);

		var vm = new ViewModel();

		vm.createTournament().fail(function(resp, type){
			assert.equal(type, 'error', 'fail creation without date');
			done();
		});
	});

});