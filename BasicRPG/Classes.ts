class Player {
    private _playerName: string;
    bfSide: string = 'left';
    heroes: Character[] = [];

    get playerName() {
        return this._playerName;
    }
    set playerName(name: string) {
        this._playerName = name;
    }

    addCharacter(cls:Character) {
        this.heroes.push(cls);
    }
}

class PlayerList {

    private readonly _players: Player[] = [];

    constructor() {
        
    }

    get players() {
        return this._players;
    }

    addPlayer(player: Player) {
        this._players.push(player);
    }
}

class Character {
    charName: string;
    private _charAlliance: Player;
    charAvatar: Avatar = new Avatar(this);
    
    charLvl: number = 1;
    charXP: number = 0;
    strength: number;
    finesse: number;
    intelligence: number;
    baseAP: number = 4;
    baseHP: number = 40;
    physicalResist: number = 0.1;
    magicResist: number = 0.1;

    currAP: number = this.baseAP;
    currHP: number;
    currStatus: Status = new NormalStatus();
    currWeapon: Weapon;
    currArmor: Armor;

    constructor(_alliance: Player, _name: string) {
        this.charAlliance = _alliance;
        this.charName = _name;
        this.charAvatar.avatarAlliance = _alliance;
    }

    get charAlliance(): Player {
        return this._charAlliance;
    }
    set charAlliance(playerName: Player) {
        this._charAlliance = playerName;
    }

    dealDMG(dmg: number, target: Character) {
        target.currHP -= dmg;
        console.log(this.charName + ' dealt ' + dmg + ' damage to ' + target.charName);
        console.log('current HP: ' + target.currHP);
    }

    calcDmgDealt(dmg: number[], mitigation: number[]): number {
        let damage: number = dmg[0] * mitigation[0] + dmg[1] * mitigation[1];
        return damage;
    }

    calcMitigation(target: Character): number[] {
        let physMitigation: number = 1 - target.physicalResist - target.currArmor.physicalResistance - target.currStatus.pDmgResMod;
        let magicMitigation: number = 1 - target.magicResist - target.currArmor.magicResistance - target.currStatus.mDmgResMod;

        return [physMitigation, magicMitigation];
    }
    defend() {

    }

    useItem(item: string) {

    }

    useSkill(skill: string) {

    }

    drawAvatar() {
        ctx.beginPath();
            ctx.clearRect(0, 0, battlefield.width, battlefield.height);
            ctx.arc(this.charAvatar.avatarX, this.charAvatar.avatarY, this.charAvatar.avatarSize / 2, 0, Math.PI * 2, false);
            ctx.fillStyle = this.charAvatar.avatarColor;
            ctx.stroke();
    }
}
// Depiction of Characters on canvas
class Avatar {
    avatarSize: number;
    avatarColor: string = 'black';
    avatarAlliance: Player;
    avatarX: number;
    avatarY: number;
    avatarRadius: number;

    constructor(char: Character) {
        this.avatarSize = 20;
        this.avatarRadius = this.avatarSize / 2;
        this.avatarAlliance = char.charAlliance;
    }
    initAvatar() {
        if (this.avatarAlliance.bfSide = 'left') {
            this.avatarX = 50;
            this.avatarY = 300;
        }
        if (this.avatarAlliance.bfSide = 'right') {
            this.avatarX = 750;
            this.avatarY = 300;
        }
    }
}

class Status {
    statName: string;
    pDmgMod: number;
    mDmgMod: number;
    pDmgResMod: number;
    mDmgResMod: number;
    statDuration: number;

    statColor: string;
}

class NormalStatus extends Status {
    constructor() {
        super();
        this.statName = 'Normal';
        this.pDmgMod = 1;
        this.mDmgMod = 1;
        this.pDmgResMod = 0;
        this.mDmgResMod = 0;
        this.statDuration = null;
        this.statColor = 'black';
    }
}


class Armor {
    armorName: string;
    physicalResistance: number;
    magicResistance: number;
    armorEnchant: Enchantment;
}

class Enchantment {
    enchName: string;
}

class Weapon {
    weapName: string;
    physicalDMG: number;
    magicDMG: number;
    statusInflicting: Status;
    weapMainAtt: string;
    apRequired: number;
}

class Skill {
    skillName: string;
    skillTarget: Character;
    statusInflict: Status;
    skillPhysicalDMG: number;
    skillMagicDMG: number;

}

class Item {
    itemName: string;
    itemEffect: Status;
    itemTarget: Character;
}