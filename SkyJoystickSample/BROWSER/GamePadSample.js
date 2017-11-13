SkyJoystickSample.GamePadSample = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let wrapper = DIV().appendTo(BODY);
		
		let sample = DIV({
			style : {
				position : 'fixed',
				width : 200,
				textAlign : 'center',
				fontSize : 50,
				onDisplayResize : (width, height) => {
					return {
						left : width / 2 - 100,
						top : height / 2 - 40
					};
				}
			}
		}).appendTo(wrapper);
		
		let gamePadController = SkyJoystick.GamePadController({
			onKeydown : (gamePadIndex, keyIndex) => {
				console.log(gamePadIndex + '번 게임 패드의 ' + keyIndex + '키가 눌렸습니다.');
				sample.empty();
				sample.append(keyIndex);
			},
			onKeyup : (gamePadIndex, keyIndex) => {
				console.log(gamePadIndex + '번 게임 패드의 ' + keyIndex + '키에서 뗐습니다.');
			},
			onChangeStick : (gamePadIndex, stickIndex, angle) => {
				console.log(gamePadIndex + '번 게임 패드의 ' + stickIndex + '번 스틱의 각도가 ' + angle + '로 변경되었습니다.');
				sample.empty();
				sample.append(INTEGER(angle));
			},
			onReleaseStick : (gamePadIndex, stickIndex) => {
				console.log(gamePadIndex + '번 게임 패드의 ' + stickIndex + '번 스틱에서 뗐습니다.');
			}
		}).appendTo(SkyEngine.Screen);
		
		inner.on('close', () => {
			wrapper.remove();
			gamePadController.remove();
		});
	}
});
