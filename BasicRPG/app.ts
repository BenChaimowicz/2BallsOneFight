// Main Container
var pageContainer: HTMLElement = document.getElementById('pageContainer');

// Canvas
var battlefield: HTMLCanvasElement = document.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
var ctx = battlefield.getContext('2d');
battlefield.addEventListener('mousedown', getPos, false);

function getPos(event:MouseEvent) {
    let posX = event.pageX - battlefield.offsetLeft;
    let posY = event.pageY - battlefield.offsetTop;
    console.log(posX + ' / ' + posY);
}

// Game Buttons
var buttonContainer: HTMLElement = document.getElementById('buttonContainer');
var buttons: HTMLElement[] = [];

for (let i = 0; i < document.getElementsByTagName('button').length; i++)
    buttons.push(document.getElementsByTagName('button')[i]);

// Character Creation
var creationWindow: HTMLElement = document.getElementById('playerCreation');
var txtBox1 = document.getElementById('nameTxt') as HTMLInputElement;
var txtBox2 = document.getElementById('charTxt') as HTMLInputElement;
var classSlider = document.getElementById('classSelect') as HTMLInputElement;
var imgBox = document.getElementById('classImage') as HTMLImageElement;
var imgLabel: HTMLElement = document.getElementById('classLabel');


    // Image change
function creatorImageChange(val) {
    let selection: number = parseInt(classSlider.value);
    switch (selection) {
        case 1:
            imgBox.src = '/images/axe.png';
            imgLabel.innerText = 'Warrior'
            break;
        case 2:
            imgBox.src = '/images/dagger.png';
            imgLabel.innerText = 'Rogue'
            break;  
        case 3:
            imgBox.src = '/images/wand.png';
            imgLabel.innerText = 'Wizard'
            break;
    }
}
    // Player Creation and first hero creation
function submitSelection() :void{
    if (txtBox1.value != '' && txtBox2.value != '') {
        let selectionNumber: number = parseInt(classSlider.value)
        if (selectionNumber == 1) {
            var newplayer = new Player();
            newplayer.playerName = txtBox1.value;
            var newWarr = new Warrior(newplayer, txtBox2.value);
            newplayer.addCharacter(newWarr);
            PLAYERLIST.addPlayer(newplayer);
        }
        if (selectionNumber == 2) {
            var newplayer = new Player();
            newplayer.playerName = txtBox1.value;
            var newRog = new Rogue(newplayer, txtBox2.value);
            newplayer.addCharacter(newRog);
            PLAYERLIST.addPlayer(newplayer);
        }
        if (selectionNumber == 3) {
            var newplayer = new Player();
            newplayer.playerName = txtBox1.value;
            PLAYERLIST.addPlayer(newplayer);
            var newWiz = new Wizard(newplayer, txtBox2.value);
            newplayer.addCharacter(newWiz);

        }

        let addMore: boolean = confirm('Would you like to add more players?');
        if (addMore == false) {
            creationWindow.style.display = 'none';
        }
        PLAYERLIST.players[0].heroes[0].charAvatar.initAvatar();
        PLAYERLIST.players[0].heroes[0].drawAvatar();
    }
}

// Initialization

var PLAYERLIST: PlayerList = new PlayerList();