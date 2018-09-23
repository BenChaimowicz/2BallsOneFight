// Main Container
var pageContainer = document.getElementById('pageContainer');
// Canvas
var battlefield = document.getElementsByTagName('canvas')[0];
var ctx = battlefield.getContext('2d');
battlefield.addEventListener('mousedown', getPos, false);
function getPos(event) {
    var posX = event.pageX - battlefield.offsetLeft;
    var posY = event.pageY - battlefield.offsetTop;
    console.log(posX + ' / ' + posY);
}
// Game Buttons
var buttonContainer = document.getElementById('buttonContainer');
var buttons = [];
for (var i = 0; i < document.getElementsByTagName('button').length; i++)
    buttons.push(document.getElementsByTagName('button')[i]);
// Character Creation
var creationWindow = document.getElementById('playerCreation');
var txtBox1 = document.getElementById('nameTxt');
var txtBox2 = document.getElementById('charTxt');
var classSlider = document.getElementById('classSelect');
var imgBox = document.getElementById('classImage');
var imgLabel = document.getElementById('classLabel');
// Image change
function creatorImageChange(val) {
    var selection = parseInt(classSlider.value);
    switch (selection) {
        case 1:
            imgBox.src = '/images/axe.png';
            imgLabel.innerText = 'Warrior';
            break;
        case 2:
            imgBox.src = '/images/dagger.png';
            imgLabel.innerText = 'Rogue';
            break;
        case 3:
            imgBox.src = '/images/wand.png';
            imgLabel.innerText = 'Wizard';
            break;
    }
}
// Player Creation and first hero creation
function submitSelection() {
    if (txtBox1.value != '' && txtBox2.value != '') {
        var selectionNumber = parseInt(classSlider.value);
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
        var addMore = confirm('Would you like to add more players?');
        if (addMore == false) {
            creationWindow.style.display = 'none';
        }
        PLAYERLIST.players[0].heroes[0].charAvatar.initAvatar();
        PLAYERLIST.players[0].heroes[0].drawAvatar();
    }
}
// Initialization
var PLAYERLIST = new PlayerList();
//# sourceMappingURL=app.js.map