class IronAxe extends Weapon {
    constructor() {
        super();
        this.weapName = 'Iron Axe';
        this.physicalDMG = 12;
        this.magicDMG = 0;
        this.statusInflicting = null;
        this.weapMainAtt = 'str';
        this.apRequired = 4;
    }
}

class IronSword extends Weapon {
    constructor() {
        super();
        this.weapName = 'Iron Sword';
        this.physicalDMG = 9;
        this.magicDMG = 0;
        this.statusInflicting = null;
        this.weapMainAtt = 'str';
        this.apRequired = 3;
    }
}

class IronDagger extends Weapon {
    constructor() {
        super();
        this.weapName = 'Iron Dagger';
        this.physicalDMG = 5;
        this.magicDMG = 0;
        this.statusInflicting = null;
        this.weapMainAtt = 'fin';
        this.apRequired = 2;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.weapName = 'Staff';
        this.physicalDMG = 3;
        this.magicDMG = 4;
        this.statusInflicting = null;
        this.weapMainAtt = 'int';
        this.apRequired = 3;
    }
}

class Robe extends Armor {
    constructor() {
        super();
        this.armorName = 'Robe';
        this.physicalResistance = 0;
        this.magicResistance = 0.2;
        this.armorEnchant = null;
    }
}