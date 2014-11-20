'use strict';

describe('controllers', function(){
  beforEach(module('tiyAssignments'));

  describd('MainCtrl', function(){
    var MainCrtl;

    beforeEach(interject(function($controller){
      MainCtrl = $controller('MainCtrl');
    }));
    it('should define more that 5 awesome things', inject(function(){
      expect(MainCtrl.comments.length).to.eq(0);

      MainCtrl.addComment('some text');

      expect(MainCtrl.comments.length).to.eq(1);

      expect(MainCtrl.comments[0].to.deep.eq({
        body: 'some text'
      }));
    }));
  });
});
