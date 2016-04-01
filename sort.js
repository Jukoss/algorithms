	
	var  testArray = [];
	for (var i=0; i<10000;i++) {
		testArray[i] = (Math.random()*100).toFixed();
	}
		//Просте сортування
	 	testArray.sortJust = function() { 
			for (var i = 0; i < testArray.length; i++) {
				if((testArray[i]-testArray[i+1])>0) { //порівняння сусідніх елементів
					//заміна якщо попередній більший за наступний
					tmp = testArray[i];				
					testArray[i] = testArray[i+1];
					testArray[i+1] = tmp;
					i=-1;			
				}
			}
			for (var i = 0; i <  testArray.length; i++) {
				testArray[i] = testArray[i]/1;			
			}
		}
		//Бульбашка
		testArray.sortBooble = function() {
				do {
					sort=false;	
					for (var i = 0; i < testArray.length; i++) {
						if((testArray[i]-testArray[i+1])>0) {
							tmp = testArray[i];
							testArray[i] = testArray[i+1];
							testArray[i+1] = tmp;
							sort=true;			
						}	
					}
				}
				while(sort) //поки всі більші елементи не переміщені в праву сторону
					
		};
		//Вибірка
		testArray.sortSelect = function() {
			for (var i = 0; i < testArray.length-1; i++) { //два цикли
				var smallest = i; //перший елемент найменший
				//починаючи з другого елемента
				for (var j = i + 1; j < testArray.length; j++) { 
					//перевіряємо чи існує менший елемент
					if (testArray[j]<testArray[smallest]) { 
						tmp = testArray[j];	// якщо існує - міняємо місцями
						testArray[j] = testArray[smallest];
						testArray[smallest] = tmp;
					}
					//на кожному кроці циклу і проходмо весь масив від і+1(j) до n
					//шукаємо найменший елемент і вставляємо на місе елемента з
					//індексом і
				}
				
			}
			
		};
		//Вставка
		testArray.sortInsert = function() {
			for (var i = 1; i < testArray.length; i++) {
				var key = testArray[i]; 
				var j = i - 1;
				while (j >= 0 && testArray[j]>key) {
					testArray[j+1] = testArray[j];
					j--;
				}
				testArray[j+1] = key;
			}
			
		};

		testArray.sortMerge = function(p,r) {

			var B = [];
			var C = [];
			
			function startMerge(p,r) {
				if (p < r) {
				
					var q = Math.floor((p+r)/2);
					startMerge(p,q);
					startMerge(q+1,r);
					merge(p,q,r);
				}
			}
			
			function merge(p,q,r) {
				
				var j=0;
				for (var i = p; i<=q; i++) {
					
					B[j] = testArray[i];
					j++;
					B[j] = 100000;
				}
				j=0;
				for (var i = q+1; i<=r; i++) {
					C[j] = testArray[i];
					j++;
					C[j] = 100000;
				}
				
				i=0;
				j=0;
				for (var k = p; k <=r; k++) {
					if (B[i]<=C[j]) {
						testArray[k] = B[i];
						i++;
					}
					else if (B[i]>C[j]) {
						testArray[k]=C[j];
						j++;
				
					}
					
				}
			}
			startMerge(p,r);
		}

var a = Date.now();
	testArray.sortMerge(0,testArray.length-1);
var b = Date.now();
var res = b - a;	
console.log(testArray+"\n"+res+ " mc")

