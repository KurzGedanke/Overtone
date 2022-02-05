let ot_activeSong;
let ot_playerControlsContainer;
let ot_volumeControl = document.createElement('input');

ot_activeSong = document.getElementById('audioplayer');
ot_playerControlsContainer = document.getElementById('speedcontrols');


ot_volumeControl.setAttribute('type', 'range');
ot_volumeControl.setAttribute('min', '1');
ot_volumeControl.setAttribute('max', '100');
ot_volumeControl.setAttribute('value', '100');
ot_volumeControl.setAttribute('class', 'ot_volumeControl');
ot_volumeControl.setAttribute('id', 'ot_VC');
ot_volumeControl.setAttribute('style', 'width:100%;margin-top:1rem;cursor:pointer;');

ot_playerControlsContainer.appendChild(ot_volumeControl);

ot_volumeControl.oninput = function () {
    changeVolume(this.value);
}

function changeVolume(number) {
    ot_activeSong.volume = number / 100;
}