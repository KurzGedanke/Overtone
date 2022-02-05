let ot_activeSong;
let ot_playerControlsContainer;
let ot_volumeControl = document.createElement('input');
let ot_volumeControlText = document.createElement('p');
ot_volumeControlText.textContent += 'Volume';

ot_activeSong = document.getElementById('audioplayer');
ot_playerControlsContainer = document.getElementById('speedcontrols');


ot_volumeControl.setAttribute('type', 'range');
ot_volumeControl.setAttribute('min', '1');
ot_volumeControl.setAttribute('max', '100');
ot_volumeControl.setAttribute('value', '100');
ot_volumeControl.setAttribute('class', 'ot_volumeControl');
ot_volumeControl.setAttribute('id', 'ot_VC');
ot_volumeControl.setAttribute('style', 'width:100%;cursor:pointer;');

ot_volumeControlText.setAttribute('style', 'text-align: center;margin-top:15px;margin-bottom:0;')

ot_playerControlsContainer.appendChild(ot_volumeControlText)
ot_playerControlsContainer.appendChild(ot_volumeControl);

ot_volumeControl.oninput = function () {
    changeVolume(this.value);
}

function changeVolume(number) {
    ot_activeSong.volume = number / 100;
}