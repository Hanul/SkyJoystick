SkyJoystickSample.DPadSample = CLASS({
	
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
		
		SkyJoystick.DPad({
			img : IMG({
				src : SkyJoystickSample.R('dpad.png')
			}),
			on : {
				up : () => {
					console.log('Up!');
					sample.empty();
					sample.append('Up!');
				},
				right : () => {
					console.log('Right!');
					sample.empty();
					sample.append('Right!');
				},
				down : () => {
					console.log('Down!');
					sample.empty();
					sample.append('Down!');
				},
				left : () => {
					console.log('Left!');
					sample.empty();
					sample.append('Left!');
				}
			}
		}).appendTo(wrapper);
		
		SkyJoystick.KeySet({
			keys : [SkyJoystick.Key({
				img : IMG({
					src : SkyJoystickSample.R('a.png')
				}),
				on : {
					touchstart : () => {
						console.log('Attack!');
						sample.empty();
						sample.append('Attack!');
					}
				}
			})]
		}).appendTo(wrapper);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
