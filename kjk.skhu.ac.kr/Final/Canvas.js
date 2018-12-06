var myContext = document.getElementById("myCanvas").getContext("2d");

myContext.strokeStyle = 'rgb(255, 255, 255)';
myContext.lineWidth=10;
myContext.beginPath();  // 앞바퀴
myContext.arc(600, 200, 80, 0, 2*Math.PI);
myContext.moveTo(600, 200);  // 원 중심
myContext.lineTo(360, 50);  // 서스펜션+스템 역활 하는 선
myContext.closePath();
myContext.stroke();

myContext.moveTo(440, 100);  // 차대 부분
myContext.lineTo(120, 100);
myContext.moveTo(360, 50);
myContext.lineTo(320, 60);
myContext.stroke();

myContext.beginPath();
myContext.arc(85, 200, 80, 0, 2*Math.PI); // 뒷바퀴
myContext.moveTo(85, 200);  // 원 중심
myContext.lineTo(120, 100);  // 서스펜션 역활 하는 선
myContext.closePath();
myContext.lineTo(320, 200);  // 스윙암 역활 하는 선
myContext.lineTo(440, 100);
myContext.stroke();

myContext.beginPath();
myContext.rect(120, 80, 200, 20);  // 안장
myContext.closePath();
myContext.stroke();

myContext.beginPath();
myContext.moveTo(120, 80);  // 등받이 시작
myContext.lineTo(80, 10);
myContext.lineTo(85, 5);
myContext.lineTo(130, 80);
myContext.closePath();
myContext.stroke();