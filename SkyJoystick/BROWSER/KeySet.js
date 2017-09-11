SkyJoystick.KeySet = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
				right : 10,
				zIndex : 999
			}
		};
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.keys
		
		let keys = params.keys;
		
		EACH(keys, (key, i) => {
			self.append(key);
		});
		
		self.addStyle({
			onDisplayResize : (width, height) => {
				return {
					top : height - self.getHeight() - 10
				};
			}
		});
	}
});
