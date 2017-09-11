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
			})]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
