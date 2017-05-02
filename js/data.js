var cartoonlist1 = new Vue({
					el:'#list1',
					data:{
						items:[
						{imgUrl:"img/p_mengmeizi.png",name:"萌妹子"},
						{imgUrl:"img/p_nvshen.png",name:"女神"},
						{imgUrl:"img/p_nvhanzi.png",name:"女汉子"}
						]
					}
				})
				var cartoonlist2 = new Vue({
					el:'#list2',
					data:{
						items:[
						{imgUrl:"img/p_nvdiaosi.png",name:"女diao丝"},
						{imgUrl:"img/p_cunyemen.png",name:"纯爷们"}
						]
					}
				})
				var cardlist1 = new Vue({
            el:'#card-list1',
            data:{
            	items:[
                 {imgUrl:"img/11.jpg",name:"翻我牌"},
                 {imgUrl:"img/12.jpg",name:"么么哒"}   
            	]
            }
				})
					var cardlist2 = new Vue({
            el:'#card-list2',
            data:{
            	items:[
                 {imgUrl:"img/13.jpg",name:"爱小主"},
                 {imgUrl:"img/14.jpg",name:"奴婢能"},
                  {imgUrl:"img/15.jpg",name:"求爱心"}    
            	]
            }
				})
				var cardlist3 = new Vue({
            el:'#card-list3',
            data:{
            	items:[
                 {imgUrl:"img/16.jpg",name:"求戳"},
                 {imgUrl:"img/17.jpg",name:"DUANG\n一下"}   
            	]
            }
				})
				$("#card-list3 .card-list-item:eq(1) .card-text p:eq(1)").html(cardlist3.items[1].name.replace("\n","<br/>"))