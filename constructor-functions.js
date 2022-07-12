/**
 * An example constructor.
 * @class Represents a constructor function.
 * @param {string} description – The example's description.
 */
function Example (description) {
    this.description = description;
  }
    /**
     * Returns the example's description.
     * @return {string} description – This example's description.
     */
  Example.prototype.getDescription = function() {
    return this.description;
  };

  //Spell(name, cost, description)
//Creates a generic spell that can be cast.

//Parameters

//name: string, The name of the spell.

// cost: number, The amount needed to cast this spell.

// description: string, A short description of the spell.

// getDetails()
// Returns a string of all of the spell's details. The format doesn't matter, as long as it contains the spell name, cost, and description.

// DamageSpell(name, cost, damage, description)
// A spell that deals damage. We want to keep this code DRY (Don't Repeat Yourself).

// So you should use Spell.call() to assign the spell name, cost, and description.


// Parameters

// name: string, The name of the spell.

// cost: number, The amount needed to cast this spell.

// damage: number, The amount of damage this spell deals.

// description: string, A short description of the spell.

// Spellcaster(name, health, mana)
// Now that you've created some spells, let's create Spellcaster objects that can use them!

// Parameters

// name: string, The spellcaster's name.

// health: number, The spellcaster's health points.

// mana: number, The spellcaster's mana points, used for casting spells.

// inflictDamage(damage)
// The spellcaster loses health equal to damage. Health should never be negative. If the spellcaster's health drops to 0, its isAlive property should be set to false.

// Parameters

// damage: number, Amount of damage to deal to the spellcaster

// spendMana(cost)
// Reduces the spellcaster's mana by cost. Mana should only be reduced only if there is enough mana to spend.

// Parameters

// cost: number, The amount of mana to spend.

// Returns: boolean, Whether mana was successfully spent.

