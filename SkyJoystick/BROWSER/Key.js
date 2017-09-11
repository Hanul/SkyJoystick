SkyJoystick.Key = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.img
		
		let img = params.img;
		
		let direction;
		
		self.append(img);
		
		img.on('load', () => {
			EVENT.fireAll('resize');
		});
		
		self.on('touchstart', (e) => {
			e.stop();
		});
		
		self.on('touchend', (e) => {
			e.stop();
		});
	}
});
