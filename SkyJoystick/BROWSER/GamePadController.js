SkyJoystick.GamePadController = CLASS((cls) => {
	
	let checkIsConnected = cls.checkIsConnected = () => {
		
		let count = 0;
		EACH(navigator.getGamepads(), (gamepad) => {
			if (gamepad !== TO_DELETE) {
				count += 1;
			}
		});
		
		return count > 0;
	};
	
	return {
		
		preset : () => {
			return SkyEngine.Node;
		},
		
		init : (inner, self, handlers) => {
			//REQUIRED: handlers
			//OPTIONAL: handlers.onConnected
			//OPTIONAL: handlers.onKeydown
			//OPTIONAL: handlers.onKeyup
			//OPTIONAL: handlers.onChangeStick
			//OPTIONAL: handlers.onReleaseStick
			
			let onConnected = handlers.onConnected;
			let onKeydown = handlers.onKeydown;
			let onKeyup = handlers.onKeyup;
			let onChangeStick = handlers.onChangeStick;
			let onReleaseStick = handlers.onReleaseStick;
			
			let beforeButtonPressedMap = [];
			let beforeStickMovedMap = [];
			let beforeAngleMap = [];
			
			let isConnected = false;
			
			let step;
			OVERRIDE(self.step, (origin) => {
				
				step = self.step = (deltaTime) => {
					
					if (onConnected !== undefined && isConnected !== true && checkIsConnected() === true) {
						onConnected();
						isConnected = true;
					}
					
					let gamePadDataSet = navigator.getGamepads();
					let gamePadDataLength = gamePadDataSet.length;
					
					// 게임 패드가 제거된 경우
					if (gamePadDataLength < beforeButtonPressedMap.length) {
						
						for (let i = gamePadDataLength; i < beforeButtonPressedMap.length; i += 1) {
							let beforeButtonPresseds = beforeButtonPressedMap[i];
							
							for (let j = 0; j < beforeButtonPresseds.length; j += 1) {
								if (onKeyup !== undefined && beforeButtonPresseds[j] === true) {
									onKeyup(i, j);
								}
							}
						}
						
						beforeButtonPressedMap.splice(gamePadDataLength, beforeButtonPressedMap.length - gamePadDataLength);
					}
					
					if (gamePadDataLength < beforeStickMovedMap.length) {
						
						for (let i = gamePadDataLength; i < beforeStickMovedMap.length; i += 1) {
							let stickMoveds = beforeStickMovedMap[i];
							
							for (let j = 0; j < stickMoveds.length; j += 1) {
								if (onReleaseStick !== undefined && stickMoveds[j] === true) {
									onReleaseStick(i, stickMoveds[j]);
								}
							}
						}
						
						beforeStickMovedMap.splice(gamePadDataLength, beforeStickMovedMap.length - gamePadDataLength);
					}
					
					for (let i = 0; i < gamePadDataLength; i += 1) {
						let gameData = gamePadDataSet[i];
						
						let beforeButtonPresseds = beforeButtonPressedMap[i];
						if (beforeButtonPresseds === undefined) {
							beforeButtonPressedMap[i] = beforeButtonPresseds = [];
						}
						
						let beforeStickMoveds = beforeStickMovedMap[i];
						if (beforeStickMoveds === undefined) {
							beforeStickMovedMap[i] = beforeStickMoveds = [];
						}
						
						let beforeAngles = beforeAngleMap[i];
						if (beforeAngles === undefined) {
							beforeAngleMap[i] = beforeAngles = [];
						}
						
						if (gameData !== TO_DELETE) {
							
							let buttons = gameData.buttons;
							for (let j = 0; j < buttons.length; j += 1) {
								
								let isPressed = buttons[j].pressed;
								
								if (onKeydown !== undefined && isPressed === true && beforeButtonPresseds[j] !== true) {
									onKeydown(i, j);
								}
								if (onKeyup !== undefined && isPressed !== true && beforeButtonPresseds[j] === true) {
									onKeyup(i, j);
								}
								
								beforeButtonPresseds[j] = isPressed;
							}
							
							for (let j = buttons.length; j < beforeButtonPresseds.length; j += 1) {
								if (onKeyup !== undefined && beforeButtonPresseds[j] === true) {
									onKeyup(i, j);
								}
							}
							beforeButtonPresseds.splice(buttons.length, beforeButtonPresseds.length - buttons.length);
							
							let axes = gameData.axes;
							let angleCount = axes.length / 2;
							
							for (let j = 0; j < angleCount; j += 1) {
								
								let axesIndex = j / 2;
								let axesX = axes[axesIndex];
								let axesY = axes[axesIndex + 1];
								
								let isStickMoved = Math.abs(axesX) + Math.abs(axesY) > 0.5;
								let angle = Math.atan2(axesY, axesX) * 180 / Math.PI;
								
								if (onChangeStick !== undefined && isStickMoved === true && angle !== beforeAngles[j]) {
									onChangeStick(i, j, angle);
								}
								beforeAngles[j] = angle;
								
								if (onReleaseStick !== undefined && isStickMoved !== true && beforeStickMoveds[j] === true) {
									onReleaseStick(i, j);
								}
								beforeStickMoveds[j] = isStickMoved;
							}
							
							for (let j = angleCount; j < beforeStickMoveds.length; j += 1) {
								if (onReleaseStick !== undefined && beforeStickMoveds[j] === true) {
									onReleaseStick(i, j);
								}
							}
							beforeStickMoveds.splice(angleCount, beforeStickMoveds.length - angleCount);
							beforeAngles.splice(angleCount, beforeAngles.length - angleCount);
						}
					}
					
					origin(deltaTime);
				};
			});
			
			self.appendTo(SkyEngine.Screen.getNonePausableNode());
		}
	};
});
