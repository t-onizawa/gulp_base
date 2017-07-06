// Webpackをtrueにしているとimoport, es2015記述が使用可能
import Test from './test-folder/Test';

class Sample {
	constructor() {
		this.init();
	}

	init() {
		new Test();
	}
}

new Sample();