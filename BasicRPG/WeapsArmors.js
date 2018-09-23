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
var IronAxe = /** @class */ (function (_super) {
    __extends(IronAxe, _super);
    function IronAxe() {
        var _this = _super.call(this) || this;
        _this.weapName = 'Iron Axe';
        _this.physicalDMG = 12;
        _this.magicDMG = 0;
        _this.statusInflicting = null;
        _this.weapMainAtt = 'str';
        _this.apRequired = 4;
        return _this;
    }
    return IronAxe;
}(Weapon));
var IronSword = /** @class */ (function (_super) {
    __extends(IronSword, _super);
    function IronSword() {
        var _this = _super.call(this) || this;
        _this.weapName = 'Iron Sword';
        _this.physicalDMG = 9;
        _this.magicDMG = 0;
        _this.statusInflicting = null;
        _this.weapMainAtt = 'str';
        _this.apRequired = 3;
        return _this;
    }
    return IronSword;
}(Weapon));
var IronDagger = /** @class */ (function (_super) {
    __extends(IronDagger, _super);
    function IronDagger() {
        var _this = _super.call(this) || this;
        _this.weapName = 'Iron Dagger';
        _this.physicalDMG = 5;
        _this.magicDMG = 0;
        _this.statusInflicting = null;
        _this.weapMainAtt = 'fin';
        _this.apRequired = 2;
        return _this;
    }
    return IronDagger;
}(Weapon));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        var _this = _super.call(this) || this;
        _this.weapName = 'Staff';
        _this.physicalDMG = 3;
        _this.magicDMG = 4;
        _this.statusInflicting = null;
        _this.weapMainAtt = 'int';
        _this.apRequired = 3;
        return _this;
    }
    return Staff;
}(Weapon));
var Robe = /** @class */ (function (_super) {
    __extends(Robe, _super);
    function Robe() {
        var _this = _super.call(this) || this;
        _this.armorName = 'Robe';
        _this.physicalResistance = 0;
        _this.magicResistance = 0.2;
        _this.armorEnchant = null;
        return _this;
    }
    return Robe;
}(Armor));
//# sourceMappingURL=WeapsArmors.js.map