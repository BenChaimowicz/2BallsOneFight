class Warrior extends Character {
    constructor(_alliance:Player,charName: string) {
        super(_alliance,charName);

        this.strength = 7;
        this.finesse = 4;
        this.intelligence = 3;
        this.baseHP += 60;
        this.currHP = this.baseHP;

    }

    attack(target: Character) {
        var attDmg: number[] = this.calcDMG();
        var mitigation: number[] = this.calcMitigation(target);
        var finalDMG: number = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    }

    private calcDMG(): number[] {
        let physicdmg: number = 0;
        let magicdmg: number = 0;

        if (this.currWeapon.weapMainAtt == 'str') {
            physicdmg += Math.floor(this.strength * 2 / 3) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;

        }
        if (this.currWeapon.weapMainAtt == 'fin') {
            physicdmg += Math.floor(this.finesse / 2) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;
        }
        if (this.currWeapon.weapMainAtt == 'int') {
            physicdmg += Math.floor(this.strength / 3) + this.currWeapon.physicalDMG;
            magicdmg += Math.floor(this.intelligence / 2) + this.currWeapon.magicDMG;
        }
        physicdmg *= this.currStatus.pDmgMod;
        magicdmg *= this.currStatus.mDmgMod;

        return [physicdmg, magicdmg];
    }
}

class Rogue extends Character {
    constructor(_alliance: Player, charName: string) {
        super(_alliance, charName);

        this.strength = 3;
        this.finesse = 7;
        this.intelligence = 5;
        this.baseHP += 40;
        this.currHP = this.baseHP;
    }

    attack(target: Character) {
        var attDmg: number[] = this.calcDMG();
        var mitigation: number[] = this.calcMitigation(target);
        var finalDMG: number = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    }

    private calcDMG(): number[] {
        let physicdmg: number = 0;
        let magicdmg: number = 0;

        if (this.currWeapon.weapMainAtt == 'str') {
            physicdmg += Math.floor(this.strength / 2) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;

        }
        if (this.currWeapon.weapMainAtt == 'fin') {
            physicdmg += Math.floor(this.finesse * 2 / 3) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;
        }
        if (this.currWeapon.weapMainAtt == 'int') {
            physicdmg += Math.floor(this.finesse / 3) + this.currWeapon.physicalDMG;
            magicdmg += Math.floor(this.intelligence / 2) + this.currWeapon.magicDMG;
        }
        physicdmg *= this.currStatus.pDmgMod;
        magicdmg *= this.currStatus.mDmgMod;

        return [physicdmg, magicdmg];
    }
}

class Wizard extends Character {
    constructor(_alliance: Player, charName: string) {
        super(_alliance, charName);

        this.strength = 2;
        this.finesse = 3;
        this.intelligence = 8;
        this.baseHP += 20;
        this.currHP = this.baseHP;

        this.currArmor = new Robe();
    }

    attack(target: Character) {
        var attDmg: number[] = this.calcDMG();
        var mitigation: number[] = this.calcMitigation(target);
        var finalDMG: number = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    }

    private calcDMG(): number[] {
        let physicdmg: number = 0;
        let magicdmg: number = 0;

        if (this.currWeapon.weapMainAtt == 'str') {
            physicdmg += Math.floor(this.strength / 2) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;

        }
        if (this.currWeapon.weapMainAtt == 'fin') {
            physicdmg += Math.floor(this.finesse / 2) + this.currWeapon.physicalDMG;
            magicdmg += this.currWeapon.magicDMG;
        }
        if (this.currWeapon.weapMainAtt == 'int') {
            physicdmg += Math.floor(this.intelligence + this.strength / 2) + this.currWeapon.physicalDMG;
            magicdmg += Math.floor(this.intelligence * 2 / 3) + this.currWeapon.magicDMG;
        }
        physicdmg *= this.currStatus.pDmgMod;
        magicdmg *= this.currStatus.mDmgMod;

        return [physicdmg, magicdmg];
    }
}
