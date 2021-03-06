SkyJoystick.Key = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.img
		//REQUIRED: params.value
		
		let img = params.img;
		let value = params.value;
		
		self.append(img);
		
		self.on('touchstart', (e) => {
			e.stop();
		});
		
		self.on('touchend', (e) => {
			e.stop();
		});
		
		let getValue = self.getValue = () => {
			return value;
		};
	}
});
