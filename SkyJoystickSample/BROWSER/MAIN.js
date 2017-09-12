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
	}
});
