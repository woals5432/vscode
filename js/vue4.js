
let html = new Vue({
	el: "#box",
	data: {
		search: "",
		subject: [] //v-model이 같은 이름일 경우 배열기호 받으면 배열값으로 저장이됨

	},
	methods: {
		aaa: function() {

		}

	}


})

var html2 = new Vue({
	el: "#box2",
	data: {
		agree: "",

	},
	methods: {
		aaa: function() {
			if (this.agree == "") {
				alert("동의함에 체크하셔야 합니다")
			} else {
				this.agree == "y"
				alert('동의 완료 ')
			}

		}
	}

})