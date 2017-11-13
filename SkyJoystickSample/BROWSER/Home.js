SkyJoystickSample.Home = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let wrapper = DIV({
			style : {
				padding : 10,
				textAlign : 'center'
			},
			c : [DIV({
				style : {
					flt : 'left'
				},
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
				style : {
					marginLeft : 10,
					flt : 'left'
				},
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
				style : {
					marginLeft : 10,
					flt : 'left'
				},
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
			}), DIV({
				style : {
					marginLeft : 10,
					flt : 'left'
				},
				c : [H2({
					style : {
						marginBottom : 10
					},
					c : '좌우 키 샘플'
				}), A({
					c : IMG({
						src : SkyJoystickSample.R('leftandright.png')
					}),
					on : {
						tap : () => {
							SkyJoystickSample.GO('leftandright');
						}
					}
				})]
			}), DIV({
				style : {
					marginLeft : 10,
					flt : 'left'
				},
				c : [H2({
					style : {
						marginBottom : 10
					},
					c : '게임 패드 샘플'
				}), A({
					c : IMG({
						src : SkyJoystickSample.R('gamepad.png')
					}),
					on : {
						tap : () => {
							SkyJoystickSample.GO('gamepad');
						}
					}
				})]
			}), CLEAR_BOTH()]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
