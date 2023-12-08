<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<body>

<section id="box">
	가격 : <input  v-model="price"> <br>
	수량 : <input  v-model="ea">
	<button type="button" v-on:click="ck">합계 확인</button>
		<span v-if="view==1">총 합계 금액 : {{result}}원</span>


</section>

</body>
<script src="./js/vue10.js"></script>
</html>