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
var Player = /** @class */ (function () {
    function Player() {
        this.bfSide = 'left';
        this.heroes = [];
    }
    Object.defineProperty(Player.prototype, "playerName", {
        get: function () {
            return this._playerName;
        },
        set: function (name) {
            this._playerName = name;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.addCharacter = function (cls) {
        this.heroes.push(cls);
    };
    return Player;
}());
var PlayerList = /** @class */ (function () {
    function PlayerList() {
        this._players = [];
    }
    Object.defineProperty(PlayerList.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: true,
        configurable: true
    });
    PlayerList.prototype.addPlayer = function (player) {
        this._players.push(player);
    };
    return PlayerList;
}());
var Character = /** @class */ (function () {
    function Character(_alliance, _name) {
        this.charAvatar = new Avatar(this);
        this.charLvl = 1;
        this.charXP = 0;
        this.baseAP = 4;
        this.baseHP = 40;
        this.physicalResist = 0.1;
        this.magicResist = 0.1;
        this.currAP = this.baseAP;
        this.currStatus = new NormalStatus();
        this.charAlliance = _alliance;
        this.charName = _name;
        this.charAvatar.avatarAlliance = _alliance;
    }
    Object.defineProperty(Character.prototype, "charAlliance", {
        get: function () {
            return this._charAlliance;
        },
        set: function (playerName) {
            this._charAlliance = playerName;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.dealDMG = function (dmg, target) {
        target.currHP -= dmg;
        console.log(this.charName + ' dealt ' + dmg + ' damage to ' + target.charName);
        console.log('current HP: ' + target.currHP);
    };
    Character.prototype.calcDmgDealt = function (dmg, mitigation) {
        var damage = dmg[0] * mitigation[0] + dmg[1] * mitigation[1];
        return damage;
    };
    Character.prototype.calcMitigation = function (target) {
        var physMitigation = 1 - target.physicalResist - target.currArmor.physicalResistance - target.currStatus.pDmgResMod;
        var magicMitigation = 1 - target.magicResist - target.currArmor.magicResistance - target.currStatus.mDmgResMod;
        return [physMitigation, magicMitigation];
    };
    Character.prototype.defend = function () {
    };
    Character.prototype.useItem = function (item) {
    };
    Character.prototype.useSkill = function (skill) {
    };
    Character.prototype.drawAvatar = function () {
        ctx.beginPath();
        ctx.clearRect(0, 0, battlefield.width, battlefield.height);
        ctx.arc(this.charAvatar.avatarX, this.charAvatar.avatarY, this.charAvatar.avatarSize / 2, 0, Math.PI * 2, false);
        ctx.fillStyle = this.charAvatar.avatarColor;
        ctx.stroke();
    };
    return Character;
}());
// Depiction of Characters on canvas
var Avatar = /** @class */ (function () {
    function Avatar(char) {
        this.avatarColor = 'black';
        this.avatarSize = 20;
        this.avatarRadius = this.avatarSize / 2;
        this.avatarAlliance = char.charAlliance;
    }
    Avatar.prototype.initAvatar = function () {
        if (this.avatarAlliance.bfSide = 'left') {
            this.avatarX = 50;
            this.avatarY = 300;
        }
        if (this.avatarAlliance.bfSide = 'right') {
            this.avatarX = 750;
            this.avatarY = 300;
        }
    };
    return Avatar;
}());
var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());
var NormalStatus = /** @class */ (function (_super) {
    __extends(NormalStatus, _super);
    function NormalStatus() {
        var _this = _super.call(this) || this;
        _this.statName = 'Normal';
        _this.pDmgMod = 1;
        _this.mDmgMod = 1;
        _this.pDmgResMod = 0;
        _this.mDmgResMod = 0;
        _this.statDuration = null;
        _this.statColor = 'black';
        return _this;
    }
    return NormalStatus;
}(Status));
var Armor = /** @class */ (function () {
    function Armor() {
    }
    return Armor;
}());
var Enchantment = /** @class */ (function () {
    function Enchantment() {
    }
    return Enchantment;
}());
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    return Weapon;
}());
var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
}());
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
//# sourceMappingURL=Classes.js.map