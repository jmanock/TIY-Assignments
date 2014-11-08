var Game = require('./game.js');
var assert = require('chai').assert;

it('should play the game', function(){
  var game = new Game();
  assert.deepEqual(game.board, [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    ]);

    game.setAlive(0,1);
    game.setAlive(1,1);
    game.setAlive(2,1);

    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isTrue(game.isAlive(1,0));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(1,2));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n" +
    "| X | X | X |\n" +
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
    );

    game.setDead(0,1);
    game.setAlive(1,2);

    assert.isFalse(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));
    assert.isTrue(game.isAlive(1,2));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));
    assert.isTrue(game.isAlive(1,2));
    assert.isTrue(game.isAlive(2,2));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n"
    );

    game.setDead(1,2);
    game.setDead(2,1);
    game.setAlive(0,2);

    assert.isTrue(game.isAlive(0,2));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,2));
    assert.isTrue(game.isAlive(1,2));
    assert.isTrue(game.isAlive(2,1));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   | X |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   |   | X |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isFalse(game.isAlive(0,2));
    assert.isTrue(game.isAlive(1,1));
    assert.isFalse(game.isAlive(2,2));
    assert.isTrue(game.isAlive(1,2));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n" +
    "|   |   |   |\n" +
    "+---+---+---+\n"
    );

    game.setAlive(0,1);
    game.setAlive(2,1);

    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(2,1));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(0,2));
    assert.isTrue(game.isAlive(1,0));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(1,2));
    assert.isTrue(game.isAlive(2,1));
    assert.isTrue(game.isAlive(2,2));
    assert.isFalse(game.isAlive(0,0));
    assert.isFalse(game.isAlive(2,0));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n" +
    "| X | X | X |\n" +
    "+---+---+---+\n" +
    "|   | X | X |\n" +
    "+---+---+---+\n"
    );

    game.tick();

    assert.isTrue(game.isAlive(0,0));
    assert.isTrue(game.isAlive(0,2));
    assert.isTrue(game.isAlive(1,0));
    assert.isTrue(game.isAlive(2,0));
    assert.isTrue(game.isAlive(2,2));
    assert.isFalse(game.isAlive(0,1));
    assert.isFalse(game.isAlive(1,1));
    assert.isFalse(game.isAlive(1,2));
    assert.isFalse(game.isAlive(2,1));

    assert.equal(game.display(),
    "+---+---+---+\n" +
    "| X |   | X |\n" +
    "+---+---+---+\n" +
    "| X |   |   |\n" +
    "+---+---+---+\n" +
    "| X |   | X |\n" +
    "+---+---+---+\n"
    );
});
