var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(_alliance, charName) {
        var _this = _super.call(this, _alliance, charName) || this;
        _this.strength = 7;
        _this.finesse = 4;
        _this.intelligence = 3;
        _this.baseHP += 60;
        _this.currHP = _this.baseHP;
        return _this;
    }
    Warrior.prototype.attack = function (target) {
        var attDmg = this.calcDMG();
        var mitigation = this.calcMitigation(target);
        var finalDMG = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    };
    Warrior.prototype.calcDMG = function () {
        var physicdmg = 0;
        var magicdmg = 0;
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
    };
    return Warrior;
}(Character));
var Rogue = /** @class */ (function (_super) {
    __extends(Rogue, _super);
    function Rogue(_alliance, charName) {
        var _this = _super.call(this, _alliance, charName) || this;
        _this.strength = 3;
        _this.finesse = 7;
        _this.intelligence = 5;
        _this.baseHP += 40;
        _this.currHP = _this.baseHP;
        return _this;
    }
    Rogue.prototype.attack = function (target) {
        var attDmg = this.calcDMG();
        var mitigation = this.calcMitigation(target);
        var finalDMG = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    };
    Rogue.prototype.calcDMG = function () {
        var physicdmg = 0;
        var magicdmg = 0;
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
    };
    return Rogue;
}(Character));
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(_alliance, charName) {
        var _this = _super.call(this, _alliance, charName) || this;
        _this.strength = 2;
        _this.finesse = 3;
        _this.intelligence = 8;
        _this.baseHP += 20;
        _this.currHP = _this.baseHP;
        _this.currArmor = new Robe();
        return _this;
    }
    Wizard.prototype.attack = function (target) {
        var attDmg = this.calcDMG();
        var mitigation = this.calcMitigation(target);
        var finalDMG = this.calcDmgDealt(attDmg, mitigation);
        this.dealDMG(finalDMG, target);
    };
    Wizard.prototype.calcDMG = function () {
        var physicdmg = 0;
        var magicdmg = 0;
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
    };
    return Wizard;
}(Character));
//# sourceMappingURL=SubClass.js.map