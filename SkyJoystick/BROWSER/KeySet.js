SkyJoystick.KeySet = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
				right : 20,
				bottom : 20,
				zIndex : 999
			}
		};
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.keys
		
		let keys = params.keys;
		
		let value;
		
		EACH(keys, (key, i) => {
			
			key.addStyle({
				marginLeft : 10,
				marginTop : 10,
				flt : 'left'
			});
			
			key.on('touchstart', (e) => {
				if (value !== key.getValue()) {
					value = key.getValue();
					self.fireEvent('change');
				}
			});
			
			key.on('touchend', (e) => {
				value = undefined;
				self.fireEvent('touchend');
			});
			
			self.append(key);
			
			if (keys.length === 3 && i === 0) {
				
				key.addStyle({
					flt : 'right'
				});
				
				self.append(CLEAR_BOTH());
			}
			
			if (keys.length === 4 && i === 1) {
				self.append(CLEAR_BOTH());
			}
		});
		
		self.append(CLEAR_BOTH());
		
		let getValue = self.getValue = () => {
			return value;
		};
		
		let handler = (e) => {
			
			EACH(e.getPositions(), (position) => {
				if (position.left > WIN_HEIGHT() / 2) {
					
					EACH(keys, (key, i) => {
						
						if (
						value !== key.getValue() &&
						position.left >= key.getLeft() &&
						position.left <= key.getLeft() + key.getWidth() &&
						position.top >= key.getTop() &&
						position.top <= key.getTop() + key.getHeight()) {
							
							value = key.getValue();
							self.fireEvent('change');
						}
					});
				}
			});
		};
		
		self.on('touchstart', handler);
		self.on('touchmove', handler);
	}
});
