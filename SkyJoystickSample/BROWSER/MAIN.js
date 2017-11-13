SkyJoystickSample.MAIN = METHOD({

	run : (params) => {
		
		SkyJoystickSample.MATCH_VIEW({
			uri : '',
			target : SkyJoystickSample.Home
		});
		
		SkyJoystickSample.MATCH_VIEW({
			uri : 'dpad',
			target : SkyJoystickSample.DPadSample
		});
		
		SkyJoystickSample.MATCH_VIEW({
			uri : 'dpad45',
			target : SkyJoystickSample.DPad45Sample
		});
		
		SkyJoystickSample.MATCH_VIEW({
			uri : 'analogstick',
			target : SkyJoystickSample.AnalogStickSample
		});
		
		SkyJoystickSample.MATCH_VIEW({
			uri : 'leftandright',
			target : SkyJoystickSample.LeftAndRightSample
		});
		
		SkyJoystickSample.MATCH_VIEW({
			uri : 'gamepad',
			target : SkyJoystickSample.GamePadSample
		});
	}
});
