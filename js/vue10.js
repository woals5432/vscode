

let html = new Vue({
	el: "#box",
	data: {
		price:"",
		ea:"",
		result:"",
		view:"0",
	},
	methods: {
		ck:function(){
			this.result = (Number(this.price) * Number(this.ea)).toLocaleString();
			if (this.result != "" || this.result > 0){
			this.view = "1"; 
			}
						
		}
	}

})