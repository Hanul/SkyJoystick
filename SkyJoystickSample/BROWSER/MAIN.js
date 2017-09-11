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
	}
});
