SkyJoystickSample.Home = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let wrapper = DIV({
			style : {
				padding : 10
			},
			c : [DIV({
				c : [H2({
					style : {
						marginBottom : 10
					},
					c : 'D-Pad 샘플'
				}), A({
					c : IMG({
						src : SkyJoystickSample.R('dpad.png')
					}),
					on : {
						tap : () => {
							SkyJoystickSample.GO('dpad');
						}
					}
				})]
			}), DIV({
				c : [H2({
					style : {
						marginBottom : 10
					},
					c : 'D-Pad 45도 샘플'
				}), A({
					c : IMG({
						style : {
							transform : 'rotate(45deg)'
						},
						src : SkyJoystickSample.R('dpad.png')
					}),
					on : {
						tap : () => {
							SkyJoystickSample.GO('dpad45');
						}
					}
				})]
			}), DIV({
				c : [H2({
					style : {
						marginBottom : 10
					},
					c : '아날로그 스틱 샘플'
				}), A({
					c : IMG({
						src : SkyJoystickSample.R('analogstick.png')
					}),
					on : {
						tap : () => {
							SkyJoystickSample.GO('analogstick');
						}
					}
				})]
			})]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
