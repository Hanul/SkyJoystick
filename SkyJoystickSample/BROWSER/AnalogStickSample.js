SkyJoystickSample.AnalogStickSample = CLASS({
	
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
		
		SkyJoystick.AnalogStick({
			img : IMG({
				src : SkyJoystickSample.R('analogstick.png')
			}),
			on : {
				change : (e, stick) => {
					console.log(stick.getAngle());
					sample.empty();
					sample.append(INTEGER(stick.getAngle()));
				}
			}
		}).appendTo(wrapper);
		
		SkyJoystick.KeySet({
			keys : [SkyJoystick.Key({
				img : IMG({
					src : SkyJoystickSample.R('a.png')
				}),
				value : 'A'
			}), SkyJoystick.Key({
				img : IMG({
					src : SkyJoystickSample.R('b.png')
				}),
				value : 'B'
			}), SkyJoystick.Key({
				img : IMG({
					src : SkyJoystickSample.R('x.png')
				}),
				value : 'X'
			})],
			on : {
				change : (e, keySet) => {
					console.log(keySet.getValue());
					sample.empty();
					sample.append(keySet.getValue());
				}
			}
		}).appendTo(wrapper);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
