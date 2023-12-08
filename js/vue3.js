let html = new Vue({  //실시간 데이터를 반영할 수 있습니다.
	el: "#box",
	data: {
		t1: "",
		t2: "",
		p: "숫자를 입력하세요",
		total: ""

	},
	methods: {
		abc: function() {  //vue의 html 값은 기본 문자
			//this => data함수 지칭
			this.total = Number(this.t1) + Number(this.t2);

		}

	}

});

let asd = new Vue({
	el: "#box2",
	data: {
		a1: "",  //발급된 보안코드
		code: "0123456",
		msg : ""  //메세지 출력 변수
	},
	methods: {
		sss: function() {
			if (this.a1 == this.code) {
				alert("보안코드 확인");
				this.msg = "보안코드를 확인 하였습니다"
			} else {
				alert("보안코드 잘못 입력")
				this.msg = "해당 보안코드가 잘못 입력됨"
			}
		}
	}


});